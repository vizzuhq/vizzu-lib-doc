
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
			config: {
				channels: {
					x: 'Value 6 (+/-)',
					y: 'Value 5 (+/-)',
					noop: 'Year',
					label: 'Year'
				},
				title: 'Scatter Plot',
				geometry: 'circle'
			}
		})
      ]
    }
  ]);
});

