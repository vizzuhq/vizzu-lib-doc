// Papa parse library included via script tag in index.html

let rawdata = {} // object for collecting values from the CSV
let data = { series: [] }; // empty object for Vizzu

function receiveLine(results)
{
	for (let key in results.data)
	{
		if (rawdata[key] === undefined) rawdata[key] = [];
		let value = results.data[key];
		// we need the years as strings because we want them to 
		// be a categorical data series
		if (key == 'Year') value = value.toString();  
		rawdata[key].push(value);
	}
}

// promisifying Papa.parse call
let dataReady = new Promise(function(complete, error) 
{
	// calling Papa parse to process the CSV file with configs tailored for
	// the format of the actual CSV file. See Papa.parse configs here:
	// https://www.papaparse.com/docs#config
	Papa.parse('https://lib.vizzuhq.com/datasets/population_total_long.csv',
	{
		download: true, // we indicate that the passed parameter is an URL 
		header: true, // our CSV file start with a header line
		dynamicTyping: true, // papa will recognise number/string types and will 
		                     // give the values as corresponding JS types 
		quoteChar: '"', // doublequotes are used in our CSV
		skipEmptyLines: true, // we don't need the empty lines
		step: receiveLine, // our callback for handling the incoming data by lines 
		complete,
		error
	})
}).then(() => 
{
	// CSV processing is ready, we create the Vizzu compatible data object from
	// the collected data
	for (let name in rawdata)
	{
		// deciding the data series type based on the JS type
		let type = typeof rawdata[name][0] === 'number' ? 'measure' : 'dimension';

		data.series.push({ name, type, values: rawdata[name] });
	};

	return Promise.resolve(data);
})

export default dataReady;