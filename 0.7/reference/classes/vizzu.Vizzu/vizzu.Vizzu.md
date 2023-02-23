[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ Vizzu

# Class: Vizzu

[vizzu](../modules/vizzu.md).Vizzu

Class representing a single chart in Vizzu.

## Constructors

### constructor

• **new Vizzu**(`container`, `initState?`)

Creates a new chart and connects it to the div or canvas HTML element specified
by its ID or DOM object. The new chart is empty by default, but can be set to an
initial state in the second optional parameter.

Parameters

| Name         | Type                                                                                             |
| :----------- | :----------------------------------------------------------------------------------------------- |
| `container`  | `string` \| `HTMLElement`                                                                        |
| `initState?` | [`Chart`](../interfaces/vizzu.Config.Chart.md) \| [`Target`](../interfaces/vizzu.Anim.Target.md) |

## Properties

### config

• **config**: `Readonly`\<[`Chart`](../interfaces/vizzu.Config.Chart.md)>

Property for read-only access to chart parameter object.

______________________________________________________________________

### data

• **data**: `Readonly`\<[`Metainfo`](../interfaces/vizzu.Data.Metainfo.md)>

Property for read-only access to data metainfo object.

______________________________________________________________________

### initializing

• **initializing**: `Promise`\<[`Vizzu`](vizzu.Vizzu.md)>

Promise representing the initialization will resolve when initialization is
finished. Any API call will potentially cause an error before this promise is
resolved.

______________________________________________________________________

### style

• **style**: `Readonly`\<[`Chart`](../interfaces/vizzu.Styles.Chart.md)>

Property for read-only access to style object without default values.

## Accessors

### animation

• `get` **animation**(): [`Control`](../interfaces/vizzu.Anim.Control.md)

Returns controls for the ongoing animation, if any.

**`Deprecated`**

since version 0.4.0

Returns

[`Control`](../interfaces/vizzu.Anim.Control.md)

______________________________________________________________________

### presets

• `Static` `get` **presets**(): [`Preset`](../interfaces/presets.Preset.md)

Returns the chart preset collection.

Returns

[`Preset`](../interfaces/presets.Preset.md)

## Methods

### animate

▸ **animate**(`animTarget`, `animOptions?`):
[`Completing`](../interfaces/vizzu.Anim.Completing.md)

Initiates the animation either to the new chart state passed as the first
argument, or through a sequence of keyframe charts passed as the first argument.
If there is a currently running animation, all subsequent calls will schedule
the corresponding animation after the end of the previous one.

The new chart state or keyframe can be a full state specifier object with data,
config and style, or a single chart config object. It accepts also a chart
snapshot acquired from a previous state using the store() method of this class
or a whole previous animation acquired using the store() method of the
Anim.Control object, which can be queried from the promise returned by the
animate() method.

The optional second parameter specifies the animation control options and also
all the other animation options in case of only a single chart state passed as
the first argument. This second option can be a scalar value, setting the
overall animation duration. Passing explicit null as second parameter will
result in no animation.

The method returns a promise, which will resolve when the animation is finished.
Since there can be multiple animations in the queue, the result promise provides
a nested promise member
[activated](../interfaces/vizzu.Anim.Completing.md#activated), which resolves
when the requested animation gets active.

Parameters

| Name           | Type                                                                                                                                                             |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animTarget`   | [`Animation`](../interfaces/vizzu.Anim.Animation.md) \| [`LazyTarget`](../modules/vizzu.Anim.md#lazytarget) \| [`Keyframes`](../modules/vizzu.Anim.md#keyframes) |
| `animOptions?` | [`ControlOptions`](../interfaces/vizzu.Anim.ControlOptions.md) \| `Object`                                                                                       |

Returns

[`Completing`](../interfaces/vizzu.Anim.Completing.md)

______________________________________________________________________

### detach

▸ **detach**(): `void`

Removes the reference of the chart from every place it attached itself, this
method must be called in order to get the chart properly garbage collected.

Returns

`void`

______________________________________________________________________

### feature

▸ **feature**(`name`, `enabled`): `void`

Enable/disable additional features.

Parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `name`    | [`Feature`](../modules/vizzu.md#feature) |
| `enabled` | `boolean`                                |

Returns

`void`

______________________________________________________________________

### getComputedStyle

▸ **getComputedStyle**():
`Readonly`\<[`Chart`](../interfaces/vizzu.Styles.Chart.md)>

Property for read-only access to the style object after setting defaults.

Returns

`Readonly`\<[`Chart`](../interfaces/vizzu.Styles.Chart.md)>

______________________________________________________________________

### off

▸ **off**(`eventName`, `handler`): `void`

Uninstalls the provided event handler from the event specified by name.

Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `eventName` | [`Type`](../modules/vizzu.Event.md#type)                             |
| `handler`   | (`event`: [`Object`](../interfaces/vizzu.Event.Object.md)) => `void` |

Returns

`void`

______________________________________________________________________

### on

▸ **on**(`eventName`, `handler`): `void`

Installs the provided event handler to the event specified by name.

Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `eventName` | [`Type`](../modules/vizzu.Event.md#type)                             |
| `handler`   | (`event`: [`Object`](../interfaces/vizzu.Event.Object.md)) => `void` |

Returns

`void`

______________________________________________________________________

### store

▸ **store**(): [`Snapshot`](../interfaces/vizzu.Snapshot.md)

Returns a reference to the actual chart state for further reuse. This reference
includes the chart config, style parameters and the data filter but does not
include the actual data and the animation options.

Returns

[`Snapshot`](../interfaces/vizzu.Snapshot.md)

______________________________________________________________________

### version

▸ **version**(): `string`

Returns the version number of the library.

Returns

`string`

______________________________________________________________________

### options

▸ `Static` **options**(`options`): `void`

Setter method for Library options.

Parameters

| Name      | Type                                            |
| :-------- | :---------------------------------------------- |
| `options` | [`Options`](../interfaces/vizzu.Lib.Options.md) |

Returns

`void`
