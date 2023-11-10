// eslint-disable-next-line no-unused-vars
function navAnimRecordFilter(chart, filterFn) {
  return chart.animate(
    {
      data: {
        filter: (record) => filterFn(record)
      }
    },
    { duration: 1 }
  )
}
