---
data_url: ../../../assets/data/chart_types_eu.js
---

# Stacked Mekko Chart

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
        data_4
    } from 'https://lib.vizzuhq.com/0.7/assets/data/chart_types_eu.js'

    let chart = new Vizzu('myVizzu')

    chart.initializing

    chart.animate({
        data_4
    })
    ```

```javascript
chart.animate({
    config: Vizzu.presets.mekko({
        "x": "Value 1 (+)",
        "y": "Value 2 (+)",
        "stackedBy": "Joy factors",
        "groupedBy": "Country",
        "title": "Stacked Mekko Chart"
    })
});
```

<script src="./09_C_R_stacked_mekko.js"></script>
