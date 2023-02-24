---
data_url: ../../../assets/data/chart_types_eu.js
---

# Marimekko  to Marimekko with Other Orientation

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
        data_4
    } from 'https://lib.vizzuhq.com/0.7/assets/data/chart_types_eu.js'

    let chart = new Vizzu('myVizzu')

    chart.initializing

    chart.animate({
        data_4
    })
    ```

```javascript
chart.animate({
    config: {
        "channels": {
            "x": [
                "Country",
                "Value 2 (+)"
            ],
            "y": [
                "Joy factors",
                "Value 3 (+)"
            ],
            "color": "Joy factors",
            "label": "Country",
            "lightness": "Country"
        },
        "title": "Marimekko Chart",
        "align": "stretch",
        "orientation": "horizontal"
    }
});

chart.animate({
    config: {
        "title": "Marimekko with Other Orientation",
        "orientation": "vertical"
    }
});
```

<script src="./orientation_marimekko_rectangle_2dis_2con.js"></script>
