import data from './data.js';
import style from './style.js';
import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@0.3.3/dist/vizzu.min.js';

data.filter = record => false;

const bgImage = document.getElementById('bgImage');

function drawBg(dc) {
  dc.drawImage(bgImage, 0, 0);
}

let chart = new Vizzu('vizzuCanvas');
let anim = chart.initializing;
let timebase = 0;
let timeFraction = 0;

anim = anim.then(chart =>
{
  chart.on('background-draw', event => {
    drawBg(event.renderingContext);
    event.preventDefault();
  });

  chart.on('logo-draw', event => {
    event.renderingContext.font = 'bold 30px PT Sans Narrow';
    event.renderingContext.fillStyle = '#fefef6ff';
    let time = 90 - (timebase + timeFraction);
    event.renderingContext.fillText(
      String(Math.floor(time / 60)) + ':'
      + String(Math.floor(time) % 60).padStart(2, '0') + '.'
      + String(Math.floor((time - Math.floor(time))*100)).padStart(2, '0'),
      1160,668);
    event.preventDefault();
  });

  chart.on('update', event => { 
    timeFraction = Math.min(0.99, event.data.progress);
  });

  chart.on('plot-marker-label-draw', event => {
    const cutAfterDot = /\.\d*/;
    let label = event.data.text;
    label = label.replace(cutAfterDot, '');
    event.renderingContext.fillText(label, event.data.rect.pos.x, event.data.rect.pos.y);    
  	event.preventDefault();
  });

  chart.on('plot-axis-label-draw', event => {
    if (event.data.text.startsWith('Radiation dose'))
      event.renderingContext.fillStyle = '#de0000ff';
  });

  return chart.animate({
    data,
    config: {
      channels: {
        label: { set: ['Dose [X-rays]'] },
        color: { set: ['activity'] },
        x: {attach: ['Dose [X-rays]'], 
          range: {
            min: 0,
            max: '102%'
          },
        },
        y: {attach: ['activity'],
          range: {
            min: '-6.99999max' // workaround a bug
          }
        }
      },
      title: '',
      sort: 'byValue'
    },
    style
  });
});

for (let sec = 1; sec <= 90; sec++)
{
  anim = anim.then(chart => {
    timebase = sec - 1;
    return chart.animate(
    {
      data: {
        records: [[250000/90,'Radiation dose on the reactor roof']],
        filter: record => {
          if (record.activity.startsWith('Radiation dose')) return true;
          let offset = 0;
          if (record.activity.startsWith('5 year')) offset = 10000;
          return record['Dose [X-rays]'] + offset <= (sec < 80 
            ? Math.max(250000 * sec / 90, 3600)
            : 250000); 
        }
      },
    },
    {
      duration: 1,
      x: { delay: 0, duration: 1, easing: 'linear' },
      color: { delay: 0, duration: 1, easing: 'linear' },
      y: { delay: 0, duration: 1, easing: 'ease-in' },
      show: { delay: 0.75, duration: 0.25, easing: 'ease-in' },
      hide: { delay: 0, duration: 0.25, easing: 'ease-out' }
    })
  });
}
