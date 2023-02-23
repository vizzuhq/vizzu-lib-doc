---
data_url: ../../../assets/data/chart_types_eu.js
---

# Polar Stacked Area to Zoomed Polar Stacked Area

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
                "Country_code"
            ],
            "color": "Country_code"
        },
        "title": "Polar Stacked Area",
        "geometry": "area",
        "coordSystem": "polar"
    }
});

chart.animate({
    data: {
        filter: record => data_6.filter(record) &&
            record.Year < 12 && record.Year > 6
    },
    config: {
        "title": "Zoomed Polar Stacked Area"
    }
});
```

<script src="./zoom_area_polar.js"></script>
