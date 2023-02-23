[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](vizzu.md) / Data

# Namespace: Data

[vizzu](vizzu.md).Data

## Interfaces

- [AbstractSeriesInfo](../interfaces/vizzu.Data.AbstractSeriesInfo.md)
- [Cube](../interfaces/vizzu.Data.Cube.md)
- [CubeData](../interfaces/vizzu.Data.CubeData.md)
- [DimensionSeriesInfo](../interfaces/vizzu.Data.DimensionSeriesInfo.md)
- [Filter](../interfaces/vizzu.Data.Filter.md)
- [MeasureSeriesInfo](../interfaces/vizzu.Data.MeasureSeriesInfo.md)
- [Metainfo](../interfaces/vizzu.Data.Metainfo.md)
- [Record](../interfaces/vizzu.Data.Record.md)
- [Series](../interfaces/vizzu.Data.Series.md)
- [SeriesMetaInfo](../interfaces/vizzu.Data.SeriesMetaInfo.md)
- [TableByRecords](../interfaces/vizzu.Data.TableByRecords.md)
- [TableBySeries](../interfaces/vizzu.Data.TableBySeries.md)

## Type Aliases

### CubeRow

Ƭ **CubeRow**: [`Values`](vizzu.Data.md#values) |
[`CubeRow`](vizzu.Data.md#cuberow)\[\]

______________________________________________________________________

### FilterCallback

Ƭ **FilterCallback**: (`record`: [`Record`](../interfaces/vizzu.Data.Record.md))
=> `boolean`

Type declaration

▸ (`record`): `boolean`

Parameters

| Name     | Type                                           |
| :------- | :--------------------------------------------- |
| `record` | [`Record`](../interfaces/vizzu.Data.Record.md) |

Returns

`boolean`

______________________________________________________________________

### SeriesInfo

Ƭ **SeriesInfo**:
[`DimensionSeriesInfo`](../interfaces/vizzu.Data.DimensionSeriesInfo.md) |
[`MeasureSeriesInfo`](../interfaces/vizzu.Data.MeasureSeriesInfo.md)

______________________________________________________________________

### SeriesList

Ƭ **SeriesList**: `string`\[\] | `string`

______________________________________________________________________

### Set

Ƭ **Set**: [`TableBySeries`](../interfaces/vizzu.Data.TableBySeries.md) |
[`TableByRecords`](../interfaces/vizzu.Data.TableByRecords.md) |
[`Cube`](../interfaces/vizzu.Data.Cube.md)

Data set is a collection of related
[data series](../interfaces/vizzu.Data.Series.md). Each chart works on a single
data set.

______________________________________________________________________

### Value

Ƭ **Value**: `string` | `number`

Represents a categorical or data value

______________________________________________________________________

### Values

Ƭ **Values**: `string`\[\] | `number`\[\]

List of data values in a series.
