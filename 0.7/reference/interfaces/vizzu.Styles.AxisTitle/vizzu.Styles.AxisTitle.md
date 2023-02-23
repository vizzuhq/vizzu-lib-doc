[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Styles](../modules/vizzu.Styles.md) / AxisTitle

# Interface: AxisTitle

[vizzu](../modules/vizzu.md).[Styles](../modules/vizzu.Styles.md).AxisTitle

Style settings of the [Axis title](vizzu.Config.Channel.md#title)

## Hierarchy

- [`Label`](../modules/vizzu.Styles.md#label)

  ↳ **`AxisTitle`**

## Properties

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

• `Optional` **orientation**: `"horizontal"` | `"vertical"`

The orientation of the title.

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

### position

• `Optional` **position**: `"axis"` | `"max-edge"` | `"min-edge"`

Title position relatively to the plot.

______________________________________________________________________

### side

• `Optional` **side**: `"positive"` | `"negative"` | `"upon"`

Title alignment relatively to the position on the plot.

______________________________________________________________________

### textAlign

• `Optional` **textAlign**: `"center"` | `"left"` | `"right"`

The alignment of the displayed text.

Inherited from

Label.textAlign

______________________________________________________________________

### vposition

• `Optional` **vposition**: `"end"` | `"middle"` | `"begin"`

Title position on the axis or edge.

______________________________________________________________________

### vside

• `Optional` **vside**: `"positive"` | `"negative"` | `"upon"`

Title alignment on the axis or edge.
