import data from './data.js'
import style from './style.js'
import Dust from './dust.js'
import Vizzu from '../../assets/dist/vizzu.min.js'

const dust = new Dust()

data.filter = (record) => record.Dose <= 3600

const bgImage = document.getElementById('bgImage')

function drawBg(dc) {
	dc.drawImage(bgImage, 0, 0)
}

const chart = new Vizzu('vizzuCanvas')
let anim = chart.initializing
let timebase = 0
let timeFraction = 0

anim = anim.then((chart) => {
	chart.on('background-draw', (event) => {
		drawBg(event.renderingContext)
		dust.render(event.renderingContext, 1280, 720)
		event.preventDefault()
	})

	chart.on('update', (event) => {
		timeFraction = Math.min(0.99, event.detail.progress)
	})

	chart.on('plot-axis-label-draw', (event) => {
		if (event.target.value.startsWith('Radiation dose'))
			event.renderingContext.fillStyle = event.renderingContext.fillStyle.replace(
				/\([^,]*,[^,]*,[^,]*,/,
				'(222,0,0,'
			)
		for (const record of data.records.slice(19, 24))
			if (event.target.value === record[1])
				event.renderingContext.fillStyle = event.renderingContext.fillStyle.replace(
					/\([^,]*,[^,]*,[^,]*,/,
					'(38,39,40,'
				)
	})

	return chart.animate(
		{
			data,
			config: {
				channels: {
					label: { set: ['Dose'] },
					color: { set: ['activity'] },
					x: {
						attach: ['Dose'],
						range: {
							min: 0,
							max: '102%'
						}
					},
					y: {
						attach: ['activity'],
						range: {
							min: '-6.99999max' // should be '-7max', workaround for a bug
						}
					}
				},
				title: '',
				sort: 'byValue'
			},
			style
		},
		2
	)
})

const animOptions = {
	duration: 1,
	x: { delay: 0, duration: 1, easing: 'linear' },
	color: { delay: 0, duration: 1, easing: 'linear' },
	y: { delay: 0, duration: 1, easing: 'ease-in' },
	show: { delay: 0.75, duration: 0.25, easing: 'ease-in' },
	hide: { delay: 0, duration: 0.25, easing: 'ease-out' }
}

let logoDrawSet = false

for (let sec = 1; sec <= 90; sec++) {
	anim = anim.then((chart) => {
		timebase = sec - 1

		if (!logoDrawSet) {
			logoDrawSet = true
			chart.on('logo-draw', (event) => {
				event.renderingContext.font = 'bold 30px PT Sans Narrow'
				event.renderingContext.fillStyle = '#fefef6ff'
				let time = 90 - (timebase + timeFraction)
				if (timebase >= 90) time = 0
				event.renderingContext.fillText(
					String(Math.floor(time / 60)) +
						':' +
						String(Math.floor(time) % 60).padStart(2, '0') +
						'.' +
						String(Math.floor((time - Math.floor(time)) * 100)).padStart(2, '0'),
					1160,
					668
				)
				event.preventDefault()
			})
		}

		return chart.animate(
			{
				data: {
					records: [[250000 / 90, 'Radiation dose on the reactor roof']],
					filter: (record) => {
						if (record.activity.startsWith('Radiation dose')) return true
						let offset = 0
						if (record.activity.startsWith('5 year')) offset = 10000
						if (record.activity.startsWith('Fukushima 50')) offset = 10000
						return (
							record.Dose + offset <=
							(sec < 80 ? Math.max((250000 * sec) / 90, 3600) : 250000)
						)
					}
				}
			},
			Object.assign({}, animOptions, {
				delay: 0
			})
		)
	})
}

for (const max of [250001, 500000, 1000000, 5000000, 8000000, 155000000, 300000000]) {
	anim = anim.then((chart) => {
		timebase++
		return chart.animate(
			{
				data: {
					filter: (record) => {
						if (record.activity.startsWith('Radiation dose')) return true
						return record.Dose >= 250000 && record.Dose <= max
					}
				},
				config: { channels: { y: { range: { min: 'auto' } } } }
			},
			Object.assign({}, animOptions, { delay: '2s' })
		)
	})
}
