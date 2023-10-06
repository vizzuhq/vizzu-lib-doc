let inTransientState = false
let navAnimationType = 'initial'
let stateFDisabled = false
let stateFRestore = false

let stateL = true // eslint-disable-line prefer-const
let stateF = false
let stateLC = true // eslint-disable-line prefer-const
let stateFC = false // eslint-disable-line prefer-const

let lastStateL = true
let lastStateF = false
let lastStateLC = true
let lastStateFC = false

const dirFilter = []
let dirMaxDepth = 0 // eslint-disable-line prefer-const
let databaseFileCount = 0
const paralellAnimLimit = 1500
let currentDirectory = 'workspace' // eslint-disable-line no-unused-vars
let statusBarTimer = null
let progressTimer = null
let progressState = 0
const delayBeforeProgress = 4000

function busyPromise(fn) {
  let _resolve
  let timeout
  const promise = new Promise((resolve, reject) => {
    _resolve = resolve
    timeout = setTimeout(() => {}, 10000)
  })
  return {
    promise,
    exec(ready) {
      fn().then(() => {
        // eslint-disable-next-line eqeqeq
        if (ready != undefined) ready()
        clearTimeout(timeout)
        timeout = null
        _resolve()
      })
    }
  }
}

// eslint-disable-next-line no-unused-vars
function performInitAnimation(info) {
  if (!enterTransientState()) return
  const promise1 = animInit(infoChart) // eslint-disable-line no-undef
  const promise2 = navAnimInit(navChart) // eslint-disable-line no-undef
  databaseFileCount = info.files
  Promise.all([promise1, promise2]).then(() => leaveTransientState())
}

// eslint-disable-next-line no-unused-vars
function performAnimation() {
  if (!enterTransientState()) return
  navAnimationType = selectNavAnimationType()
  if (databaseFileCount < paralellAnimLimit) paralellAnim()
  else serialAnim()
  updateAnimationVariables()
}

// eslint-disable-next-line no-unused-vars
function performFilteringAnimationFw(event) {
  navAnimationType = 'navFw'
  if (event.target.tagName === 'plot-marker') {
    if (dirMaxDepth > dirFilter.length) {
      const level = dirFilter.length
      const levelStr = 'Folder level ' + level.toString()
      const filterStr = event.target.categories[levelStr]
      currentDirectory = 'workspace' + filterStr.substring(1)
      setBackLabelState(false) // eslint-disable-line no-undef
      if (dirFilter[dirFilter.length - 1] === filterStr) {
        // eslint-disable-next-line no-undef
        vscode.postMessage({ command: 'showinfo', text: 'No more folder under this level!' })
        enableControls() // eslint-disable-line no-undef
      } else {
        dirFilter.push(filterStr)
        applyFilterFw()
        // eslint-disable-next-line no-undef
        vscode.postMessage({ command: 'showinexplorer', text: filterStr })
      }
    } else {
      // eslint-disable-next-line no-undef
      vscode.postMessage({ command: 'showinfo', text: 'No more folder under this level!' })
    }
  }
}

// eslint-disable-next-line no-unused-vars
function performFilteringAnimationBw() {
  navAnimationType = 'navBw'
  if (dirFilter.length > 0) {
    enterTransientState()
    if (dirMaxDepth > dirFilter.length) {
      if (stateLC)
        // eslint-disable-next-line no-undef
        nav_anim_10xx_filter_bw(navChart, dirFilter.length - 1).then(() => {
          applyFilterBw()
        })
      else {
        // eslint-disable-next-line no-undef
        nav_anim_01xx_filter_bw(navChart, dirFilter.length - 1).then(() => {
          applyFilterBw()
        })
      }
    } else {
      applyFilterBw()
    }
  }
}

function startProgressIndication() {
  statusBarTimer = setTimeout(() => {
    statusBarTimer = null
    progressTimer = setInterval(() => {
      const msg = {
        command: 'statusbarmsg',
        text: 'CodeViz animation is in progress',
        timeout: 310
      }
      if (progressState === 0) msg.text += '.'
      if (progressState === 1) msg.text += '..'
      if (progressState === 2) msg.text += '...'
      vscode.postMessage(msg) // eslint-disable-line no-undef
      progressState++
      if (progressState === 3) progressState = 0
    }, 300)
  }, delayBeforeProgress)
}

function stopProgressIndication() {
  if (progressTimer != null) clearTimeout(progressTimer)
  progressTimer = null
  if (statusBarTimer != null) {
    clearTimeout(statusBarTimer)
  } else {
    // eslint-disable-next-line no-undef
    vscode.postMessage({
      command: 'statusbarmsg',
      text: 'CodeViz is ready.',
      timeout: 2000
    })
  }
}

function enterTransientState() {
  if (inTransientState) return false
  disableControls() // eslint-disable-line no-undef
  inTransientState = true
  startProgressIndication()
  return true
}

function leaveTransientState() {
  if (!inTransientState) return false
  enableControls() // eslint-disable-line no-undef
  if (navAnimationType == 'switchToLineCount') setFilesChekboxState(false, stateFRestore)
  if (stateFDisabled) setFilesChekboxState(true, false)
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
  lastState += lastStateLC ? '1' : '0'
  lastState += lastStateFC ? '1' : '0'
  lastState += lastStateL ? '1' : '0'
  lastState += lastStateF ? '1' : '0'
  return 'anim_' + lastState + '_' + state
}

function selectNavAnimationType() {
  let type = 'none'
  if (stateFC == true && lastStateFC == false) {
    type = 'switchToFileCount'
    stateFDisabled = true
    stateFRestore = stateF
    stateF = false
  }
  if (stateFC == false && lastStateFC == true) {
    type = 'switchToLineCount'
    stateF = stateFRestore
    stateFDisabled = false
  }
  return type
}

function updateAnimationVariables() {
  lastStateL = stateL
  lastStateF = stateF
  lastStateLC = stateLC
  lastStateFC = stateFC
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
  if (navAnimationType === 'switchToLineCount') {
    // eslint-disable-next-line no-undef
    promise1 = nav_anim_01xx_10xx(navChart, dirFilter.length)
  } else if (navAnimationType === 'switchToFileCount') {
    // eslint-disable-next-line no-undef
    promise1 = nav_anim_10xx_01xx(navChart, dirFilter.length)
  }
  // eslint-disable-next-line no-undef
  const promise2 = window[encodeAnimFunctionName()](infoChart)
  Promise.all([promise1, promise2]).then(() => {
    leaveTransientState()
    if (navAnimationType === 'switchToLineCount') stateFRestore = false
  })
}

function serialAnim() {
  const fnName = encodeAnimFunctionName()
  if (navAnimationType === 'switchToLineCount') {
    // eslint-disable-next-line no-undef
    nav_anim_01xx_10xx(navChart, dirFilter.length).then(() => {
      // eslint-disable-next-line no-undef
      window[fnName](infoChart).then(() => {
        leaveTransientState()
        stateFRestore = false
      })
    })
  } else if (navAnimationType === 'switchToFileCount') {
    // eslint-disable-next-line no-undef
    nav_anim_10xx_01xx(navChart, dirFilter.length).then(() => {
      // eslint-disable-next-line no-undef
      window[fnName](infoChart).then(() => {
        leaveTransientState()
      })
    })
  } else {
    // eslint-disable-next-line no-undef
    window[fnName](infoChart).then(() => {
      leaveTransientState()
    })
  }
}
