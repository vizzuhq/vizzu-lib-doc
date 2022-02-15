export default class VizzuModal extends HTMLElement {

	constructor() {
		super();
		this.classList.add('d-none');
		this._edit = null;
		this._replay = null;
	}

	connectedCallback() {
		this.innerHTML = `
		<div class="container d-flex flex-column justify-content-center vizzu-modal-content p-4">
			<div class="vizzu-modal-content-inner bg-white p-4 depth-shadow">
				<div class="d-flex align-items-center justify-content-between">
					<h2 class="mt-0 mb-2 me-2 ellipses text-dark">Modal title</h2>
					<div class="mb-2 d-flex">
						<img class="c-pointer me-2" src="images/edit_black_24dp.svg" alt="Edit" height="24" data-action="edit">
						<img class="c-pointer ms-1 me-2" src="images/replay_black_24dp.svg" alt="Replay" height="24" data-action="replay">
						<img class="c-pointer ms-1" src="images/close_black_24dp.svg" alt="Close" height="24" data-action="close">
					</div>
					
				</div>
				<div class="vizzu-modal-spinner text-center d-none py-4">
					<div class="spinner-grow" role="status"></div>
				</div>
				<div class="vizzu-modal-content-placeholder">placeholder</div>
			</div>
		</div>		
		`;

		this.querySelector('[data-action="close"]').addEventListener('click', (event) => {
			this.classList.add('d-none');
			this.querySelector('.vizzu-modal-content-placeholder').innerHTML = '';
			event.preventDefault();
		});
		this.querySelector('[data-action="edit"]').addEventListener('click', (event) => {
			if (this.edit) this.edit();
			event.preventDefault();
		});
		this.querySelector('[data-action="replay"]').addEventListener('click', (event) => {
			if (this.replay) this.replay();
			event.preventDefault();
		});
	}

	show(html, title) {
		this.classList.remove('d-none');
		this.querySelector('.vizzu-modal-content-placeholder').innerHTML = html;
		this.querySelector('h2').innerText = title;
		this.edit = null;
		this.replay = null;
	}

	showUrl(url, title) {
		this.classList.remove('d-none');
		let placeholder = this.querySelector('.vizzu-modal-content-placeholder');
		placeholder.innerHTML = '';
		this.edit = null;
		this.replay = null;

		let iframe = document.createElement('iframe');
		iframe.src = url;
		iframe.width = '100%';
		iframe.allowFullscreen = false;
		iframe.classList.add('d-none');

		let spinner = this.querySelector('.vizzu-modal-spinner');
		spinner.classList.remove('d-none');

		placeholder.appendChild(iframe);
		iframe.addEventListener("load", (event) => {
			iframe.classList.remove('d-none');
			spinner.classList.add('d-none');
			let height = Math.min(iframe.contentWindow.document.body.scrollHeight + 48, window.innerHeight - 128);
			//console.log(iframe.contentWindow.document.body.scrollHeight, window.innerHeight, height)
			iframe.style.height = height + "px";
			setTimeout(() => {
				let w = iframe.contentWindow
				if (w.edit) this.edit = w.edit;
				if (w.replay) this.replay = w.replay;
			}, 10);


		});

		this.querySelector('h2').innerText = title;
	}

	set replay(fn) {
		if (typeof fn !== 'function') {
			this.querySelector('[data-action="replay"]').classList.add('d-none');
			this._replay = null;
		}
		else {
			this.querySelector('[data-action="replay"]').classList.remove('d-none');
			this._replay = fn;
		}
	}

	get replay() {
		return this._replay;
	}

	set edit(fn) {
		if (typeof fn !== 'function') {
			this.querySelector('[data-action="edit"]').classList.add('d-none');
			this._edit = null;
		}
		else {
			this.querySelector('[data-action="edit"]').classList.remove('d-none');
			this._edit = fn;
		}
	}

	get edit() {
		return this._edit;
	}
}