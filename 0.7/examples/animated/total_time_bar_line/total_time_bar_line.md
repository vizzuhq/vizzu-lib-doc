---
data_url: ../../../assets/data/chart_types_eu.js
---

# Line  to Bar

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
            "y": "Value 2 (+)",
            "x": "Year",
            "color": "Joy factors"
        },
        "title": "Line Chart",
        "geometry": "line"
    }
});

chart.animate({
    config: {
        "channels": {
            "y": "Joy factors",
            "x": [
                "Value 2 (+)",
                "Year"
            ]
        },
        "title": "Bar Chart",
        "geometry": "rectangle",
        "sort": "byValue"
    }
});

chart.animate({
    config: {
        "channels": {
            "x": "Value 2 (+)",
            "label": "Value 2 (+)"
        }
    }
});
```

<script src="./total_time_bar_line.js"></script>
