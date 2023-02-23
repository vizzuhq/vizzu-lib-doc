[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Anim](../modules/vizzu.Anim.md) / Target

# Interface: Target

[vizzu](../modules/vizzu.md).[Anim](../modules/vizzu.Anim.md).Target

Represents a state in the animation describing the data, the chart, and the
style parameters to be changed from the actual state. Passing null as style will
reset every style parameter to default.

## Properties

### config

• `Optional` **config**: [`Chart`](vizzu.Config.Chart.md)

Chart configuration changes.

______________________________________________________________________

### data

• `Optional` **data**: [`Set`](../modules/vizzu.Data.md#set)

Data set.

______________________________________________________________________

### style

• `Optional` **style**: [`Chart`](vizzu.Styles.Chart.md)

Style changes.
