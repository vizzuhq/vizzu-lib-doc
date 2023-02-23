---
data_url: ../../../assets/data/chart_types_eu.js
---

# Grouped Column Chart

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
                "Joy factors",
                "Country"
            ],
            "y": "Value 5 (+/-)",
            "color": "Joy factors",
            "label": "Value 5 (+/-)"
        },
        "title": "Grouped Column Chart"
    },
    style: {
        "plot": {
            "marker": {
                "label": {
                    "fontSize": 6,
                    "orientation": "vertical",
                    "angle": -3.14
                }
            }
        }
    }
});
```

<script src="./column_grouped_rectangle_negative_2dis_1con.js"></script>
