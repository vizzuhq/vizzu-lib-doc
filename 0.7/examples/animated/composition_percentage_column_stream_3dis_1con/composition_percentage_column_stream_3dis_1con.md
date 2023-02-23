---
data_url: ../../../assets/data/chart_types_eu.js
---

# Column  to 100% Column

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
            "noop": "Country"
        },
        "title": "Column Chart"
    }
});

chart.animate({
    config: {
        "channels": {
            "y": {
                "range": {
                    "max": "100%"
                }
            },
            "color": "Country",
            "noop": null
        },
        "title": "Split Column Chart",
        "split": true
    }
});

chart.animate({
    config: {
        "channels": {
            "y": {
                "range": {
                    "max": "auto"
                }
            }
        },
        "title": "Stacked Column Chart",
        "split": false
    }
});

chart.animate({
    config: {
        "title": "100% Column Chart",
        "align": "stretch"
    }
});
```

<script src="./composition_percentage_column_stream_3dis_1con.js"></script>
