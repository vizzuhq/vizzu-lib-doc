---
data_url: ../../../assets/data/chart_types_eu.js
---

# Polar Line Chart

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
    config: Vizzu.presets.polarLine({
        "angle": "Year",
        "radius": "Value 2 (+)",
        "dividedBy": "Country",
        "title": "Polar Line Chart"
    })
});
```

<script src="./56_P_A_polar_line.js"></script>
