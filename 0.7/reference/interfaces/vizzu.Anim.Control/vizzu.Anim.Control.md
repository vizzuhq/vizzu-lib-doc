[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Anim](../modules/vizzu.Anim.md) / Control

# Interface: Control

[vizzu](../modules/vizzu.md).[Anim](../modules/vizzu.Anim.md).Control

Control object for animation.

## Methods

### cancel

▸ **cancel**(): `void`

Cancels the animation, will reject the animation promise.

Returns

`void`

______________________________________________________________________

### pause

▸ **pause**(): `void`

Pauses the controlled animation.

Returns

`void`

______________________________________________________________________

### play

▸ **play**(): `void`

Plays/resumes playing of the controlled animation.

Returns

`void`

______________________________________________________________________

### reverse

▸ **reverse**(): `void`

Changes the direction of the controlled animation.

Returns

`void`

______________________________________________________________________

### seek

▸ **seek**(`value`): `void`

Seeks the animation to the position specified by time or progress percentage.
Seeking the animation to the end position will not trigger the (@link
Vizzu.animate|animation promise) to resolve.

Parameters

| Name    | Type                                                              |
| :------ | :---------------------------------------------------------------- |
| `value` | \`${number}%\` \| [`Duration`](../modules/vizzu.Anim.md#duration) |

Returns

`void`

______________________________________________________________________

### stop

▸ **stop**(): `void`

Stops the current animation seeking it back to its start position.

Returns

`void`

______________________________________________________________________

### store

▸ **store**(): [`Animation`](vizzu.Anim.Animation.md)

Returns a reference to the actual animation for further reuse.

Returns

[`Animation`](vizzu.Anim.Animation.md)
