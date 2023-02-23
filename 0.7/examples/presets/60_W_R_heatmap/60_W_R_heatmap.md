---
data_url: ../../../assets/data/chart_types_eu.js
---

# Heatmap

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
        data_6
    } from 'https://lib.vizzuhq.com/0.7/assets/data/chart_types_eu.js'

    let chart = new Vizzu('myVizzu')

    chart.initializing

    chart.animate({
        data_6
    })
    ```

```javascript
chart.animate({
    config: Vizzu.presets.heatmap({
        "x": "Year",
        "y": "Country_code",
        "lightness": "Value 3 (+)",
        "title": "Heatmap"
    }),
    style: {
        "plot": {
            "marker": {
                "rectangleSpacing": 0
            }
        }
    }
});
```

<script src="./60_W_R_heatmap.js"></script>
