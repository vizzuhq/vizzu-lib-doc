// Papa parse library included via script tag in index.html

let data = { series: [], records: [] }; // empty object for Vizzu

function receiveLine(results)
{
	let keys = Object.keys(results.data);

	// if header row, we setup the series
	if (data.series.length === 0) {
		for (let key of keys) {
			// Initialize all series as measure, then we will switch to dimension
			// for columns containing strings
			data.series.push({
				name: key,
				type: key == 'Year' ? 'dimension' : 'measure',
			});
		}
	}
	else
	{
		// store the values as a new record
		data.records.push(Object.values(results.data));

		// check value types, if not number, then set series type to dimension
		for (let i = 0; i < data.series.length; i++)
		{
			let key = data.series[i].name;
			if (typeof results.data[key] !== 'number')
				data.series[i].type = 'dimension';
		}
	}
}

// promisifying Papa.parse call
let dataReady = new Promise(function(complete, error) 
{
	// calling Papa parse to process the CSV file with configs tailored for
	// the format of the actual CSV file. See Papa.parse configs here:
	// https://www.papaparse.com/docs#config
	Papa.parse('https://raw.githubusercontent.com/vizzuhq/vizzu-lib-doc/gh-pages/0.3.0/content/howtos/csv-input/population_total_long.csv',
{
		download: true, // we indicate that the passed parameter is an URL 
		header: true, // our CSV file start with a header line
		dynamicTyping: true, // papa will recognise number/string types and will 
		                     // give the values as corresponding JS types 
		quoteChar: '"', // doublequotes are used in our CSV
		skipEmptyLines: true, // we don't need the empty lines
		step: receiveLine, // our callback for handling the incoming data by lines 
		complete: () => { complete(data) },
		error
	})
});

export default dataReady;