---
data_url: ../../../assets/data/chart_types_eu.js
---

# Polar Single Line Chart

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
            "y": {
                "set": [
                    "Value 2 (+)"
                ],
                "range": {
                    "max": "130%"
                }
            },
            "label": "Value 2 (+)"
        },
        "title": "Polar Single Line Chart",
        "geometry": "line",
        "coordSystem": "polar"
    },
    style: {
        "plot": {
            "marker": {
                "label": {
                    "orientation": "tangential",
                    "angle": -1.57
                }
            }
        }
    }
});
```

<script src="./spiderweb_line_1dis_1con.js"></script>
