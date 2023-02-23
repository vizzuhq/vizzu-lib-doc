---
data_url: ../../../assets/data/chart_types_eu.js
---

# Stacked Streamgraph

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
            "x": [
                "Year",
                "Joy factors"
            ],
            "y": [
                "Value 3 (+)",
                "Country_code"
            ],
            "color": "Country_code"
        },
        "title": "Stacked Streamgraph",
        "geometry": "area",
        "align": "center"
    }
});
```

<script src="./stream_stacked_area_3dis_1con.js"></script>
