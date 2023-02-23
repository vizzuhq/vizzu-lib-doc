[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Data](../modules/vizzu.Data.md) / Filter

# Interface: Filter

[vizzu](../modules/vizzu.md).[Data](../modules/vizzu.Data.md).Filter

## Hierarchy

- **`Filter`**

  ↳ [`TableBySeries`](vizzu.Data.TableBySeries.md)

  ↳ [`TableByRecords`](vizzu.Data.TableByRecords.md)

  ↳ [`Cube`](vizzu.Data.Cube.md)

## Properties

### filter

• `Optional` **filter**:
[`FilterCallback`](../modules/vizzu.Data.md#filtercallback)

A filter callback is called on each record of the dataset on chart generation.
If the callback returns false, the record will not be shown on the chart.
