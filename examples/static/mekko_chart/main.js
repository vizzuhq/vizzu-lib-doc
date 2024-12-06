
const dataLoaded = import("../../../assets/data/chart_types_eu.js");
const mdChartLoaded = import("../../../assets/javascripts/mdchart.js");
  
Promise.all([dataLoaded, mdChartLoaded]).then((results) => {
  const data_4 = results[0].data_4;
  const MdChart = results[1].default;
  const mdchart = new MdChart(data_4, "example");

  mdchart.create([
    {
      anims: [
        (chart) =>
		chart.animate({
			data: data_4,
			config: {
				channels: {
					x: ['Country', 'Value 2 (+)'],
					y: { set: ['Value 1 (+)'], range: { max: '110%' } },
					color: 'Country',
					label: ['Value 2 (+)']
				},
				title: 'Mekko Chart'
			}
		})
      ]
    }
  ]);
});

