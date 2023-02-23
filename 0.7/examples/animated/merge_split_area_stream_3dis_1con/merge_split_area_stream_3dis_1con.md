---
data_url: ../../../assets/data/chart_types_eu.js
---

# Stacked Streamgraph to Split Area

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
        data_6
    } from 'https://lib.vizzuhq.com/0.7/assets/data/chart_types_eu.js'

    let chart = new Vizzu('myVizzu')

    chart.initializing

    chart.animate({
        data_6
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
                "Country"
            ],
            "color": "Country"
        },
        "title": "Stacked Streamgraph",
        "geometry": "area",
        "align": "center"
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
        "split": true,
        "align": "min"
    }
});
```

<script src="./merge_split_area_stream_3dis_1con.js"></script>
