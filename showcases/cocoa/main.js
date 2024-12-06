import Vizzu from '../../assets/dist/vizzu.min.js'

const parties = [
	'Farmers 6.6¢',
	'Local taxes and buyers 4.2¢',
	'Transport, storage, trade 2.1¢',
	'Grinder, processors 7.6¢',
	'Manufacturing 23.6¢',
	'Marketing 11.7¢',
	'Retail and taxes 44.2¢'
]

const colors = [
	'#100905ff',
	'#39220fff',
	'#583e26ff',
	'#715438ff',
	'#87694cff',
	'#a08261ff',
	'#b79868ff'
]

const data = {
	series: [
		{
			name: 'Share',
			type: 'measure',
			values: [6.6, 4.2, 2.1, 7.6, 23.6, 11.7, 44.2],
			unit: '¢'
		}
	]
}

for (let i = 0; i <= 8; i++) {
	data.series.push({
		name: `Parties-${i}`,
		type: 'dimension',
		values: [...parties]
	})
	if (i < 7) parties[i] = ''
}

data.series.push({
	name: 'Parties-End',
	type: 'dimension',
	values: ['Farmers 6.6¢', '', '', '', '', '', '']
})

const style = {
	plot: {
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 0, // bug: this should not be used for y label maxwidth for polar charts!
		paddingRight: 567,
		marker: {
			borderWidth: 0,
			colorPalette: [...colors].fill(colors[6]).join(' '),
			rectangleSpacing: 0.25,
			label: {
				fontSize: 22,
				fontWeight: 'normal',
				position: 'left',
				filter: 'lightness(0)' // bug: none won't work
			}
		},
		xAxis: {
			color: '#FFFFFF00',
			interlacing: { color: '#FFFFFF00' },
			label: { color: '#FFFFFF00' }
		},
		yAxis: {
			color: '#FFFFFF00',
			interlacing: { color: '#FFFFFF00' },
			label: {
				color: '#FFFFFF00'
			}
		}
	}
}

const firstStage = 6

function stage(chart, i) {
	const palette = colors.slice(i - 1 > 0 ? i - 1 : 0, 8).join(' ')
	const prev2 = `Parties-${i + 2}`
	const prev = `Parties-${i + 1}`
	const act = `Parties-${i}`
	const yMax = (10 - i < 9 ? 10 - i : 9) - 1
	return chart
		.animate(
			{
				config: {
					channels: {
						y: { detach: i === firstStage ? [] : [prev2] },
						x: { attach: [act] },
						label: {
							detach: i === firstStage ? [] : [prev2],
							attach: i === firstStage ? [] : [prev]
						}
					}
				}
			},
			{
				duration: 0.5
			}
		)
		.then((chart) =>
			chart.animate(
				{
					config: {
						channels: {
							color: { detach: [prev], attach: [act] }
						}
					},
					style: {
						plot: {
							marker: {
								colorPalette: palette
							}
						}
					}
				},
				{ duration: 1 }
			)
		)
		.then((chart) =>
			chart.animate({
				config: {
					channels: {}
				}
			})
		)
		.then((chart) =>
			chart.animate(
				{
					config: {
						channels: {
							x: { detach: [act] },
							y: {
								attach: [act],
								range: {
									min: -5,
									max: yMax
								}
							}
						}
					}
				},
				{
					y: {
						easing: 'ease-in',
						delay: '0s',
						duration: '0.4s'
					},
					x: {
						easing: 'ease-in',
						delay: '0.3s',
						duration: '0.75s'
					}
				}
			)
		)
}

const chart = new Vizzu('testVizzuCanvas')

chart.initializing
	.then((chart) => {
		chart.on('background-draw', (event) => {
			const ctx = event.renderingContext

			ctx.fillRect(0, 0, 1280, 720)

			ctx.font = '100 100px Roboto'
			ctx.fillStyle = '#a58f79'
			ctx.fillText("Farmer's", 1280 - 567, 225 + 0 * 110)
			ctx.fillText('share of a', 1280 - 567, 225 + 1 * 110)
			ctx.fillText('chocolate', 1280 - 567, 225 + 2 * 110)
			ctx.fillText('bar', 1280 - 567, 225 + 3 * 110)

			ctx.font = 'bold 150px Roboto Condensed'
			ctx.fillStyle = '#d2b37b'
			ctx.fillText('$1', (1280 - 567) / 2 - 82 + 10, 424)

			event.preventDefault()
		})

		chart.on('plot-marker-draw', (event) => {
			const ctx = event.renderingContext

			const color = ctx.fillStyle
			if (!tinycolor(color).isValid()) return // eslint-disable-line no-undef

			const grd = ctx.createLinearGradient(0, 0, 720, 720)
			grd.addColorStop(0, tinycolor(color).darken(0)) // eslint-disable-line no-undef
			grd.addColorStop(0.25, tinycolor(color).darken(0)) // eslint-disable-line no-undef
			grd.addColorStop(0.75, tinycolor(color).darken(15)) // eslint-disable-line no-undef
			grd.addColorStop(1, tinycolor(color).darken(37)) // eslint-disable-line no-undef
			ctx.fillStyle = grd
			ctx.strokeStyle = grd

			ctx.shadowColor = '#00000028'
			ctx.shadowBlur = 15
			ctx.shadowOffsetX = 5
			ctx.shadowOffsetY = 5
		})

		chart.on('logo-draw', (event) => {
			const ctx = event.renderingContext
			ctx.shadowColor = '#00000000'
			ctx.shadowBlur = 0
			event.preventDefault()
		})

		return chart.animate(
			{
				data,
				config: {
					channels: {
						// bug: title=null or '' won't work
						x: {
							attach: ['Share'],
							range: {
								min: 0,
								max: 100
							},
							title: ' '
						},
						y: {
							attach: ['Parties-7'],
							range: {
								min: -3,
								max: 3
							}
						},
						color: { attach: ['Parties-7'] },
						label: { attach: ['Parties-7'] }
					},
					title: null,
					legend: null,
					coordSystem: 'polar',
					reverse: true
				},
				style
			},
			{ duration: 0.00001 }
		) // todo: bug, 0 won't work
	})
	.then((chart) =>
		chart.animate(
			{
				config: {
					channels: {
						y: {
							range: {
								min: -5,
								max: 2
							}
						}
					}
				}
			},
			{
				delay: '2s',
				y: { easing: 'ease-out' }
			}
		)
	)
	.then((chart) => stage(chart, firstStage))
	.then((chart) => stage(chart, firstStage - 1))
	.then((chart) => stage(chart, firstStage - 2))
	.then((chart) => stage(chart, firstStage - 3))
	.then((chart) => stage(chart, firstStage - 4))
	.then((chart) => stage(chart, firstStage - 5))
	.then((chart) => stage(chart, firstStage - 6))
	.then((chart) =>
		chart.animate({
			config: {
				channels: {
					y: { detach: ['Parties-1'] },
					label: {
						detach: ['Parties-1'],
						attach: ['Parties-0']
					}
				}
			}
		})
	)
	.then((chart) =>
		chart.animate(
			{
				config: {
					channels: {
						y: { attach: ['Parties-End'] }, // bug: range elveszik, ha detach van elobb
						color: { detach: ['Parties-0'], attach: ['Parties-End'] },
						label: { detach: ['Parties-0'], attach: ['Parties-End'] }
					}
				},
				style: {
					plot: {
						marker: {
							colorPalette: [...colors].fill(colors[6], 1).join(' ')
						}
					}
				}
			},
			{ delay: '2s', regroupStrategy: 'fade' }
		)
	)
	.then((chart) =>
		chart.animate(
			{
				config: {
					channels: { y: { attach: ['Parties-7'] } } // workaround for range wo data bug
				}
			},
			{ duration: 0 }
		)
	)
	.then((chart) =>
		chart.animate(
			{
				config: {
					channels: {
						x: { attach: ['Parties-End', 'Parties-0'] },
						y: {
							detach: ['Parties-End', 'Parties-0'],
							range: {
								min: -3,
								max: 3
							}
						},
						label: { detach: ['Parties-End'] }
					},
					angle: (6.6 / 100) * Math.PI
				}
			},
			{
				coordSystem: {
					delay: 0.75,
					duration: 0.75,
					easing: 'cubic-bezier(0.7,0,1,0.5)'
				}
			}
		)
	)
	.then((chart) => {
		// marker label would not show unit
		chart.on('background-draw', (event) => {
			const ctx = event.renderingContext
			ctx.font = '24px Roboto'
			ctx.fillStyle = colors[0]
			ctx.fillText('6.6¢', 335, 117)
		})

		return chart.animate({
			config: {
				channels: {
					x: { detach: ['Parties-0'] }
				}
			}
		})
	})
	.catch((err) => {
		console.log(err)
	})
