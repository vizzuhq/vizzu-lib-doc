
const dataLoaded = import("../../../assets/data/music_industry_history_1.js");
const mdChartLoaded = import("../../../assets/javascripts/mdchart.js");
  
Promise.all([dataLoaded, mdChartLoaded]).then((results) => {
  const data = results[0].data;
  const MdChart = results[1].default;
  const mdchart = new MdChart(data, "./vizzu.js", "example");

  mdchart.create([
    {
      anims: [
        chart => chart.animate({
        data: data,
        config: {
            channels: {
                x: 'Year',
                y: ['Revenue [m$]', 'Format'],
                color: 'Format'
            },
            title: 'Stacked Streamgraph',
            geometry: 'area',
            align: 'center'
        },
        style: {
            plot: {
                xAxis: {
                    label: {
                        angle: 1.8,
                        fontSize: 8.5,
//                        numberFormat: 'grouped'
                    }
                }
            }
        }
    }),chart => chart.animate( {
        config: {  
            channels: {
                y: { 
                    range: {
                        max: '100%'
                    }
                }
            },
            title: 'Split Area Chart',
            split: true,
            align: 'min'
        }
    }),chart => chart.animate({
        config: {
            channels: {
                x: ['Revenue [m$]', 'Year'],
                y: 'Format'
            },
            title: 'Bar Chart',
            geometry: 'rectangle',
            split: false,
            align: 'min'
        },
        style: {
            plot: {
                xAxis: {
                    label: {
                        angle: null,
                        fontSize: null
                    }
                }
            }
        }
    }
)
      ]
    }
  ]);
});

