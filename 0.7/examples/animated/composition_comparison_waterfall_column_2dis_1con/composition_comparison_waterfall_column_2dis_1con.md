---
data_url: ../../../assets/data/chart_types_eu.js
---

# Waterfall  to Column

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
                "Year",
                "Value 5 (+/-)"
            ],
            "color": {
                "set": [
                    "Value 5 (+/-)"
                ],
                "range": {
                    "min": "-45",
                    "max": "45"
                }
            },
            "noop": "Country",
            "label": "Value 5 (+/-)"
        },
        "title": "Waterfall Chart",
        "legend": "color"
    },
    style: {
        "plot": {
            "marker": {
                "colorGradient": "#3d51b8 0,#6389ec 0.15,#9fbffa 0.35,#d5d7d9 0.5,#f4b096 0.65,#e36c56 0.85,#ac1727 1",
                "label": {
                    "position": "top"
                }
            }
        }
    }
});

chart.animate({
    config: {
        "channels": {
            "y": "Value 5 (+/-)"
        },
        "title": "Column Chart"
    }
});
```

<script src="./composition_comparison_waterfall_column_2dis_1con.js"></script>
