[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Config](../modules/vizzu.Config.md) / Chart

# Interface: Chart

[vizzu](../modules/vizzu.md).[Config](../modules/vizzu.Config.md).Chart

The config contains all of the parameters needed to render a particular static
chart or a state of an animated chart.

## Hierarchy

- [`Channels`](vizzu.Config.Channels.md)

  ↳ **`Chart`**

## Properties

### align

• `Optional` **align**: `"max"` | `"none"` | `"center"` | `"min"` | `"stretch"`

Sets the alignment of the markers with relation to the x- or the y-axis
depending on where the measure is. In case both axes have measures on them, this
is determined by the [orientation](vizzu.Config.Chart.md#orientation) of the
chart.

______________________________________________________________________

### channels

• `Optional` **channels**: [`Channels`](vizzu.Config.Channels.md)

List of the chart's channels' configuration. The chart object also extends the
channels object as a configuration shorthand.

______________________________________________________________________

### color

• `Optional` **color**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the markers' base color. The markers' actual color can also be
affected by the lightness channel.

Inherited from

[Channels](vizzu.Config.Channels.md).[color](vizzu.Config.Channels.md#color)

______________________________________________________________________

### coordSystem

• `Optional` **coordSystem**: `"cartesian"` | `"polar"`

Sets the coordinate system for the chart. Switch to the 'polar' coordinate
system to create a chart from the pie/radial chart family.

______________________________________________________________________

### geometry

• `Optional` **geometry**: `"area"` | `"circle"` | `"line"` | `"rectangle"`

Sets the geometric elements used for the markers to represent the data.

______________________________________________________________________

### label

• `Optional` **label**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the content of the labels that appear on the markers.

Inherited from

[Channels](vizzu.Config.Channels.md).[label](vizzu.Config.Channels.md#label)

______________________________________________________________________

### legend

• `Optional` **legend**: `"auto"` | `"color"` | `"size"` | `"lightness"`

Specifies which channel should be shown on the legend. If set to null, the
legend will not be shown and will not take up any space in the chart layout. If
set to auto, the internal logic will select the most suitable channel for the
legend.

______________________________________________________________________

### lightness

• `Optional` **lightness**: [`SeriesList`](../modules/vizzu.Data.md#serieslist)
| [`Channel`](vizzu.Config.Channel.md)

Parameters for markers' lightness.

Inherited from

[Channels](vizzu.Config.Channels.md).[lightness](vizzu.Config.Channels.md#lightness)

______________________________________________________________________

### noop

• `Optional` **noop**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Splits the markers as all the other channels, but have no effect on the markers'
appearance. Thus, it only works with dimensions.

Inherited from

[Channels](vizzu.Config.Channels.md).[noop](vizzu.Config.Channels.md#noop)

______________________________________________________________________

### orientation

• `Optional` **orientation**: `"horizontal"` | `"vertical"`

If both axes have measures on them, this parameter sets the orientation of the
chart, meaning to which axis the graphical elements are oriented to.

______________________________________________________________________

### reverse

• `Optional` **reverse**: `boolean`

Reverts the order of the markers if set.

______________________________________________________________________

### rotate

• `Optional` **rotate**: `number`

Rotates the plot area by the specified angle in degree. Note: this is an
experimental, not tested feature.

______________________________________________________________________

### size

• `Optional` **size**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the markers' size. Effective only for circle and line geometry
affecting the circle area or the line width respectively.

Inherited from

[Channels](vizzu.Config.Channels.md).[size](vizzu.Config.Channels.md#size)

______________________________________________________________________

### sort

• `Optional` **sort**: `"none"` | `"byValue"`

- 'none': markers are sorted in the order as the corresponding data appear in
  the data set.
- 'byValue': markers will be sorted by the corresponding measure (if present) in
  decreasing order.

______________________________________________________________________

### split

• `Optional` **split**: `boolean`

If set to true, markers will be split by the dimension(s) along the axis. This
works if you have at least one dimension and a measure on the same axis.In case
both axes have measures and dimension(s) on them, this is determined by the
[orientation](vizzu.Config.Chart.md#orientation) of the chart.

______________________________________________________________________

### title

• `Optional` **title**: `string`

This is the title shown on the top of the chart. If set to null, the title will
not be shown and will not take up any space in the chart layout.

______________________________________________________________________

### x

• `Optional` **x**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the X-axis, determining the position of the markers on the x-axis
\- or their angle when using polar coordinates. Note: leaving x and y channels
empty will result in a chart "without coordinates" like a Treemap or a Bubble
Chart.

Inherited from

[Channels](vizzu.Config.Channels.md).[x](vizzu.Config.Channels.md#x)

______________________________________________________________________

### y

• `Optional` **y**: [`SeriesList`](../modules/vizzu.Data.md#serieslist) |
[`Channel`](vizzu.Config.Channel.md)

Parameters for the Y-axis, determining the position of the markers on the y-axis
\- or their radius when using polar coordinates) .

Inherited from

[Channels](vizzu.Config.Channels.md).[y](vizzu.Config.Channels.md#y)
