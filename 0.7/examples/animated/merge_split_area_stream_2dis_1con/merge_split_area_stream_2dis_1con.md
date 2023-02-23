---
data_url: ../../../assets/data/music_industry_history_1.js
---

# Stacked Streamgraph to Bar

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
    } from 'https://lib.vizzuhq.com/0.7/assets/data/music_industry_history_1.js'

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
            "x": "Year",
            "y": [
                "Revenue [m$]",
                "Format"
            ],
            "color": "Format"
        },
        "title": "Stacked Streamgraph",
        "geometry": "area",
        "align": "center"
    },
    style: {
        "plot": {
            "xAxis": {
                "label": {
                    "angle": 1.8,
                    "fontSize": 8.5
                }
            }
        }
    }
});

chart.animate({
    config: {
        "channels": {
            "y": {
                "range": {
                    "max": "100%"
                }
            }
        },
        "title": "Split Area Chart",
        "split": true,
        "align": "min"
    }
});

chart.animate({
    config: {
        "channels": {
            "x": [
                "Revenue [m$]",
                "Year"
            ],
            "y": "Format"
        },
        "title": "Bar Chart",
        "geometry": "rectangle",
        "split": false,
        "align": "min"
    },
    style: {
        "plot": {
            "xAxis": {
                "label": {
                    "angle": null,
                    "fontSize": null
                }
            }
        }
    }
});
```

<script src="./merge_split_area_stream_2dis_1con.js"></script>
