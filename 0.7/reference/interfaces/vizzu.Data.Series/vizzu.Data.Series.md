[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Data](../modules/vizzu.Data.md) / Series

# Interface: Series

[vizzu](../modules/vizzu.md).[Data](../modules/vizzu.Data.md).Series

Defines a data series of the data set, and contains a particular variable's
values in the data set and meta info about the variable.

## Hierarchy

- [`SeriesMetaInfo`](vizzu.Data.SeriesMetaInfo.md)

  ↳ **`Series`**

## Properties

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

______________________________________________________________________

### values

• **values**: [`Values`](../modules/vizzu.Data.md#values)

The array that contains the values of the data series. The value types should
match [type](vizzu.Data.SeriesMetaInfo.md#type). If the data series is shorter
than the longest data series defined, it will be internally extended with empty
values.
