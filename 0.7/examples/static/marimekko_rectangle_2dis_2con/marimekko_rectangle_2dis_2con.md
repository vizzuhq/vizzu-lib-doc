---
data_url: ../../../assets/data/chart_types_eu.js
---

# Marimekko Chart

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
    config: {
        "channels": {
            "x": [
                "Country",
                "Value 2 (+)"
            ],
            "y": [
                "Joy factors",
                "Value 3 (+)"
            ],
            "color": "Joy factors",
            "label": [
                "Country",
                "Value 2 (+)"
            ]
        },
        "title": "Marimekko Chart",
        "align": "stretch",
        "orientation": "horizontal"
    },
    style: {
        "plot": {
            "marker": {
                "label": {
                    "format": "dimensionsFirst",
                    "fontSize": "0.7em"
                }
            }
        }
    }
});
```

<script src="./marimekko_rectangle_2dis_2con.js"></script>
