---
data_url: ../../../assets/data/tutorial.js
---

# Stacked Column  to Bar

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
    } from 'https://lib.vizzuhq.com/0.7/assets/data/tutorial.js'

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
            "x": "Timeseries",
            "y": [
                "Values 1",
                "Categ. Parent"
            ],
            "color": "Categ. Parent",
            "label": "Values 1"
        },
        "title": "Stacked Column Chart"
    }
});

chart.animate({
    config: {
        "channels": {
            "x": "Values 1",
            "y": "Categ. Parent"
        },
        "title": "Bar Chart"
    }
});
```

<script src="./orientation_rectangle.js"></script>
