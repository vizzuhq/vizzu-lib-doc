
class SnippetRegistry {
	constructor() {
		this.snippets = {};
		this.snippetPlayerChart = undefined;
	}

	addSnippet(semver, animFn, options) {
		let [_, major, minor] = semver.split('.').map((x) => parseInt(x));

		if (!this.snippets[major]) this.snippets[major] = [];
		this.snippets[major][minor] = { fn: animFn, options: options };
	}

	playSnippet(semver) {
		if (!semver) return Promise.reject('No semver specified');
		let [_, major, minor] = semver.split('.').map((x) => parseInt(x));
		if (this.snippets[major] === undefined) return Promise.reject('Unknown major');
		if (this.snippets[major][minor] === undefined) return Promise.reject('Unknown minor');

		// Remove the chart-ready class
		this.snippetPlayerChart.classList.remove('snippet-player-chart-ready');

		// If we already have a base state from where we want to animate the chart
		// we use that, otherwise we need to incemental build the state
		if (this.snippets[major][minor].baseState !== undefined) {
			// hide the chart until we transit to base state
			this.snippetPlayerChart.classList.add('opacity-0');

			return this.playState(this.snippets[major][minor].baseState, '10ms')
				.then(() => {
					// we can now show the chart as it transitions to the target state
					this.snippetPlayerChart.classList.remove('opacity-0');
					return this.playState(this.snippets[major][minor].fn, '1500ms');
				})
				.then(() => {
					// Add the ready class
					this.snippetPlayerChart.classList.add('snippet-player-chart-ready');
					// Store the semver state in the chart
					this.snippetPlayerChart.dataset.semver = semver;

					// Save the result as the base state of the next step (if exists)
					if (this.snippets[major][minor + 1] !== undefined) {
						this.snippets[major][minor + 1].baseState = this.snippetPlayerChart.chart.config;
					}
				});
		}
		// We do not have the base state yet - let's build it
		else {
			return this.buildState(major, 1, minor);
		}

	}

	playState(state, speed) {

		return this.snippetPlayerChart.chart.initializing.then(() => {
			if (typeof state === 'function') {
				return state(this.snippetPlayerChart.chart);
			}
			else {
				return this.snippetPlayerChart.chart.animate(state, speed);
			}
		});

	}

	async buildState(major, minorFrom, minorTo) {
		if (this.snippets[major] === undefined) {
			console.log('Cannot build state for major', major);
			return Promise.reject('Unknown major');
		}
		console.log('Building incremental snippet state', major, minorFrom, minorTo);

		// Hide the chart until we build the base state
		this.snippetPlayerChart.classList.add('opacity-0');

		// Remove ready class
		this.snippetPlayerChart.classList.remove('snippet-player-chart-ready');

		// Store the semver state in the chart
		this.snippetPlayerChart.dataset.semver = `0.${major}.${minorTo}`;

		let animSpeed = '10ms';

		// Wait for the cahrt to be initialized
		await this.snippetPlayerChart.chart.initializing;
		// Set the base state for the section
		await this.resetChart(major);

		for (let minor = minorFrom;minor <= minorTo;minor++) {
			if (this.snippets[major][minor] === undefined) continue;

			if (minor === minorTo) {
				// for the last step we show the chart
				// and use normal anim speed
				this.snippetPlayerChart.classList.remove('opacity-0');
				animSpeed = '1500ms';
			}

			await this.playState(this.snippets[major][minor].fn, animSpeed);

			// Add the ready class
			this.snippetPlayerChart.classList.add('snippet-player-chart-ready');
			// Store the semver state in the chart
			this.snippetPlayerChart.dataset.semver = `0.${major}.${minor}`;

			// Save the result as the base state of the next step (if exists)
			if (this.snippets[major][minor + 1] !== undefined) {
				this.snippets[major][minor + 1].baseState = this.snippetPlayerChart.chart.config;
			}

		}

		return Promise.resolve();

	}

	resetChart(major) {
		if (major <= 2) return base.initChart0(this.snippetPlayerChart.chart);
		if (major > 2 && major <= 5) return base.initChart1(this.snippetPlayerChart.chart);;
		return base.initChart2(this.snippetPlayerChart.chart);;
	}

}

function defaultChannel(set = null) {
	return { set, range: { min: 'auto', max: 'auto' } }
}

function defaultConfig(channels) {
	return {
		data: { filter: null },
		config: {
			channels,
			legend: 'auto',
			coordSystem: 'cartesian',
			geometry: 'rectangle',
			orientation: 'horizontal',
			sort: 'none',
			reverse: false,
			align: 'none',
			split: false
		},
		style: {
			fontSize: '.90em',
			plot: {
				backgroundColor: null,
				paddingTop: 30,
				paddingBottom: 25,
				paddingLeft: null,
				paddingRight: null,
				marker: null,
				xAxis: null,
				yAxis: null
			},
			title: {
				fontSize: '1.5em',
				backgroundColor: null,
				paddingBottom: 0,
				paddingTop: null,
				paddingLeft: null,
				paddingRight: null

			},
			legend: null,
			tooltip: null
		}
	};
}

function clearEvent(chart, name, prop) {
	try {
		chart.off(name, window[prop]);
	}
	catch (e) { }
}

function clearEvents(chart) {
	chart.feature('tooltip', false);
	clearEvent(chart, 'logo-draw', 'logoDrawHandler');
	clearEvent(chart, 'plot-axis-label-draw', 'labelDrawHandler');
	clearEvent(chart, 'click', 'clickHandler');
}

const base = {

	initChart0: chart => {
		clearEvents(chart);
		return chart.animate(defaultConfig(
			{
				y: defaultChannel(),
				x: defaultChannel(),
				color: defaultChannel(),
				lightness: defaultChannel(),
				label: defaultChannel(),
				size: defaultChannel(),
				noop: defaultChannel()
			}), '10ms');
	},

	initChart1: chart => {
		clearEvents(chart);
		return chart.animate(defaultConfig(
			{
				y: defaultChannel('Popularity'),
				x: defaultChannel('Genres'),
				color: defaultChannel(),
				lightness: defaultChannel(),
				label: defaultChannel(),
				size: defaultChannel(),
				noop: defaultChannel()
			}), '10ms');
	},

	initChart2: chart => {
		clearEvents(chart);
		chart.feature('tooltip', false);
		return chart.animate(defaultConfig(
			{
				y: defaultChannel(['Popularity', 'Kinds']),
				x: defaultChannel('Genres'),
				color: defaultChannel('Kinds'),
				lightness: defaultChannel(),
				label: defaultChannel('Popularity'),
				size: defaultChannel(),
				noop: defaultChannel()
			}), '10ms');
	}
};

registry = new SnippetRegistry();

// global variables used by various snipetts
var snapshot;
