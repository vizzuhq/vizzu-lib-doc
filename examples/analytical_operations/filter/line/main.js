
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
					x: 'Year',
					y: 'Value 3 (+)',
					color: 'Country_code'
				},

				geometry: 'line'
			}
		}),(chart) =>
		chart.animate({
			data: {
				filter: (record) => record.Country_code === 'CY' || record.Country_code === 'ES'
			},

			/*       { 
            filter: record => data_6.filter(record) 
            && record.Year < 14 && record.Year > 8 
        }, */
			config: {}
		}),(chart) => {
		chart.feature('tooltip', true)
		return chart
	}
      ]
    }
  ]);
});
