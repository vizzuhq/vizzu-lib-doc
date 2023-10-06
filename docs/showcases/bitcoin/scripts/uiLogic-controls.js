function allDescendants(node, fn) {
  if (node == undefined || fn == undefined) return
  for (var i = 0; i < node.childNodes.length; i++) {
    var child = node.childNodes[i]
    allDescendants(child, fn)
    fn(child)
  }
}

function disableControls() {
  let ctrlDiv = document.getElementById('idControlDiv')
  allDescendants(ctrlDiv, function (child) {
    child.disabled = true
  })
  const container = document.getElementById('idBackLabel')
  if (container != null) container.onclick = undefined
}

function enableControls() {
  let ctrlDiv = document.getElementById('idControlDiv')
  allDescendants(ctrlDiv, function (child) {
    child.disabled = false
  })
  const container = document.getElementById('idBackLabel')
  if (container != null) container.onclick = onLabelBack
}

function onDisplayTypeChanged() {
  readAnimationVariables()
  performAnimation()
}

function onLabelBack() {
  performFilteringAnimationBw()
}

function onCheckboxLanguages() {
  readAnimationVariables()
  performAnimation()
}

function onCheckboxFiles() {
  readAnimationVariables()
  performAnimation()
}

function onVizzuLogo() {
  vscode.postMessage({ command: 'openlink', text: 'https://github.com/vizzuhq/vizzu-lib' })
}

function updateInfoLabelsContent(info) {
  let lines = info.codeCount + info.blankCount + info.commentCount
  const dateLabel = document.getElementById('label_date')
  const dirLabel = document.getElementById('label_dir')
  const filesLabel = document.getElementById('label_files')
  const linesLabel = document.getElementById('label_lines')
  const codeLabel = document.getElementById('label_code')
  const commentLabel = document.getElementById('label_comment')
  const blankLabel = document.getElementById('label_blank')
  dateLabel.textContent = info.date
  dirLabel.textContent = info.rootDir
  filesLabel.textContent = info.files.toString()
  linesLabel.textContent = lines.toString()
  codeLabel.textContent = info.codeCount.toString()
  commentLabel.textContent = info.commentCount.toString()
  blankLabel.textContent = info.blankCount.toString()
}

function readAnimationVariables() {
  const ctrl1 = document.getElementById('idLineCount')
  stateLC = ctrl1.selected
  const ctrl2 = document.getElementById('idFileCount')
  stateFC = ctrl2.selected
  const ctrl3 = document.getElementById('idChkBoxFiles')
  stateF = ctrl3.checked
  const ctrl4 = document.getElementById('idChkBoxLang')
  stateL = ctrl4.checked
}

function setFilesChekboxState(disabled, checked) {
  const ctrl = document.getElementById('idChkBoxFiles')
  ctrl.disabled = disabled
  ctrl.checked = checked
}

function setBackLabelState(disabled) {
  const container = document.getElementById('idBackLabelContainer')
  if (disabled) {
    container.innerHTML = `
            Click on a folder to zoom in &nbsp; &nbsp;`
  } else {
    container.innerHTML = `
            <a class="link-button" id="idBackLabel">
            Go back!
            </a>
            &nbsp; &nbsp; Folder: ${currentDirectory}`
  }
}
