---
data_url: ../../../assets/data/chart_types_eu.js
---

# Stacked Area  to Column

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
            "y": [
                "Joy factors",
                "Value 2 (+)"
            ],
            "x": "Year",
            "color": "Joy factors"
        },
        "title": "Stacked Area Chart",
        "geometry": "area"
    }
});

chart.animate({
    config: {
        "title": "Split Area Chart",
        "split": true
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
        "split": false
    }
});

chart.animate({
    config: {
        "channels": {
            "y": "Value 2 (+)",
            "x": "Joy factors",
            "label": "Value 2 (+)"
        },
        "title": "Column Chart",
        "geometry": "rectangle",
        "split": false
    }
});
```

<script src="./total_time_area_column.js"></script>
