let inTransientState = false
let navAnimationType = 'initial'
let stateF_disabled = false
let stateF_restore = false

let stateL = true
let stateF = false
let stateLC = true
let stateFC = false

let last_stateL = true
let last_stateF = false
let last_stateLC = true
let last_stateFC = false

let dirFilter = []
let dirMaxDepth = 0
let databaseFileCount = 0
let paralellAnimLimit = 1500
let currentDirectory = 'workspace'
let statusBarTimer = null
let progressTimer = null
let progressState = 0
let delayBeforeProgress = 4000

function busyPromise(fn) {
  let _resolve
  let timeout
  let promise = new Promise((resolve, reject) => {
    _resolve = resolve
    timeout = setTimeout(() => {}, 10000)
  })
  return {
    promise,
    exec(ready) {
      fn().then(() => {
        if (ready != undefined) ready()
        clearTimeout(timeout)
        timeout = null
        _resolve()
      })
    }
  }
}

function performInitAnimation(info) {
  if (!enterTransientState()) return
  let promise1 = animInit(infoChart)
  let promise2 = navAnimInit(navChart)
  databaseFileCount = info.files
  Promise.all([promise1, promise2]).then(() => leaveTransientState())
}

function performAnimation() {
  if (!enterTransientState()) return
  navAnimationType = selectNavAnimationType()
  if (databaseFileCount < paralellAnimLimit) paralellAnim()
  else serialAnim()
  updateAnimationVariables()
}

function performFilteringAnimationFw(event) {
  navAnimationType = 'navFw'
  if (event.target.tagName === 'plot-marker') {
    if (dirMaxDepth > dirFilter.length) {
      let level = dirFilter.length
      let levelStr = 'Folder level ' + level.toString()
      let filterStr = event.target.categories[levelStr]
      currentDirectory = 'workspace' + filterStr.substring(1)
      setBackLabelState(false)
      if (dirFilter[dirFilter.length - 1] == filterStr) {
        vscode.postMessage({ command: 'showinfo', text: 'No more folder under this level!' })
        enableControls()
      } else {
        dirFilter.push(filterStr)
        applyFilterFw()
        vscode.postMessage({ command: 'showinexplorer', text: filterStr })
      }
    } else vscode.postMessage({ command: 'showinfo', text: 'No more folder under this level!' })
  }
}

function performFilteringAnimationBw() {
  navAnimationType = 'navBw'
  if (dirFilter.length > 0) {
    enterTransientState()
    if (dirMaxDepth > dirFilter.length) {
      if (stateLC)
        nav_anim_10xx_filter_bw(navChart, dirFilter.length - 1).then(() => {
          applyFilterBw()
        })
      else
        nav_anim_01xx_filter_bw(navChart, dirFilter.length - 1).then(() => {
          applyFilterBw()
        })
    } else {
      applyFilterBw()
    }
  }
}

function startProgressIndication() {
  statusBarTimer = setTimeout(() => {
    statusBarTimer = null
    progressTimer = setInterval(() => {
      let msg = {
        command: 'statusbarmsg',
        text: 'CodeViz animation is in progress',
        timeout: 310
      }
      if (progressState == 0) msg.text += '.'
      if (progressState == 1) msg.text += '..'
      if (progressState == 2) msg.text += '...'
      vscode.postMessage(msg)
      progressState++
      if (progressState == 3) progressState = 0
    }, 300)
  }, delayBeforeProgress)
}

function stopProgressIndication() {
  if (progressTimer != null) clearTimeout(progressTimer)
  progressTimer = null
  if (statusBarTimer != null) {
    clearTimeout(statusBarTimer)
  } else {
    vscode.postMessage({
      command: 'statusbarmsg',
      text: 'CodeViz is ready.',
      timeout: 2000
    })
  }
}

function enterTransientState() {
  if (inTransientState) return false
  disableControls()
  inTransientState = true
  startProgressIndication()
  return true
}

function leaveTransientState() {
  if (!inTransientState) return false
  enableControls()
  if (navAnimationType == 'switchToLineCount') setFilesChekboxState(false, stateF_restore)
  if (stateF_disabled) setFilesChekboxState(true, false)
  inTransientState = false
  stopProgressIndication()
  return true
}

function encodeAnimFunctionName() {
  let state = ''
  let lastState = ''
  state += stateLC ? '1' : '0'
  state += stateFC ? '1' : '0'
  state += stateL ? '1' : '0'
  state += stateF ? '1' : '0'
  lastState += last_stateLC ? '1' : '0'
  lastState += last_stateFC ? '1' : '0'
  lastState += last_stateL ? '1' : '0'
  lastState += last_stateF ? '1' : '0'
  return 'anim_' + lastState + '_' + state
}

function selectNavAnimationType() {
  let type = 'none'
  if (stateFC == true && last_stateFC == false) {
    type = 'switchToFileCount'
    stateF_disabled = true
    stateF_restore = stateF
    stateF = false
  }
  if (stateFC == false && last_stateFC == true) {
    type = 'switchToLineCount'
    stateF = stateF_restore
    stateF_disabled = false
  }
  return type
}

function updateAnimationVariables() {
  last_stateL = stateL
  last_stateF = stateF
  last_stateLC = stateLC
  last_stateFC = stateFC
}

function applyFilter() {
  let filter1 = busyPromise(() => {
    return navAnimRecordFilter(infoChart, (record) => selectRecord(record))
  })
  let filter2 = busyPromise(() => {
    return navAnimRecordFilter(navChart, (record) => selectRecord(record))
  })
  // always paralell
  if (true || databaseFileCount < paralellAnimLimit) {
    filter1.exec()
    filter2.exec()
  } else {
    filter1.exec(() => {
      filter2.exec()
    })
  }
  return [filter1, filter2]
}

function applyFilterFw() {
  enterTransientState()
  let promises = applyFilter()
  Promise.all([promises[0].promise, promises[1].promise]).then(() => {
    if (dirMaxDepth > dirFilter.length) {
      if (stateLC)
        nav_anim_10xx_filter_fw(navChart, dirFilter.length).then(() => leaveTransientState())
      else nav_anim_01xx_filter_fw(navChart, dirFilter.length).then(() => leaveTransientState())
    } else leaveTransientState()
  })
}

function applyFilterBw() {
  let filterStr = ''
  dirFilter.pop()
  if (dirFilter == 0) setBackLabelState(true)
  else {
    filterStr = dirFilter[dirFilter.length - 1]
    currentDirectory = 'workspace' + filterStr.substring(1)
    setBackLabelState(false)
  }
  let promises = applyFilter()
  Promise.all([promises[0].promise, promises[1].promise]).then(() => {
    leaveTransientState()
    if (filterStr != '') {
      vscode.postMessage({ command: 'showinexplorer', text: filterStr })
    }
  })
}

function selectRecord(record) {
  for (let i = 0; i < dirFilter.length; i++) {
    let name = 'Folder level ' + i
    let value = dirFilter[i]
    if (record[name] != value) return false
  }
  return true
}

function navLabelDrawHandler(event) {
  let tmp = []
  let label = event.target.value
  if (label == dirFilter[dirFilter.length - 1]) label = './'
  else tmp = label.split('/')
  if (tmp.length >= 2) label = tmp[tmp.length - 2]
  if (label == '.') label = './'
  let ctx = event.renderingContext
  let textRect = ctx.measureText(label)
  let height = textRect.actualBoundingBoxAscent
  ctx.save()
  let rect = event.detail.rect
  const tr = rect.transform
  ctx.transform(tr[0][0], tr[1][0], tr[0][1], tr[1][1], tr[0][2], tr[1][2])
  ctx.fillText(label, rect.size.x - textRect.width - height / 2, rect.size.y / 2 + height / 2)
  ctx.restore()
  event.preventDefault()
}

function paralellAnim() {
  let promise1 = Promise.resolve()
  if (navAnimationType == 'switchToLineCount') {
    promise1 = nav_anim_01xx_10xx(navChart, dirFilter.length)
  } else if (navAnimationType == 'switchToFileCount') {
    promise1 = nav_anim_10xx_01xx(navChart, dirFilter.length)
  }
  let promise2 = window[encodeAnimFunctionName()](infoChart)
  Promise.all([promise1, promise2]).then(() => {
    leaveTransientState()
    if (navAnimationType == 'switchToLineCount') stateF_restore = false
  })
}

function serialAnim() {
  let fnName = encodeAnimFunctionName()
  if (navAnimationType == 'switchToLineCount') {
    nav_anim_01xx_10xx(navChart, dirFilter.length).then(() => {
      window[fnName](infoChart).then(() => {
        leaveTransientState()
        stateF_restore = false
      })
    })
  } else if (navAnimationType == 'switchToFileCount') {
    nav_anim_10xx_01xx(navChart, dirFilter.length).then(() => {
      window[fnName](infoChart).then(() => {
        leaveTransientState()
      })
    })
  } else {
    window[fnName](infoChart).then(() => {
      leaveTransientState()
    })
  }
}
