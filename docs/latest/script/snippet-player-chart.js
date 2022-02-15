import data from './data.js';
import Vizzu from
	'https://cdn.jsdelivr.net/npm/vizzu@0.3.1/dist/vizzu.min.js';

export default class SnippetPlayerChart extends HTMLElement {

	constructor() {
		super();
		this.chartId = undefined;
	}

	connectedCallback() {
		// Initialize component content
		if (!this.chartId) {
			this.chartId = 'chart-' + Math.random().toString(36).slice(2);
			this.innerHTML = `<div id="${this.chartId}"></div>`;

			this.chart = new Vizzu(this.chartId);

			this.chart.initializing.then((chart) => {
				chart.animate({
					data: data
				});
			});
		}

	}
}