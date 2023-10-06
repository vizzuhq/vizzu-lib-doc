const project = 'bitcoin'
var vscode = acquireVsCodeApi(project) // eslint-disable-line no-undef, no-var
var navChart // eslint-disable-line no-var
var infoChart // eslint-disable-line no-var

function setTitle(project) {
  const title = project ? `CodeViz demo: ${project}` : 'CodeViz demo'

  document.title = title
  document.getElementById('label_title').innerText = title
}

setTitle(project)
;(function () {
  window.addEventListener('message', async (event) => {
    const message = event.data
    switch (message.command) {
      case 'clear-data-table':
        await resetVizzuCharts()
        break
      case 'refresh-data-table':
        await initializingVizzuCharts(message.dataTable)
        performInitAnimation(message.dataSummary) // eslint-disable-line no-undef
        updateInfoLabelsContent(message.dataSummary) // eslint-disable-line no-undef
        dirMaxDepth = message.dataSummary.depth // eslint-disable-line no-undef
        break
    }
  })
  importVizzuLibAndCreateCharts()
})()

function importVizzuLibAndCreateCharts() {
  // eslint-disable-next-line eqeqeq
  if (navChart == undefined || infoChart == undefined) {
    navChart = undefined
    infoChart = undefined
    const promise = import('../../../assets/dist/vizzu.min.js')
    promise
      .then((VizzuModule) => {
        try {
          const Vizzu = VizzuModule.default
          navChart = new Vizzu('navVizzu')
          infoChart = new Vizzu('infoVizzu')
          vscode.postMessage({ command: 'vizzu-ready' })
        } catch (e) {
          vscode.postMessage({ command: 'showerror', text: 'Vizzu initialization failure: ' + e })
        }
      })
      .catch((e) => {
        vscode.postMessage({ command: 'showerror', text: 'Vizzu library import failure: ' + e })
      })
  }
  setBackLabelState(false) // eslint-disable-line no-undef
  setBackLabelState(true) // eslint-disable-line no-undef
}

async function initializingVizzuCharts(data) {
  await infoChart.initializing.then((infoChart) => infoChart.animate({ data }))
  await navChart.initializing.then((navChart) => navChart.animate({ data }))
  navChart.on('click', performFilteringAnimationFw) // eslint-disable-line no-undef
  navChart.on('plot-axis-label-draw', navLabelDrawHandler) // eslint-disable-line no-undef
}

async function resetVizzuCharts() {
  await infoChart.animate({ data: {} })
  await navChart.animate({ data: {} })
  navChart.off('click')
  navChart.off('plot-axis-label-draw')
}
