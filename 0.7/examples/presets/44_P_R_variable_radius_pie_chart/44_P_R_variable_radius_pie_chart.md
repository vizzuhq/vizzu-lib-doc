---
data_url: ../../../assets/data/chart_types_eu.js
---

# Variable Radius Pie Chart

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
    config: Vizzu.presets.variableRadiusPie({
        "angle": "Value 2 (+)",
        "radius": "Value 1 (+)",
        "by": "Joy factors",
        "title": "Variable Radius Pie Chart"
    })
});
```

<script src="./44_P_R_variable_radius_pie_chart.js"></script>
