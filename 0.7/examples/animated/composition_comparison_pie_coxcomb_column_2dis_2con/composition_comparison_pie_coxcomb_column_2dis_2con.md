---
data_url: ../../../assets/data/infinite_data.js
---

# Pie  to Coxcomb

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
    } from 'https://lib.vizzuhq.com/0.7/assets/data/infinite_data.js'

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
                "Value 1",
                "Joy factors"
            ],
            "color": "Joy factors",
            "label": "Value 1"
        },
        "title": "Pie Chart",
        "coordSystem": "polar"
    }
});

chart.animate({
    config: {
        "channels": {
            "x": [
                "Value 1",
                "Joy factors",
                "Region",
                "Country code"
            ],
            "label": null
        }
    }
}, "500ms");

chart.animate({
    config: {
        "channels": {
            "x": [
                "Value 1",
                "Joy factors",
                "Region",
                "Country code"
            ],
            "y": {
                "set": "Value 3",
                "range": {
                    "min": "-60%"
                }
            }
        },
        "title": "Coxcomb Chart"
    }
});
```

<script src="./composition_comparison_pie_coxcomb_column_2dis_2con.js"></script>
