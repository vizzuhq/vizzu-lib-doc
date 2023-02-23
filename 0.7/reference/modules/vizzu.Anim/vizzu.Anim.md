[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](vizzu.md) / Anim

# Namespace: Anim

[vizzu](vizzu.md).Anim

## Interfaces

- [Animation](../interfaces/vizzu.Anim.Animation.md)
- [Completing](../interfaces/vizzu.Anim.Completing.md)
- [Control](../interfaces/vizzu.Anim.Control.md)
- [ControlOptions](../interfaces/vizzu.Anim.ControlOptions.md)
- [GroupOptions](../interfaces/vizzu.Anim.GroupOptions.md)
- [Keyframe](../interfaces/vizzu.Anim.Keyframe.md)
- [Options](../interfaces/vizzu.Anim.Options.md)
- [Target](../interfaces/vizzu.Anim.Target.md)

## Type Aliases

### Duration

Ƭ **Duration**: \`${number}s\` | \`${number}ms\` | `number`

Duration can be set in seconds or milliseconds. In case no unit is set, it
defaults to seconds.

______________________________________________________________________

### Easing

Ƭ **Easing**: `"none"` | `"linear"` | `"step-start"` | `"step-end"` | `"ease"` |
`"ease-in"` | `"ease-out"` | `"ease-in-out"` |
\`cubic-bezier(${number},${number},${number},${number})\`

______________________________________________________________________

### Keyframes

Ƭ **Keyframes**: [`LazyKeyframe`](vizzu.Anim.md#lazykeyframe)\[\]

Sequence of keyframe descriptors

______________________________________________________________________

### LazyKeyframe

Ƭ **LazyKeyframe**: [`Keyframe`](../interfaces/vizzu.Anim.Keyframe.md) |
[`LazyTarget`](vizzu.Anim.md#lazytarget)

Types, that can represent a Keyframe.

______________________________________________________________________

### LazyOptions

Ƭ **LazyOptions**: [`Options`](../interfaces/vizzu.Anim.Options.md) |
[`Duration`](vizzu.Anim.md#duration) | `null`

All types, which can represent an animation option.

______________________________________________________________________

### LazyTarget

Ƭ **LazyTarget**: [`Target`](../interfaces/vizzu.Anim.Target.md) |
[`Chart`](../interfaces/vizzu.Config.Chart.md) |
[`Snapshot`](../interfaces/vizzu.Snapshot.md)

All types, which can represent a single animation target chart state.

______________________________________________________________________

### RegroupStrategy

Ƭ **RegroupStrategy**: `"fade"` | `"drilldown"` | `"aggregate"`

Type of transition when the categorical series differ on the source and the
target chart.

- fade: the source chart fades out while the target chart fades in;
- drilldown: markers are splitted to be able to represent the target chart;
- aggregate: markers are aggregated then splitted differently to be able to
  represent the target chart.
