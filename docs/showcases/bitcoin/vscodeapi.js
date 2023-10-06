const getJSON = function (url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'json'
  xhr.onload = function () {
    const status = xhr.status
    if (status === 200) {
      callback(null, xhr.response)
    } else {
      callback(status, xhr.response)
    }
  }
  xhr.send()
}

function getJSONSync(url) {
  return new Promise(function (resolve, reject) {
    getJSON(url, function (err, data) {
      if (err != null)
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          status: 'unable to load sample data'
        })
      else resolve(data)
    })
  })
}

// eslint-disable-next-line no-unused-vars
function acquireVsCodeApi(project) {
  return {
    postMessage: function (msgParam) {
      if (msgParam.command === 'vizzu-ready') {
        let data = null
        let datasum = null
        if (!project) project = 'vizzu-lib'
        const jsonfile = project + '-data.json'
        getJSONSync(jsonfile).then((d1) => {
          data = d1
          const jsonfile = project + '-datasum.json'
          getJSONSync(jsonfile).then((d2) => {
            datasum = d2
            window.postMessage({
              command: 'refresh-data-table',
              dataTable: data,
              dataSummary: datasum
            })
          })
        })
      } else {
        console.log(msgParam)
      }
    }
  }
}
