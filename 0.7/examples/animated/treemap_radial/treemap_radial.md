---
data_url: ../../../assets/data/chart_types_eu.js
---

# Treemap to Radial

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
            "color": "Joy factors",
            "size": "Value 2 (+)",
            "label": "Joy factors"
        },
        "title": "Treemap"
    }
});

chart.animate({
    config: {
        "channels": {
            "x": "Value 2 (+)",
            "y": {
                "set": "Joy factors",
                "range": {
                    "min": "-30%"
                }
            },
            "size": null,
            "label": "Value 2 (+)"
        },
        "title": "Radial Chart",
        "coordSystem": "polar"
    }
});
```

<script src="./treemap_radial.js"></script>
