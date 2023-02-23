---
data_url: ../../../assets/data/chart_types_eu.js
---

# Single Line  to Line  II

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
                "set": "Value 3 (+)",
                "range": {
                    "max": "6000000000"
                }
            },
            "size": "Country"
        },
        "title": "Single Line Chart",
        "geometry": "line"
    }
});

chart.animate({
    config: {
        "channels": {
            "color": "Country",
            "size": null
        },
        "title": "Drill down"
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
        "title": "Line Chart II"
    }
});
```

<script src="./drilldown_aggregate_line.js"></script>
