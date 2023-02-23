[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Data](../modules/vizzu.Data.md) / TableByRecords

# Interface: TableByRecords

[vizzu](../modules/vizzu.md).[Data](../modules/vizzu.Data.md).TableByRecords

Data table specified by records.

## Hierarchy

- [`Filter`](vizzu.Data.Filter.md)

  ↳ **`TableByRecords`**

## Properties

### filter

• `Optional` **filter**:
[`FilterCallback`](../modules/vizzu.Data.md#filtercallback)

A filter callback is called on each record of the dataset on chart generation.
If the callback returns false, the record will not be shown on the chart.

Inherited from

[Filter](vizzu.Data.Filter.md).[filter](vizzu.Data.Filter.md#filter)

______________________________________________________________________

### records

• **records**: [`Value`](../modules/vizzu.Data.md#value)\[\]\[\]

The array of data records that make up the data set.

______________________________________________________________________

### series

• `Optional` **series**: [`SeriesMetaInfo`](vizzu.Data.SeriesMetaInfo.md)\[\]

The information about the data series in the records of the data set. Note: not
needed if it was previously specified.
