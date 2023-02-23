[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Styles](../modules/vizzu.Styles.md) / OrientedLabel

# Interface: OrientedLabel

[vizzu](../modules/vizzu.md).[Styles](../modules/vizzu.Styles.md).OrientedLabel

## Hierarchy

- [`Label`](../modules/vizzu.Styles.md#label)

  ↳ **`OrientedLabel`**

  ↳↳ [`MarkerLabel`](vizzu.Styles.MarkerLabel.md)

  ↳↳ [`AxisLabel`](vizzu.Styles.AxisLabel.md)

## Properties

### angle

• `Optional` **angle**: [`Angle`](../modules/vizzu.Styles.md#angle)

Additional rotation of the label.

______________________________________________________________________

### backgroundColor

• `Optional` **backgroundColor**: [`Color`](../modules/vizzu.Styles.md#color)

The background color of the displayed text.

Inherited from

Label.backgroundColor

______________________________________________________________________

### color

• `Optional` **color**: [`Color`](../modules/vizzu.Styles.md#color)

The color of the displayed text.

Inherited from

Label.color

______________________________________________________________________

### fontFamily

• `Optional` **fontFamily**: `string`

The family of the font. If not set, it inherits the root style font family.

Inherited from

Label.fontFamily

______________________________________________________________________

### fontSize

• `Optional` **fontSize**: [`Length`](../modules/vizzu.Styles.md#length)

The size of the font. Percentage values are relative to the root style font size

Inherited from

Label.fontSize

______________________________________________________________________

### fontStyle

• `Optional` **fontStyle**: `"normal"` | `"italic"` | `"oblique"`

The style of the font.

Inherited from

Label.fontStyle

______________________________________________________________________

### fontWeight

• `Optional` **fontWeight**: `number` | `"bold"` | `"normal"`

The weight of the font, numbers use the same scale as CSS.

Inherited from

Label.fontWeight

______________________________________________________________________

### maxFractionDigits

• `Optional` **maxFractionDigits**: `number`

The maximum number of digits in fraction part if the text contains a number.

Inherited from

Label.maxFractionDigits

______________________________________________________________________

### numberFormat

• `Optional` **numberFormat**: `"none"` | `"grouped"` | `"prefixed"`

The format of the number. Only applicable for texts showing numerical data such
as marker and axis labels. 'grouped' uses thousand separators, 'prefixed' uses
scientific notation.

Inherited from

Label.numberFormat

______________________________________________________________________

### numberScale

• `Optional` **numberScale**: `string`

Number scale used for prefixed number format.

Inherited from

Label.numberScale

______________________________________________________________________

### orientation

• `Optional` **orientation**: `"normal"` | `"horizontal"` | `"vertical"` |
`"tangential"`

Orientation of the label relatively to the axis or marker it is attached to.

______________________________________________________________________

### paddingBottom

• `Optional` **paddingBottom**: [`Length`](../modules/vizzu.Styles.md#length)

Bottom padding of the element.

Inherited from

Label.paddingBottom

______________________________________________________________________

### paddingLeft

• `Optional` **paddingLeft**: [`Length`](../modules/vizzu.Styles.md#length)

Left padding of the element.

Inherited from

Label.paddingLeft

______________________________________________________________________

### paddingRight

• `Optional` **paddingRight**: [`Length`](../modules/vizzu.Styles.md#length)

Right padding of the element.

Inherited from

Label.paddingRight

______________________________________________________________________

### paddingTop

• `Optional` **paddingTop**: [`Length`](../modules/vizzu.Styles.md#length)

Top padding of the element.

Inherited from

Label.paddingTop

______________________________________________________________________

### textAlign

• `Optional` **textAlign**: `"center"` | `"left"` | `"right"`

The alignment of the displayed text.

Inherited from

Label.textAlign
