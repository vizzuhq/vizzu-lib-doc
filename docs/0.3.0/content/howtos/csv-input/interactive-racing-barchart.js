import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@0.3.1/dist/vizzu.min.js';
import dataReady from './csv-input.js'

let chart = new Vizzu('myVizzu');

let vizzuFinished = Promise.all([dataReady, chart.initializing])
.then(([data, chart]) => 
{
	let year = 2017;

	let slider = document.getElementById("year-slider");

	slider.oninput = e =>
	{
		year = e.target.value;
		vizzuFinished = vizzuFinished.then(chart =>
			chart.animate(
				{
					data: { filter: record => record.Year == year },
					descriptor: { title: year } 
				},
				{ duration: '250ms'})
		);
	};

	data.filter = record => record.Year == '2017';

	return chart.animate(
	{
		data,
		config: {
			channels: {
				x: {attach: ['Country Name'], range: { max: 10 } },
				y: {attach: ['Count'], range: { max: 1500000000 } },
				color: {attach: ['Country Name']},
			},
			sort: 'byValue',
			reverse: true,
			legend: null
		}
	});
})
