[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Config](../modules/vizzu.Config.md) / Channels

# Interface: Channels

[vizzu](../modules/vizzu.md).[Config](../modules/vizzu.Config.md).Channels

Channel configuration. A data series' name or a list of the data series' names
can be used as a short-hand - instead of the
[channel object](vizzu.Config.Channel.md) - to set data series for the channel.
Setting a channel to null will remove all data series from it.

## Hierarchy

- **`Channels`**

  ↳ [`Chart`](vizzu.Config.Chart.md)

## Properties

### color

• `Optional` **color**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the markers' base color. The markers' actual color can also be
affected by the lightness channel.

______________________________________________________________________

### label

• `Optional` **label**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the content of the labels that appear on the markers.

______________________________________________________________________

### lightness

• `Optional` **lightness**: [`SeriesList`](../modules/vizzu.Data.md#serieslist)
| [`Channel`](vizzu.Config.Channel.md)

Parameters for markers' lightness.

______________________________________________________________________

### noop

• `Optional` **noop**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Splits the markers as all the other channels, but have no effect on the markers'
appearance. Thus, it only works with dimensions.

______________________________________________________________________

### size

• `Optional` **size**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the markers' size. Effective only for circle and line geometry
affecting the circle area or the line width respectively.

______________________________________________________________________

### x

• `Optional` **x**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the X-axis, determining the position of the markers on the x-axis
\- or their angle when using polar coordinates. Note: leaving x and y channels
empty will result in a chart "without coordinates" like a Treemap or a Bubble
Chart.

______________________________________________________________________

### y

• `Optional` **y**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the Y-axis, determining the position of the markers on the y-axis
\- or their radius when using polar coordinates) .
