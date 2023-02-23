---
data_url: ../../../assets/data/chart_types_eu.js
---

# Scatter Plot to Dot Plot

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
            "x": "Value 5 (+/-)",
            "y": "Value 6 (+/-)",
            "noop": "Joy factors",
            "lightness": "Year"
        },
        "title": "Scatter Plot",
        "geometry": "circle"
    }
});

chart.animate({
    config: {
        "channels": {
            "x": "Year"
        },
        "title": "Dot Plot",
        "legend": "lightness"
    }
});

chart.animate({
    config: {
        "channels": {
            "x": "Value 5 (+/-)",
            "y": "Value 6 (+/-)"
        },
        "title": "Scatter Plot"
    }
});

chart.animate({
    config: {
        "channels": {
            "y": "Joy factors",
            "noop": null
        },
        "title": "Dot Plot"
    }
});
```

<script src="./orientation_dot_circle.js"></script>
