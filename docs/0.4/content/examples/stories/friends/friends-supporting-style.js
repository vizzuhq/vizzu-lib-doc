export var palette = [
  '#e6ad66F0',
  '#dfaa6cF0',
  '#d5a574F0',
  '#c9a07dF0',
  '#bc9b86F0',
  '#ae9491F0',
  '#a08e9bF0',
  '#958aa4F0',
  '#8b85acF0',
  '#8482b1F0'
];

export var style = {
  backgroundColor: '#FFFFFF00',
  plot: {
    paddingTop: 43,
    paddingLeft: 293,
    paddingRight: 140,
    paddingBottom: 45,
    marker:
        {label: {position: 'center', filter: 'lightness(0.5)', fontSize: 16 },
        rectangleSpacing: 0.4,
        colorPalette: palette.join(' '),
      },

    xAxis: {
      color: '#fcbe8c80',
      interlacing: {color: '#fcbe8c0C'},
      label: {
        paddingRight: 75,
        fontSize: 26,
        color: '#fcbe8c',
        fontFamily: 'Roboto Condensed, sans-serif'
      },
      title: {
        fontSize: 20,
        color: '#ffffffC0',
        paddingTop: -150,
        paddingLeft: 70,
        fontFamily: 'Roboto Condensed, sans-serif'
      }
    },
    yAxis: {
      color: '#fcbe8c80',
      interlacing: {color: '#fcbe8c0C'},
      label: {
        paddingRight: 125,
        fontSize: 26,
        color: '#fcbe8c',
        fontFamily: 'Roboto Condensed, sans-serif'
      },
      title: {
        fontSize: 20,
        color: '#ffffffC0',
        paddingTop: -150,
        paddingLeft: 70,
        fontFamily: 'Roboto Condensed, sans-serif'
      }
    }
  },
  title: {
    color: '#ffffffC0',
    textAlign: 'right',
    paddingTop: 35,
    paddingBottom: 25,
    paddingRight: 75,
    fontFamily: 'Roboto Condensed, sans-serif'
  },
  legend: {width: 0},

};
