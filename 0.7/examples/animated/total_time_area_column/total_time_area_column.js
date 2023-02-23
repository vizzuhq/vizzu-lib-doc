
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
                y: ['Joy factors', 'Value 2 (+)'],
                x: 'Year',
                color: 'Joy factors',
            },
            title: 'Stacked Area Chart',
            geometry: 'area'
        }
    }),chart => chart.animate({
        config: {
            title: 'Split Area Chart',
            split: true
        }
    }),chart => chart.animate({
        config: {
            channels: {
                y: ['Value 2 (+)', 'Year'],
                x: 'Joy factors'
            },
            title: 'Column Chart',
            geometry: 'rectangle',
            split: false
        }
    }
    ),chart => chart.animate({
        config: {
            channels: {
                y: 'Value 2 (+)',
                x: 'Joy factors',
                label: 'Value 2 (+)'
            },
            title: 'Column Chart',
            geometry: 'rectangle',
            split: false
        }
    })
      ]
    }
  ]);
});

