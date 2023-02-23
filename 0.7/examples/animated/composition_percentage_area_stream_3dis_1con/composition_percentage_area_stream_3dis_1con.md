---
data_url: ../../../assets/data/chart_types_eu.js
---

# Stacked Area  to Split Area

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
        data_14
    } from 'https://lib.vizzuhq.com/0.7/assets/data/chart_types_eu.js'

    let chart = new Vizzu('myVizzu')

    chart.initializing

    chart.animate({
        data_14
    })
    ```

```javascript
chart.animate({
    config: {
        "channels": {
            "x": "Year",
            "y": [
                "Value 2 (+)",
                "Country"
            ],
            "color": "Country"
        },
        "title": "Stacked Area Chart",
        "geometry": "area"
    }
});

chart.animate({
    config: {
        "title": "100% Stacked Area Chart",
        "align": "stretch"
    }
});

chart.animate({
    config: {
        "channels": {
            "y": {
                "range": {
                    "max": "100%"
                }
            }
        },
        "title": "Split Area Chart",
        "align": "min",
        "split": true
    }
});
```

<script src="./composition_percentage_area_stream_3dis_1con.js"></script>
