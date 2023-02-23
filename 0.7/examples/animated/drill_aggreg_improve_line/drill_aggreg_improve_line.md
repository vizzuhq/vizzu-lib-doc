---
data_url: ../../../assets/data/chart_types_eu.js
---

# Single Line  to Line  I

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
            "x": "Year",
            "y": "Value 3 (+)"
        },
        "title": "Single Line Chart",
        "geometry": "line"
    }
});

chart.animate({
    config: {
        "channels": {
            "y": [
                "Country",
                "Value 3 (+)"
            ],
            "color": "Country"
        },
        "title": "Drill down",
        "geometry": "area"
    }
});

chart.animate({
    config: {
        "channels": {
            "y": "Value 3 (+)"
        },
        "title": "Line Chart I",
        "geometry": "line"
    }
});
```

<script src="./drill_aggreg_improve_line.js"></script>