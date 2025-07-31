
const dataLoaded = import("../../../../assets/data/chart_types_eu.js");
const mdChartLoaded = import("../../../../assets/javascripts/mdchart.js");
  
Promise.all([dataLoaded, mdChartLoaded]).then((results) => {
  const data_6 = results[0].data_6;
  const MdChart = results[1].default;
  const mdchart = new MdChart(data_6, "example");

  mdchart.create([
    {
      anims: [
        (chart) =>
		chart.animate({
			data: data_6,

			config: {
				channels: {
					x: 'Year',
					y: { set: ['Country', 'Value 2 (+)'], split: true },
					color: 'Country',
					label: 'Value 2 (+)'
				}
			},
			style: {
				plot: {
					marker: {
						label: {
							position: 'top',
							fontSize: '0.6em'
						}
					}
				}
			}
		}),(chart) =>
		chart.animate({
			config: {
				channels: {
					x: ['Year', 'Country'],
					y: { set: 'Value 2 (+)', split: false },
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

