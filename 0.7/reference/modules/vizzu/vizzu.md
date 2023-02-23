[Vizzu](../README.md) / [Modules](../modules.md) / vizzu

# Module: vizzu

## Namespaces

- [Anim](vizzu.Anim.md)
- [Config](vizzu.Config.md)
- [Data](vizzu.Data.md)
- [Event](vizzu.Event.md)
- [Lib](vizzu.Lib.md)
- [Styles](vizzu.Styles.md)

## Classes

- [Vizzu](../classes/vizzu.Vizzu.md)

## Interfaces

- [Snapshot](../interfaces/vizzu.Snapshot.md)

## Type Aliases

### Feature

Ƭ **Feature**: `"tooltip"` | `"logging"` | `"rendering"`

List of base and additional features:

- logging: enables logging of the library to the console (switched off by
  default).
- rendering: enables rendering of the library to the canvas (enabled by
  default).
- tooltip: tooltips on the chart appearing on markers on mouse over. Since the
  tooltip uses the animation interface, calling animate() while the tooltip is
  enabled can cause unwanted behaviour.
