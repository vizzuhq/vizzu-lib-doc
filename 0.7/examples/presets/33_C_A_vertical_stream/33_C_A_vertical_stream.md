---
data_url: ../../../assets/data/music_industry_history_1.js
---

# Vertical Stream Graph

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
    config: Vizzu.presets.verticalStream({
        "x": "Revenue [m$]",
        "y": "Year",
        "stackedBy": "Format",
        "title": "Vertical Stream Graph"
    }),
    style: {
        "plot": {
            "xAxis": {
                "interlacing": {
                    "color": "#ffffff00"
                }
            }
        }
    }
});
```

<script src="./33_C_A_vertical_stream.js"></script>
