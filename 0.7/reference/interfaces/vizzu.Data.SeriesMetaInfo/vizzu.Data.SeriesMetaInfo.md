[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Data](../modules/vizzu.Data.md) / SeriesMetaInfo

# Interface: SeriesMetaInfo

[vizzu](../modules/vizzu.md).[Data](../modules/vizzu.Data.md).SeriesMetaInfo

Additional info about a data series besides the contained data.

## Hierarchy

- **`SeriesMetaInfo`**

  ↳ [`AbstractSeriesInfo`](vizzu.Data.AbstractSeriesInfo.md)

  ↳ [`Series`](vizzu.Data.Series.md)

  ↳ [`CubeData`](vizzu.Data.CubeData.md)

## Properties

### name

• **name**: `string`

Name of the data series. It will be the unique id of the series to reference it
in various parts of the API, mainly in [Channel](vizzu.Config.Channel.md) and
[Record](vizzu.Data.Record.md). This name will also be used by default for Axis
and Legend title.

______________________________________________________________________

### type

• `Optional` **type**: `"dimension"` | `"measure"`

Type of the data series:

- 'dimension' - categorical data containing strings (dates should also be added
  as strings);
- 'measure' - continuous data containing numbers. If not set, the library will
  attempt to determine the type based on the type of the first value. Number
  type will result in measure, string type will result in dimension.

______________________________________________________________________

### unit

• `Optional` **unit**: `string`

Unit of the data series
