import { data } from './friends-supporting-data.js'
import { Portraits } from './friends-supporting-portraits.js'
import { palette, style } from './friends-supporting-style.js'
import Vizzu from '../../assets/dist/vizzu.min.js'

const skip = [
  's01e15',
  's01e18',
  's01e21',
  's01e22',
  's01e24',
  's02e01',
  's02e05',
  's02e06',
  's02e09',
  's02e12',
  's02e13',
  's02e17',
  's02e21',
  's03e09',
  's03e10',
  's03e11',
  's03e12',
  's03e14',
  's03e15',
  's03e16',
  's03e19',
  's03e20',
  's03e25',
  's04e01',
  's04e02',
  's04e04',
  's04e05',
  's04e06',
  's04e10',
  's04e14',
  's04e22',
  's05e02',
  's05e05',
  's05e07',
  's05e09',
  's05e10',
  's05e11',
  's05e13',
  's05e14',
  's05e15',
  's05e16',
  's05e17',
  's05e19',
  's05e22',
  's05e23',
  's05e24',
  's06e01',
  's06e02',
  's06e03',
  's06e04',
  's06e05',
  's06e07',
  's06e08',
  's06e10',
  's06e11',
  's06e12',
  's06e18',
  's06e19',
  's06e21',
  's07e03',
  's07e04',
  's07e05',
  's07e06',
  's07e08',
  's07e09',
  's07e11',
  's07e13',
  's07e15',
  's07e17',
  's07e18',
  's07e19',
  's07e22',
  's08e03',
  's08e04',
  's08e05',
  's08e08',
  's08e09',
  's08e10',
  's08e11',
  's08e12',
  's08e13',
  's08e14',
  's08e17',
  's08e20',
  's08e21',
  's08e22',
  's09e03',
  's09e06',
  's09e07',
  's09e08',
  's09e09',
  's09e10',
  's09e11',
  's09e14',
  's09e15',
  's09e19',
  's09e22',
  's10e03',
  's10e08',
  's10e09',
  's10e11',
  's10e13',
  's10e16'
]

const portraits = new Portraits()

function padZero(num) {
  return String(num).padStart(2, '0')
}

function SEId(id) {
  return 's' + padZero(id.season) + 'e' + padZero(id.episode)
}

function next(id) {
  const seasonLen = [0, 24, 24, 25, 24, 24, 25, 24, 24, 24, 18]
  const res = { season: id.season, episode: id.episode }
  res.episode++
  if (res.episode > seasonLen[res.season]) {
    res.season++
    if (res.season > 10) return undefined
    res.episode = 1
  }
  if (res.season === 6 && res.episode === 6) res.episode++
  if (res.season === 7 && res.episode === 1) res.episode++
  if (res.season === 7 && res.episode === 21) res.episode++
  return res
}

function drawBg(dc) {
  dc.drawImage(bgImage, 0, 0)
}

function text(dc, rect, txt) {
  const img = portraits.getByName(txt)
  if (img !== undefined) {
    const alpha = String(dc.fillStyle).split(',')[3].slice(0, -1)
    dc.save()
    dc.globalAlpha = alpha
    const tr = rect.transform
    dc.transform(tr[0][0], tr[1][0], tr[0][1], tr[1][1], tr[0][2], tr[1][2])
    dc.drawImage(img, rect.size.x - 14 - 48, rect.size.y - 48, 48, 48)
    dc.globalAlpha = 1
    dc.restore()
    return true
  }
  return false
}

function initSlide() {
  return chart.animate({
    data,
    config: {
      title: '',
      sort: 'byValue',
      reverse: true,
      rotate: -90
    },
    style
  })
}

function waitSlide() {
  return chart.animate({
    style: { legend: { title: { fontSize: Math.random() } } }
  })
}

function slide(seid, actFilter) {
  return chart.animate(
    {
      data: {
        filter: actFilter
      },
      config: {
        channels: {
          x: {
            attach: ['name'],
            range: {
              min: 0,
              max: '102%'
            }
          },
          y: {
            attach: ['Lines', 'season'],
            range: {
              min: 0,
              max: 9.99999
            }
          },
          color: { attach: ['season'] }
        },
        title: seid
      },
      style: {
        plot: {
          yAxis: { label: { color: palette[1] } },
          xAxis: { label: { color: palette[1] } }
        }
      }
    },
    {
      x: { delay: '0s', duration: '.7s', easing: 'linear' },
      y: { delay: '0s', duration: '.7s', easing: 'ease-in' },
      show: { delay: '0s', duration: '.7s', easing: 'ease-in' },
      title: { delay: '0s', duration: '.7s', easing: 'linear' }
    }
  )
}

const bgImage = document.getElementById('bgImage')

const chart = new Vizzu('testVizzuCanvas')

chart.initializing.then((chart) => {
  chart.on('background-draw', (event) => {
    drawBg(event.renderingContext)
    event.preventDefault()
  })

  chart.on('logo-draw', (event) => {
    event.preventDefault()
  })

  chart.on('plot-axis-label-draw', (event) => {
    const rect = event.detail.rect
    const ok = text(event.renderingContext, rect, event.target.value)
    if (!ok) event.preventDefault()
  })

  let res = initSlide()

  for (let i = 0; i < 2; i++)
    res = res.then(() => {
      return waitSlide()
    })

  let id = { season: 1, episode: 1 }
  const filter = []
  while (((id = next(id)), id !== undefined)) {
    const seid = SEId(id)
    if (data.series[1].values.includes(seid)) {
      filter.push(seid)
      if (!skip.includes(seid)) {
        const actFilter = [...filter]
        res = res.then(() => slide(seid, (record) => actFilter.includes(record.episode)))
      }
    }
  }
  for (let i = 0; i < 20; i++) res = res.then(() => waitSlide())
})
