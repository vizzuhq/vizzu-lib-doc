export default class Dust {
	constructor() {
		this.points = []
		this.t = 0
		this.init()
	}

	circle(ctx, x, y, r, a, R, G, B) {
		const grd = ctx.createRadialGradient(x, y, 1, x, y, r)
		grd.addColorStop(0, `rgb(${R},${G},${B},${a * 0.5})`)
		grd.addColorStop(0.7, `rgb(${R},${G},${B},${a * 0.75})`)
		grd.addColorStop(0.8, `rgb(${R},${G},${B},${a})`)
		grd.addColorStop(1, `rgb(${R},${G},${B},0)`)

		ctx.beginPath()
		ctx.arc(x, y, r, 0, Math.PI * 2)
		ctx.fillStyle = grd
		ctx.fill()
	}

	rotate(p, i, j, a) {
		a = a * Math.cos(a * a * this.t) * 0.5
		const x = p[i] - 0.5
		const y = p[j] - 0.5
		p[i] = 0.5 + Math.cos(a) * x - Math.sin(a) * y
		p[j] = 0.5 + Math.sin(a) * x + Math.cos(a) * y
	}

	init() {
		for (let i = 0; i < 500; i++)
			this.points.push([
				Math.random(),
				Math.random(),
				Math.random(),
				Math.random(),
				Math.random(),
				Math.random(),
				Math.random()
			])
	}

	render(ctx, width, height) {
		this.t += 10

		const canvas = document.createElement('canvas')
		canvas.width = width
		canvas.height = height
		canvas.style.width = width
		canvas.style.height = height
		const ctx2 = canvas.getContext('2d')
		/*
		let red = Math.pow(this.t/40000,5);
		ctx2.fillStyle = `rgb(100,0,0,${red*0.5})`;
		ctx2.fillRect(0, 0, width, height);
*/
		for (const point of this.points) {
			const distance = point[2]
			const near = 1.2 - distance

			const light =
				(Math.abs(1 + Math.cos(point[3] * 40) + 1) / 2) *
				Math.pow(Math.abs(1 + Math.cos(point[0] * 10) + 1) / 2, 1.5) *
				Math.abs(point[2] - 0.5)

			this.rotate(point, 0, 1, 0.003 * point[3])
			this.rotate(point, 1, 2, -0.005 * point[0])
			this.rotate(point, 0, 2, 0.007 * near * point[1])
			this.rotate(point, 0, 3, 0.001)
			this.rotate(point, 1, 3, 0.002)
			this.rotate(point, 2, 3, 0.011)

			const r = 1 / Math.pow(0.41 + distance / 1.41, 1.5)
			let a = 10 * Math.pow(0.1 + distance, 2) * near * light
			a = Math.min(1, 0.25 + 0.75 * a)
			this.circle(ctx2, point[0] * width, point[1] * height, r, a, 140, 140, 140)
		}

		ctx.save()
		ctx.drawImage(canvas, 0, 0)
		ctx.restore()
	}
}
