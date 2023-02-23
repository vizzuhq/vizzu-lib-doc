---
data_url: ../../../assets/data/chart_types_eu.js
---

# Bubble Plot to Bar

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
            "x": [
                "Joy factors",
                "Value 6 (+/-)"
            ],
            "y": "Value 5 (+/-)",
            "color": "Joy factors",
            "size": "Value 2 (+)",
            "label": "Country_code"
        },
        "title": "Bubble Plot",
        "geometry": "circle"
    }
});

chart.animate({
    config: {
        "channels": {
            "y": "Joy factors",
            "x": [
                "Value 2 (+)",
                "Country_code"
            ],
            "label": null
        },
        "title": "Bar Chart",
        "geometry": "rectangle",
        "orientation": "vertical"
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

<script src="./relationship_total_bubble_plot_column.js"></script>
