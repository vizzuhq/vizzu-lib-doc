---
data_url: ../../../assets/data/chart_types_eu.js
---

# Stacked Area Chart

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
            "y": [
                "Country",
                "Value 2 (+)"
            ],
            "color": "Country"
        },
        "title": "Stacked Area Chart",
        "geometry": "area"
    }
});
```

<script src="./stacked_area_2dis_1con.js"></script>
