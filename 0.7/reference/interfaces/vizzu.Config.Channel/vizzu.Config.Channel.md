[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Config](../modules/vizzu.Config.md) / Channel

# Interface: Channel

[vizzu](../modules/vizzu.md).[Config](../modules/vizzu.Config.md).Channel

Channels are the main building blocks of the chart. Each channel describes a
particular aspect of the markers (vertical & horizontal position, color, etc.)
and connects them to the underlying data. A single measure and an ordered list
of dimensions can be on each channel. The dimensions will recursively slice the
measure on the channel. The channels are represented on the chart as an axis or
legend.

## Properties

### attach

• `Optional` **attach**: [`SeriesList`](../modules/vizzu.Data.md#serieslist)

List of [data series names](vizzu.Data.Series.md#name) to be added to the
channel beside the ones already added.

______________________________________________________________________

### axis

• `Optional` **axis**: `boolean` | `"auto"`

Enables the axis line on axis channels.

______________________________________________________________________

### detach

• `Optional` **detach**: [`SeriesList`](../modules/vizzu.Data.md#serieslist)

List of [data series names](vizzu.Data.Series.md#name) to be removed from the
channel.

______________________________________________________________________

### guides

• `Optional` **guides**: `boolean` | `"auto"`

Enables the grid lines on axis channels showing dimension data.

______________________________________________________________________

### interlacing

• `Optional` **interlacing**: `boolean` | `"auto"`

Enables the interlacing on axis channels showing measure data.

______________________________________________________________________

### labelLevel

• `Optional` **labelLevel**: `number`

Only one dimension can be shown on an axis or legend by name. This index
specifies which attached series should be used.

______________________________________________________________________

### labels

• `Optional` **labels**: `boolean` | `"auto"`

Enables the axis labels on axis channels.

______________________________________________________________________

### markerGuides

• `Optional` **markerGuides**: `boolean` | `"auto"`

Enables the guide lines on axis channels showing measure data for all marker
positions.

______________________________________________________________________

### range

• `Optional` **range**: [`ChannelRange`](vizzu.Config.ChannelRange.md)

Specifies the range that determines how the represented data scales on the
channel.

______________________________________________________________________

### set

• `Optional` **set**: [`SeriesList`](../modules/vizzu.Data.md#serieslist)

List of [data series names](vizzu.Data.Series.md#name) on the channel.

______________________________________________________________________

### ticks

• `Optional` **ticks**: `boolean` | `"auto"`

Enables the axis ticks on axis channels showing measure data.

______________________________________________________________________

### title

• `Optional` **title**: `string`

This title is shown on the axis or legend corresponding to the channel. If
'auto', the title will be the name of the measure attached to that channel.
