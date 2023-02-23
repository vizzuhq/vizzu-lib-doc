
const dataLoaded = import("../../../assets/data/chart_types_eu.js");
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
                y: 'Value 2 (+)',
                x: 'Year',
                color: 'Joy factors'
            },
            title: 'Line Chart',
            geometry: 'line'
        }
    }),chart => chart.animate({
        config: {
            channels: {
                y: ['Value 2 (+)', 'Year'],
                x: 'Joy factors'
            },
            title: 'Column Chart',
            geometry: 'rectangle',
            sort: 'byValue'
        }
    },
        {
            /* Setting a custom rhythm for the animation
            to assist the viewer in following it. */
            geometry: { 
                delay: 0.5,
                duration: 0.5
            },
            y: {
                delay: 0.5,
                duration: 1
            },
            x: {
                delay: 0,
                duration: 1
            }
        }
    ),chart => chart.animate({
        config: {
            channels: {
                y: 'Value 2 (+)',
                label: 'Value 2 (+)'
            }
        }
    })
      ]
    }
  ]);
});

