
const dataLoaded = import("../../../assets/data/chart_types_eu.js");
const mdChartLoaded = import("../../../assets/javascripts/mdchart.js");
  
Promise.all([dataLoaded, mdChartLoaded]).then((results) => {
  const data_6 = results[0].data_6;
  const MdChart = results[1].default;
  const mdchart = new MdChart(data_6, "./vizzu.js", "example");

  mdchart.create([
    {
      anims: [
        chart => chart.animate({
        data: data_6,
        config: {
            channels: {
                x: 'Year',
                y: ['Country', 'Value 2 (+)'],
                color: 'Country',
            },
            title: 'Stacked Area Chart',
            geometry: 'area'
        }
    }),chart => chart.animate({
        config: {
            channels: {
                y: {
                    /* Making the chart elements fill the whole of
                       the y-axis as the default value is now 110% */
                    range: {
                        max: '100%' 
                    }
                }
            },
            title: 'Trellis Area Chart',
            split: true
        }
    }),chart => chart.animate({
        config: {
            channels: {
                x: ['Value 2 (+)', 'Year'],
                y: 'Country'
            },
            title: 'Bar Chart',
            geometry: 'rectangle',
            split: false,
        }
    }
    ),chart => chart.animate({
        config: {
            channels: {
                x: 'Value 2 (+)',
                label: 'Value 2 (+)'
            }
        }
    })
      ]
    }
  ]);
});

