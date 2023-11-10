
const dataLoaded = import("../../../assets/data/chart_types_eu.js");
const mdChartLoaded = import("../../../assets/javascripts/mdchart.js");
  
Promise.all([dataLoaded, mdChartLoaded]).then((results) => {
  const data = results[0].data;
  const MdChart = results[1].default;
  const mdchart = new MdChart(data, "example");

  mdchart.create([
    {
      anims: [
        (chart) =>
    chart.animate({
      data,
      config: chart.constructor.presets.percentageArea({
        x: 'Year',
        y: 'Value 2 (+)',
        stackedBy: 'Country',
        title: 'Percentage Area Chart'
      })
    })
      ]
    }
  ]);
});

