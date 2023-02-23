---
data_url: ../../../assets/data/chart_types_eu.js
---

# Stacked Bubble  to Bar

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
            "label": "Country_code",
            "size": [
                "Country_code",
                "Value 2 (+)"
            ]
        },
        "title": "Stacked Bubble Chart",
        "geometry": "circle"
    }
});

chart.animate({
    config: {
        "channels": {
            "x": [
                "Country_code",
                "Value 2 (+)"
            ],
            "y": "Joy factors",
            "label": null,
            "size": null
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

<script src="./total_element_bubble_2_bar.js"></script>
