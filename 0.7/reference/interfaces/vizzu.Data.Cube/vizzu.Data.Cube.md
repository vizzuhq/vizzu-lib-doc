[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Data](../modules/vizzu.Data.md) / Cube

# Interface: Cube

[vizzu](../modules/vizzu.md).[Data](../modules/vizzu.Data.md).Cube

N dimensional data cude

## Hierarchy

- [`Filter`](vizzu.Data.Filter.md)

  ↳ **`Cube`**

## Properties

### dimensions

• `Optional` **dimensions**: [`Series`](vizzu.Data.Series.md)\[\]

The list of the dimensions of the data cube.

______________________________________________________________________

### filter

• `Optional` **filter**:
[`FilterCallback`](../modules/vizzu.Data.md#filtercallback)

A filter callback is called on each record of the dataset on chart generation.
If the callback returns false, the record will not be shown on the chart.

Inherited from

[Filter](vizzu.Data.Filter.md).[filter](vizzu.Data.Filter.md#filter)

______________________________________________________________________

### measures

• `Optional` **measures**: [`CubeData`](vizzu.Data.CubeData.md)\[\]

The list of measures of the data cube.
