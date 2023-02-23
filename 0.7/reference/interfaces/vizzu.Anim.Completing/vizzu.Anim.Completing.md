[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Anim](../modules/vizzu.Anim.md) / Completing

# Interface: Completing

[vizzu](../modules/vizzu.md).[Anim](../modules/vizzu.Anim.md).Completing

Promise resolves to the Vizzu object when the animation completed.

## Hierarchy

- `Promise`\<[`Vizzu`](../classes/vizzu.Vizzu.md)>

  ↳ **`Completing`**

## Properties

### \[toStringTag\]

• `Readonly` **\[toStringTag\]**: `string`

Inherited from

Promise.\_\_@toStringTag@23

______________________________________________________________________

### activated

• **activated**: `Promise`\<[`Control`](vizzu.Anim.Control.md)>

Promise resolves to the animation controller object when the animation starts.

## Methods

### catch

▸ **catch**\<`TResult`>(`onrejected?`):
`Promise`\<[`Vizzu`](../classes/vizzu.Vizzu.md) | `TResult`>

Attaches a callback for only the rejection of the Promise.

Type parameters

| Name      | Type    |
| :-------- | :------ |
| `TResult` | `never` |

Parameters

| Name          | Type                                                        | Description                                           |
| :------------ | :---------------------------------------------------------- | :---------------------------------------------------- |
| `onrejected?` | (`reason`: `any`) => `TResult` \| `PromiseLike`\<`TResult`> | The callback to execute when the Promise is rejected. |

Returns

`Promise`\<[`Vizzu`](../classes/vizzu.Vizzu.md) | `TResult`>

A Promise for the completion of the callback.

Inherited from

Promise.catch

______________________________________________________________________

### finally

▸ **finally**(`onfinally?`): `Promise`\<[`Vizzu`](../classes/vizzu.Vizzu.md)>

Attaches a callback that is invoked when the Promise is settled (fulfilled or
rejected). The resolved value cannot be modified from the callback.

Parameters

| Name         | Type         | Description                                                                  |
| :----------- | :----------- | :--------------------------------------------------------------------------- |
| `onfinally?` | () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

Returns

`Promise`\<[`Vizzu`](../classes/vizzu.Vizzu.md)>

A Promise for the completion of the callback.

Inherited from

Promise.finally

______________________________________________________________________

### then

▸ **then**\<`TResult1`, `TResult2`>(`onfulfilled?`, `onrejected?`):
`Promise`\<`TResult1` | `TResult2`>

Attaches callbacks for the resolution and/or rejection of the Promise.

Type parameters

| Name       | Type                                 |
| :--------- | :----------------------------------- |
| `TResult1` | [`Vizzu`](../classes/vizzu.Vizzu.md) |
| `TResult2` | `never`                              |

Parameters

| Name           | Type                                                                                        | Description                                           |
| :------------- | :------------------------------------------------------------------------------------------ | :---------------------------------------------------- |
| `onfulfilled?` | (`value`: [`Vizzu`](../classes/vizzu.Vizzu.md)) => `TResult1` \| `PromiseLike`\<`TResult1`> | The callback to execute when the Promise is resolved. |
| `onrejected?`  | (`reason`: `any`) => `TResult2` \| `PromiseLike`\<`TResult2`>                               | The callback to execute when the Promise is rejected. |

Returns

`Promise`\<`TResult1` | `TResult2`>

A Promise for the completion of which ever callback is executed.

Inherited from

Promise.then
