---
data_url: ../../../assets/data/chart_types_eu.js
---

# Bubble Plot to Bubble

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
            "x": null,
            "y": null,
            "size": [
                "Value 2 (+)",
                "Country_code"
            ]
        },
        "title": "Stacked Bubble Chart"
    }
});

chart.animate({
    config: {
        "channels": {
            "size": "Value 2 (+)"
        },
        "title": "Bubble Chart"
    }
});
```

<script src="./relationship_comparison_circle_2_bubble_plot.js"></script>
