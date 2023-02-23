---
data_url: ../../../assets/data/chart_types_eu.js
---

# Radial Bar  to Split Radial Bar

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
                "Country",
                "Value 2 (+)"
            ],
            "y": {
                "set": "Year",
                "range": {
                    "min": "-3"
                }
            },
            "color": "Country"
        },
        "title": "Radial Bar Chart",
        "coordSystem": "polar"
    }
});

chart.animate({
    config: {
        "title": "Split Radial Bar Chart",
        "split": true
    }
});
```

<script src="./merge_split_radial_stacked_rectangle_2dis_1con.js"></script>
