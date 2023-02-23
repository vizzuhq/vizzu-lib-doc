---
data_url: ../../../assets/data/chart_types_eu.js
---

# Line  to Column

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
            "y": [
                "Value 2 (+)",
                "Year"
            ],
            "x": "Joy factors"
        },
        "title": "Column Chart",
        "geometry": "rectangle",
        "sort": "byValue"
    }
}, {
    {
        "geometry": {
            "delay": 0.5,
            "duration": 0.5
        },
        "y": {
            "delay": 0.5,
            "duration": 1
        },
        "x": {
            "delay": 0,
            "duration": 1
        }
    }
});

chart.animate({
    config: {
        "channels": {
            "y": "Value 2 (+)",
            "label": "Value 2 (+)"
        }
    }
});
```

<script src="./total_time_column_line.js"></script>
