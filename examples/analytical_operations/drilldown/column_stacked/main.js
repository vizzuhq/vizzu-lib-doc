
const dataLoaded = import("../../../../assets/data/chart_types_eu.js");
const mdChartLoaded = import("../../../../assets/javascripts/mdchart.js");
  
Promise.all([dataLoaded, mdChartLoaded]).then((results) => {
  const data_8 = results[0].data_8;
  const MdChart = results[1].default;
  const mdchart = new MdChart(data_8, "example");

  mdchart.create([
    {
      anims: [
        (chart) =>
		chart.animate({
			data: data_8,

			config: {
				channels: {
					y: ['Country', 'Value 2 (+)'],
					color: 'Country',
					label: 'Value 2 (+)'
				}
			}
		}),(chart) =>
		chart.animate({
			config: {
				channels: {
					x: 'Year',
					label: null
				}
			}
		}),(chart) => {
		chart.feature('tooltip', true)
		return chart
	}
      ]
    }
  ]);
});
