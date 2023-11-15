
const dataLoaded = import("../../../../assets/data/chart_types_eu.js");
const mdChartLoaded = import("../../../../assets/javascripts/mdchart.js");
  
Promise.all([dataLoaded, mdChartLoaded]).then((results) => {
  const data = results[0].data;
  const MdChart = results[1].default;
  const mdchart = new MdChart(data, "example");

  mdchart.create([
    {
      anims: [
        (chart) =>
    chart.animate({
      data,

      config: {
        channels: {
          x: 'Year',
          y: ['Joy factors', 'Value 2 (+)'],
          color: 'Joy factors'
        },

        coordSystem: 'polar'
      },
      style: {
        plot: {
          marker: {
            colorPalette: '#ef675aFF #6d8cccFF #e6cf99FF #9c50abFF',
            rectangleSpacing: '0.1em'
          }
        }
      }
    }),(chart) =>
    chart.animate({
      config: {
        channels: {
          x: 'Value 2 (+)',
          y: { set: 'Joy factors', range: { min: '-30%' } },
          label: 'Value 2 (+)'
        }
      },
      style: {
        plot: {
          marker: {
            rectangleSpacing: null
          }
        }
      }
    })
      ]
    }
  ]);
});
