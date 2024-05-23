import data from './data.js'
import Vizzu from '../../assets/dist/vizzu.min.js'

new Vizzu('testVizzuCanvas', { data }).initializing.then((chart) => {
	chart.animate({
		data: {
			filter: (record) => {
				return record.Product === 'Shoes'
			}
		},
		config: {
			x: 'Region',
			y: ['Sales', 'Product'],
			label: 'Sales',
			color: 'Product',
			title: 'Sales of Shoes'
		}
	})

	chart.animate(
		{
			data: {
				filter: (record) => {
					return record.Product === 'Shoes' || record.Product === 'Handbags'
				}
			},
			config: { title: 'Sales of Shoes & Handbags' }
		},
		{ delay: 1 }
	)

	chart.animate(
		{
			data: {
				filter: (record) => {
					return record.Product !== 'Accessories'
				}
			},
			config: { title: 'Sales of Shoes, Handbags & Gloves' }
		},
		{ delay: 1 }
	)

	chart.animate(
		{
			data: { filter: null },
			config: { title: 'Sales of All Products' }
		},
		{ delay: 1 }
	)

	chart.animate(
		{
			config: {
				y: ['Revenue', 'Product'],
				label: 'Revenue',
				title: 'Revenue of All Products'
			}
		},
		{ delay: 1 }
	)

	chart.animate(
		{
			config: { x: ['Region', 'Revenue'], y: 'Product' }
		},
		{ delay: 2 }
	)

	chart.animate({
		config: { x: 'Revenue', y: 'Product' }
	})

	chart.animate(
		{
			config: { coordSystem: 'polar', sort: 'byValue' }
		},
		{ delay: 1 }
	)
})
