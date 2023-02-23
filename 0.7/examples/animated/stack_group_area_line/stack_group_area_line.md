---
data_url: ../../../assets/data/tutorial.js
---

# Stacked Area  to Line

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
    } from 'https://lib.vizzuhq.com/0.7/assets/data/tutorial.js'

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
            "x": "Timeseries",
            "y": {
                "set": [
                    "Values 1",
                    "Categ. Parent"
                ],
                "range": {
                    "max": "400"
                }
            },
            "label": "Values 1",
            "color": "Categ. Parent"
        },
        "title": "Stacked Area Chart",
        "geometry": "area"
    }
});

chart.animate({
    config: {
        "channels": {
            "y": "Values 1"
        },
        "title": "Line Chart",
        "geometry": "line"
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
        }
    }
});
```

<script src="./stack_group_area_line.js"></script>
