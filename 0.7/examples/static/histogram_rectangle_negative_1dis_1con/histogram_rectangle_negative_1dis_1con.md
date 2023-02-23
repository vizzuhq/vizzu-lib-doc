---
data_url: ../../../assets/data/chart_types_eu.js
---

# Histogram

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
    } from 'https://lib.vizzuhq.com/0.7/assets/data/chart_types_eu.js'

    let chart = new Vizzu('myVizzu')

    chart.initializing

    chart.animate({
        data
    })
    ```

```javascript
chart.animate({
    config: {
        "channels": {
            "x": "Year",
            "y": "Value 5 (+/-)",
            "label": "Value 5 (+/-)"
        },
        "title": "Histogram",
        "align": "none"
    },
    style: {
        "plot.marker.rectangleSpacing": 0.07
    }
});
```

<script src="./histogram_rectangle_negative_1dis_1con.js"></script>