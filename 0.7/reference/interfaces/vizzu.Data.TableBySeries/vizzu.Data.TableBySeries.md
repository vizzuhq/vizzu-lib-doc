[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Data](../modules/vizzu.Data.md) / TableBySeries

# Interface: TableBySeries

[vizzu](../modules/vizzu.md).[Data](../modules/vizzu.Data.md).TableBySeries

Data table specified by series.

## Hierarchy

- [`Filter`](vizzu.Data.Filter.md)

  ↳ **`TableBySeries`**

## Properties

### filter

• `Optional` **filter**:
[`FilterCallback`](../modules/vizzu.Data.md#filtercallback)

A filter callback is called on each record of the dataset on chart generation.
If the callback returns false, the record will not be shown on the chart.

Inherited from

[Filter](vizzu.Data.Filter.md).[filter](vizzu.Data.Filter.md#filter)

______________________________________________________________________

### series

• **series**: [`Series`](vizzu.Data.Series.md)\[\]

The series that make up the the data set.
