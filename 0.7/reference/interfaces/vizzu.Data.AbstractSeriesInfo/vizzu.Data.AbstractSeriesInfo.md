[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Data](../modules/vizzu.Data.md) / AbstractSeriesInfo

# Interface: AbstractSeriesInfo

[vizzu](../modules/vizzu.md).[Data](../modules/vizzu.Data.md).AbstractSeriesInfo

Additional info about a data series besides the contained data.

## Hierarchy

- [`SeriesMetaInfo`](vizzu.Data.SeriesMetaInfo.md)

  ↳ **`AbstractSeriesInfo`**

  ↳↳ [`DimensionSeriesInfo`](vizzu.Data.DimensionSeriesInfo.md)

  ↳↳ [`MeasureSeriesInfo`](vizzu.Data.MeasureSeriesInfo.md)

## Properties

### length

• **length**: `number`

Count of values in the series.

______________________________________________________________________

### name

• **name**: `string`

Name of the data series. It will be the unique id of the series to reference it
in various parts of the API, mainly in [Channel](vizzu.Config.Channel.md) and
[Record](vizzu.Data.Record.md). This name will also be used by default for Axis
and Legend title.

Inherited from

[SeriesMetaInfo](vizzu.Data.SeriesMetaInfo.md).[name](vizzu.Data.SeriesMetaInfo.md#name)

______________________________________________________________________

### type

• `Optional` **type**: `"dimension"` | `"measure"`

Type of the data series:

- 'dimension' - categorical data containing strings (dates should also be added
  as strings);
- 'measure' - continuous data containing numbers. If not set, the library will
  attempt to determine the type based on the type of the first value. Number
  type will result in measure, string type will result in dimension.

Inherited from

[SeriesMetaInfo](vizzu.Data.SeriesMetaInfo.md).[type](vizzu.Data.SeriesMetaInfo.md#type)

______________________________________________________________________

### unit

• `Optional` **unit**: `string`

Unit of the data series

Inherited from

[SeriesMetaInfo](vizzu.Data.SeriesMetaInfo.md).[unit](vizzu.Data.SeriesMetaInfo.md#unit)
