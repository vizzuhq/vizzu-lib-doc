import ScrollSpy from "./scrollspy.js";

export default class VizzuDocumentation {

	constructor(context) {
		this.playTimeout = undefined;

		this.context = context;
		if (localStorage.getItem('theme-dark') === 'true') {
			document.documentElement.classList.add('theme-dark');
		}

		this.scrollSpy = new ScrollSpy(this.context);

		// which snippet holds the active chart
		this.activeSnippet = undefined;

		this.snippetPlayerChart = document.createElement('snippet-player-chart');
		this.snippetPlayerChart.classList.add('snippet-player-chart');
		this.snippetPlayerChart.addEventListener('click', () => {
			if (this.snippetPlayerChart.classList.contains('snippet-player-chart-ready')) {
				registry.playSnippet(this.snippetPlayerChart.dataset.semver);
			}
		});

		// Update snippet players on scroll
		this.context.addEventListener('debounce-scroll', (event) => {
			if (this.playTimeout) clearTimeout(this.playTimeout);
			this.playTimeout = setTimeout(() => {
				this.playTimeout = undefined;
				this.updateActiveSnippet(event.detail.scrollY);
			}, 300);
		});

		document.addEventListener("DOMContentLoaded", (event) => {
			document.querySelector('.action-sidebar-toogle').addEventListener('click', (event) => {
				this.toggleSideBar();
				event.preventDefault();
			});
			window.addEventListener('resize', () => {
				this.resizeActiveSnippet();
			});
			/*
			document.querySelector('.action-dark-mode-toogle').addEventListener('click', (event) => {
				this.toggleDarkMode();
				event.preventDefault();
			});
			*/
			document.querySelector('.vizzu-sidebar-scrim').addEventListener('click', (event) => {
				this.closeSideBar();
				event.preventDefault();
			});
			/* When we click a link on the sidebar, it will close the sidebar (on mobiles) */
			document.querySelectorAll('.vizzu-sidebar a[href]').forEach((element) => {
				element.addEventListener('click', (event) => {
					this.closeSideBar();
				});
			});
			/* Static thumbnails */
			document.querySelectorAll('.action-static-example').forEach((element) => {
				element.addEventListener('click', (event) => {
					document.querySelector('vizzu-modal').showUrl(event.target.dataset.target, event.target.alt);
				});
			});
			/* Animated thumbnails */
			document.querySelectorAll('.action-animated-example').forEach((element) => {
				element.addEventListener('click', (event) => {
					document.querySelector('vizzu-modal').showUrl(event.target.dataset.target, event.target.dataset.title);
				});
			});
			/* Story thumbnails */
			document.querySelectorAll('.action-story-example').forEach((element) => {
				element.addEventListener('click', (event) => {
					document.querySelector('vizzu-modal').showUrl(event.target.dataset.target, event.target.dataset.title);
				});
			});
		});
	}

	resizeActiveSnippet() {
		if (this.activeSnippet) {
			let img = this.activeSnippet.querySelector('img');
			let rect = img.getBoundingClientRect();

			this.snippetPlayerChart.style.height = rect.height + 'px';
			this.snippetPlayerChart.style.width = rect.width + 'px';
			this.snippetPlayerChart.style.top = (rect.top + scrollY) + 'px';
			this.snippetPlayerChart.style.left = rect.left + 'px';
		}

	}

	updateActiveSnippet(scrollY) {
		let players = document.querySelectorAll('.snippet-player');

		let selectedSnippet = undefined;

		// determine which is the last snippet above the fold
		players.forEach((player) => {

			let rect = player.getBoundingClientRect();
			if (rect.bottom < window.innerHeight && rect.bottom > 0) {
				selectedSnippet = player;
			}
		});

		if (selectedSnippet && (selectedSnippet !== this.activeSnippet)) {

			// show the image in the former active player
			if (this.activeSnippet) {
				this.activeSnippet.querySelector('img').classList.remove('invisible');
			}

			let img = selectedSnippet.querySelector('img');
			let rect = img.getBoundingClientRect();
			this.snippetPlayerChart.style.height = rect.height + 'px';
			this.snippetPlayerChart.style.width = rect.width + 'px';
			this.snippetPlayerChart.style.top = (rect.top + window.scrollY) + 'px';
			this.snippetPlayerChart.style.left = rect.left + 'px';
			selectedSnippet.appendChild(this.snippetPlayerChart);
			img.classList.add('invisible');

			this.activeSnippet = selectedSnippet;

			registry.snippetPlayerChart = this.snippetPlayerChart;
			registry.playSnippet(selectedSnippet.dataset.snippetId).then(() => {
				// copy the canvas content to the snippet player img
				let canvas = this.snippetPlayerChart.querySelector('canvas');
				img.src = canvas.toDataURL("image/png");

			});


		}
	}

	toggleSideBar() {
		document.querySelector('.vizzu-page').classList.toggle('vizzu-page-sidebar-toggled');
	}

	closeSideBar() {
		document.querySelector('.vizzu-page').classList.remove('vizzu-page-sidebar-toggled');
	}

	toggleDarkMode() {
		let cl = document.documentElement.classList;
		if (cl.contains('theme-dark')) {
			cl.remove('theme-dark');
			localStorage.removeItem('theme-dark');
		}
		else {
			cl.add('theme-dark');
			localStorage.setItem('theme-dark', 'true');
		}

	}

}


