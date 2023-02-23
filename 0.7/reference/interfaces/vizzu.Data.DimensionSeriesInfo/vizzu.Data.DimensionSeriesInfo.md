[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Data](../modules/vizzu.Data.md) / DimensionSeriesInfo

# Interface: DimensionSeriesInfo

[vizzu](../modules/vizzu.md).[Data](../modules/vizzu.Data.md).DimensionSeriesInfo

Meta data about dimension data series

## Hierarchy

- [`AbstractSeriesInfo`](vizzu.Data.AbstractSeriesInfo.md)

  ↳ **`DimensionSeriesInfo`**

## Properties

### categories

• **categories**: `string`\[\]

Distinct values in the series

______________________________________________________________________

### length

• **length**: `number`

Count of values in the series.

Inherited from

[AbstractSeriesInfo](vizzu.Data.AbstractSeriesInfo.md).[length](vizzu.Data.AbstractSeriesInfo.md#length)

______________________________________________________________________

### name

• **name**: `string`

Name of the data series. It will be the unique id of the series to reference it
in various parts of the API, mainly in [Channel](vizzu.Config.Channel.md) and
[Record](vizzu.Data.Record.md). This name will also be used by default for Axis
and Legend title.

Inherited from

[AbstractSeriesInfo](vizzu.Data.AbstractSeriesInfo.md).[name](vizzu.Data.AbstractSeriesInfo.md#name)

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

[AbstractSeriesInfo](vizzu.Data.AbstractSeriesInfo.md).[type](vizzu.Data.AbstractSeriesInfo.md#type)

______________________________________________________________________

### unit

• `Optional` **unit**: `string`

Unit of the data series

Inherited from

[AbstractSeriesInfo](vizzu.Data.AbstractSeriesInfo.md).[unit](vizzu.Data.AbstractSeriesInfo.md#unit)
