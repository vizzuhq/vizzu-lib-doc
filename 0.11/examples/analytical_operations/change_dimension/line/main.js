
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
					y: 'Value 2 (+)',
					color: 'Joy factors'
				},

				geometry: 'line'
			},
			style: {
				plot: {
					marker: {
						colorPalette: '#ef675aFF #6d8cccFF #e6cf99FF #9c50abFF'
					}
				}
			}
		}),(chart) =>
		chart.animate({
			config: {
				channels: {
					color: 'Country'
				}
			},
			style: {
				plot: {
					marker: {
						colorPalette: null
					}
				}
			}
		})
      ]
    }
  ]);
});

