---
data_url: ../../../assets/data/music_industry_history_1.js
---

# Violin Graph

<div id="example_01"></div>

??? info "Info - How to setup Vizzu"
    In `HTML`, create a placeholder element that will contain the rendered
    chart.

    ```html
    <html>
     <body>
      <div id="myVizzu">
      </div>
     </body>
    </html>

    ```

    In `JavaScript`, initialize and configure the chart:

    ```javascript
    import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@0.7/dist/vizzu.min.js'
    import {
        data
    } from 'https://lib.vizzuhq.com/0.7/assets/data/music_industry_history_1.js'

    let chart = new Vizzu('myVizzu')

    chart.initializing

    chart.animate({
        data
    })
    ```

```javascript
chart.animate({
    config: Vizzu.presets.violin({
        "x": "Year",
        "y": "Revenue [m$]",
        "splittedBy": "Format",
        "title": "Violin Graph"
    }),
    style: {
        "plot": {
            "yAxis": {
                "interlacing": {
                    "color": "#ffffff00"
                }
            },
            "xAxis": {
                "label": {
                    "angle": "-45deg"
                }
            }
        }
    }
});
```

<script src="./34_C_A_violin.js"></script>
