[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Anim](../modules/vizzu.Anim.md) / Options

# Interface: Options

[vizzu](../modules/vizzu.md).[Anim](../modules/vizzu.Anim.md).Options

If no animation settings are passed to Vizzu, it will use an automatic setting
depending on the actual configuration of the chart. This behavior can be
overridden via the animation setting parameter.

The animation between two states of the chart can require the transitioning of
several different chart properties. These properties are grouped into separately
configurable animation groups.

The parameters can also be set for the animation as a whole. These settings
rescale the durations and delays of the animation groups to the specified total
delay and duration.

## Hierarchy

- [`GroupOptions`](vizzu.Anim.GroupOptions.md)

  ↳ **`Options`**

## Properties

### color

• `Optional` **color**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Marker color animation group.

______________________________________________________________________

### coordSystem

• `Optional` **coordSystem**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Coordinate system transformations animation group.

______________________________________________________________________

### delay

• `Optional` **delay**: [`Duration`](../modules/vizzu.Anim.md#duration)

Waiting time interval before the animation starts.

Inherited from

[GroupOptions](vizzu.Anim.GroupOptions.md).[delay](vizzu.Anim.GroupOptions.md#delay)

______________________________________________________________________

### duration

• `Optional` **duration**: [`Duration`](../modules/vizzu.Anim.md#duration)

The length of time an animation should take to complete.

Inherited from

[GroupOptions](vizzu.Anim.GroupOptions.md).[duration](vizzu.Anim.GroupOptions.md#duration)

______________________________________________________________________

### easing

• `Optional` **easing**: [`Easing`](../modules/vizzu.Anim.md#easing)

Sets the easing used for the animation.

Inherited from

[GroupOptions](vizzu.Anim.GroupOptions.md).[easing](vizzu.Anim.GroupOptions.md#easing)

______________________________________________________________________

### geometry

• `Optional` **geometry**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Marker geometry morph animation group.

______________________________________________________________________

### hide

• `Optional` **hide**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Animation group for markers fading out (due to filtering or added/removed data
series).

______________________________________________________________________

### legend

• `Optional` **legend**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Legend animation parameters.

______________________________________________________________________

### regroupStrategy

• `Optional` **regroupStrategy**:
[`RegroupStrategy`](../modules/vizzu.Anim.md#regroupstrategy)

Selects the algorithm for transition in case of data grouped differently on the
source and target chart.

______________________________________________________________________

### show

• `Optional` **show**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Animation group for new markers fading in (due to filtering or added/removed
data series).

______________________________________________________________________

### style

• `Optional` **style**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Animation group for style parameters.

______________________________________________________________________

### title

• `Optional` **title**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Title animation parameters.

______________________________________________________________________

### tooltip

• `Optional` **tooltip**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Animation group for tooltip transitions.

______________________________________________________________________

### x

• `Optional` **x**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Animation group for marker transitions in the direction of the x-axis.

______________________________________________________________________

### y

• `Optional` **y**: [`GroupOptions`](vizzu.Anim.GroupOptions.md)

Animation group for marker transitions in the direction of the y-axis.
