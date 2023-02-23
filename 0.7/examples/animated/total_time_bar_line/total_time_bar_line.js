
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
                y: 'Joy factors',
                x: ['Value 2 (+)', 'Year']
            },
            title: 'Bar Chart',
            geometry: 'rectangle',
            sort: 'byValue'
        }
    }),chart => chart.animate({
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

