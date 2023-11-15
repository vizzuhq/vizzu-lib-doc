
const dataLoaded = import("../../../assets/data/music_industry_history_1.js");
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
      config: chart.constructor.presets.stream({
        x: 'Year',
        y: 'Revenue',
        stackedBy: 'Format',
        title: 'Stream Graph'
      }),
      style: {
        plot: {
          yAxis: { label: { numberScale: 'K, M, B, T' } },
          xAxis: { label: { angle: '-45deg' } }
        }
      }
    })
      ]
    }
  ]);
});
