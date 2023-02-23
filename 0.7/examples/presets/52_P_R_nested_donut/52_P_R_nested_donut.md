---
data_url: ../../../assets/data/chart_types_eu.js
---

# Nested Donut Chart

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
        data_3
    } from 'https://lib.vizzuhq.com/0.7/assets/data/chart_types_eu.js'

    let chart = new Vizzu('myVizzu')

    chart.initializing

    chart.animate({
        data_3
    })
    ```

```javascript
chart.animate({
    config: Vizzu.presets.nestedDonut({
        "angle": "Value 2 (+)",
        "stackedBy": "Joy factors",
        "radius": "Country",
        "title": "Nested Donut Chart"
    }),
    style: {
        "plot": {
            "marker": {
                "rectangleSpacing": "0",
                "borderWidth": 1,
                "borderOpacity": 0
            }
        }
    }
});
```

<script src="./52_P_R_nested_donut.js"></script>