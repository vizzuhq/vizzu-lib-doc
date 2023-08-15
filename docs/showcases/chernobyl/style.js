const style = {
	fontFamily: 'PT Sans Narrow',
	plot: {
	  paddingLeft: 423,
	  paddingRight: 200,
	  paddingTop: 85,
	  paddingBottom: 50,
	  marker: {
		colorGradient: '#ffffffee 0, #000000ca 1',
		colorPalette: '#de0000ff' + ' ' 
		  + (new Array(18)).fill('#ffffffee').join(' ') + ' '
		  + (new Array(5)).fill('#26292a').join(' '),
		rectangleSpacing: 0.9,
		label: { 
			fontSize: 28,
			maxFractionDigits: 0,
		}
	  },
	  xAxis: {
		interlacing: {
		  color: '#fefef630'
		},
		title: { color: '#00000000'},
		label: {
		  color: '#fefef680',
		  numberFormat: 'grouped',
		  fontSize: 18,
		  fontWeight: 'bold'
		}
	  },
	  yAxis: {
		color: '#27494bff',
		label: {
		  color: '#fffff6ee', 
		  fontSize: 31,
		  fontWeight: 'bold'
		}
	  }
	}
};

export default style;