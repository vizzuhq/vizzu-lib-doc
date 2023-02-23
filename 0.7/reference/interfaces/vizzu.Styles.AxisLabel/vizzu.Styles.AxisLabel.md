[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Styles](../modules/vizzu.Styles.md) / AxisLabel

# Interface: AxisLabel

[vizzu](../modules/vizzu.md).[Styles](../modules/vizzu.Styles.md).AxisLabel

Style settings for the values shown on the axis to display the scale being used
or the categories along the axis. Note: textAlign has no effect on the Axis
label.

## Hierarchy

- [`OrientedLabel`](vizzu.Styles.OrientedLabel.md)

  ↳ **`AxisLabel`**

## Properties

### angle

• `Optional` **angle**: [`Angle`](../modules/vizzu.Styles.md#angle)

Additional rotation of the label.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[angle](vizzu.Styles.OrientedLabel.md#angle)

______________________________________________________________________

### backgroundColor

• `Optional` **backgroundColor**: [`Color`](../modules/vizzu.Styles.md#color)

The background color of the displayed text.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[backgroundColor](vizzu.Styles.OrientedLabel.md#backgroundcolor)

______________________________________________________________________

### color

• `Optional` **color**: [`Color`](../modules/vizzu.Styles.md#color)

The color of the displayed text.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[color](vizzu.Styles.OrientedLabel.md#color)

______________________________________________________________________

### fontFamily

• `Optional` **fontFamily**: `string`

The family of the font. If not set, it inherits the root style font family.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[fontFamily](vizzu.Styles.OrientedLabel.md#fontfamily)

______________________________________________________________________

### fontSize

• `Optional` **fontSize**: [`Length`](../modules/vizzu.Styles.md#length)

The size of the font. Percentage values are relative to the root style font size

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[fontSize](vizzu.Styles.OrientedLabel.md#fontsize)

______________________________________________________________________

### fontStyle

• `Optional` **fontStyle**: `"normal"` | `"italic"` | `"oblique"`

The style of the font.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[fontStyle](vizzu.Styles.OrientedLabel.md#fontstyle)

______________________________________________________________________

### fontWeight

• `Optional` **fontWeight**: `number` | `"bold"` | `"normal"`

The weight of the font, numbers use the same scale as CSS.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[fontWeight](vizzu.Styles.OrientedLabel.md#fontweight)

______________________________________________________________________

### maxFractionDigits

• `Optional` **maxFractionDigits**: `number`

The maximum number of digits in fraction part if the text contains a number.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[maxFractionDigits](vizzu.Styles.OrientedLabel.md#maxfractiondigits)

______________________________________________________________________

### numberFormat

• `Optional` **numberFormat**: `"none"` | `"grouped"` | `"prefixed"`

The format of the number. Only applicable for texts showing numerical data such
as marker and axis labels. 'grouped' uses thousand separators, 'prefixed' uses
scientific notation.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[numberFormat](vizzu.Styles.OrientedLabel.md#numberformat)

______________________________________________________________________

### numberScale

• `Optional` **numberScale**: `string`

Number scale used for prefixed number format.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[numberScale](vizzu.Styles.OrientedLabel.md#numberscale)

______________________________________________________________________

### orientation

• `Optional` **orientation**: `"normal"` | `"horizontal"` | `"vertical"` |
`"tangential"`

Orientation of the label relatively to the axis or marker it is attached to.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[orientation](vizzu.Styles.OrientedLabel.md#orientation)

______________________________________________________________________

### paddingBottom

• `Optional` **paddingBottom**: [`Length`](../modules/vizzu.Styles.md#length)

Bottom padding of the element.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[paddingBottom](vizzu.Styles.OrientedLabel.md#paddingbottom)

______________________________________________________________________

### paddingLeft

• `Optional` **paddingLeft**: [`Length`](../modules/vizzu.Styles.md#length)

Left padding of the element.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[paddingLeft](vizzu.Styles.OrientedLabel.md#paddingleft)

______________________________________________________________________

### paddingRight

• `Optional` **paddingRight**: [`Length`](../modules/vizzu.Styles.md#length)

Right padding of the element.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[paddingRight](vizzu.Styles.OrientedLabel.md#paddingright)

______________________________________________________________________

### paddingTop

• `Optional` **paddingTop**: [`Length`](../modules/vizzu.Styles.md#length)

Top padding of the element.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[paddingTop](vizzu.Styles.OrientedLabel.md#paddingtop)

______________________________________________________________________

### position

• `Optional` **position**: `"axis"` | `"max-edge"` | `"min-edge"`

Label position relatively to the plot.

______________________________________________________________________

### side

• `Optional` **side**: `"positive"` | `"negative"`

Label alignment relatively to the position on the plot.

______________________________________________________________________

### textAlign

• `Optional` **textAlign**: `"center"` | `"left"` | `"right"`

The alignment of the displayed text.

Inherited from

[OrientedLabel](vizzu.Styles.OrientedLabel.md).[textAlign](vizzu.Styles.OrientedLabel.md#textalign)
