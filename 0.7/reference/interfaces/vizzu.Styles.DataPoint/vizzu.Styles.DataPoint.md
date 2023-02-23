[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Styles](../modules/vizzu.Styles.md) / DataPoint

# Interface: DataPoint

[vizzu](../modules/vizzu.md).[Styles](../modules/vizzu.Styles.md).DataPoint

## Hierarchy

- **`DataPoint`**

  ↳ [`Marker`](vizzu.Styles.Marker.md)

## Properties

### circleMaxRadius

• `Optional` **circleMaxRadius**: `number`

Maximum circle radius specified as proportion of plot area size. e.g.: 0.01
means 1% of the width of the plot area.

______________________________________________________________________

### circleMinRadius

• `Optional` **circleMinRadius**: `number`

Minimum circle radius specified as proportion of plot area size. e.g.: 0.01
means 1% of the width of the plot area.

______________________________________________________________________

### colorGradient

• `Optional` **colorGradient**: `string`

Color gradient used for the measure on the color channel.

______________________________________________________________________

### colorPalette

• `Optional` **colorPalette**: `string`

Color palette used for the dimension on the color channel.

______________________________________________________________________

### lineMaxWidth

• `Optional` **lineMaxWidth**: `number`

Maximum line width specified as proportion of plot area size. e.g.: 0.01 means
1% of the width of the plot area.

______________________________________________________________________

### lineMinWidth

• `Optional` **lineMinWidth**: `number`

Minimum of line width specified as proportion of plot area size. e.g.: 0.01
means 1% of the width of the plot area.

______________________________________________________________________

### maxLightness

• `Optional` **maxLightness**: `number`

Lightness value associated with the maximum value of the lightness channel's
range.

______________________________________________________________________

### minLightness

• `Optional` **minLightness**: `number`

Lightness value associated with the minimum value of the lightness channel's
range.

______________________________________________________________________

### rectangleSpacing

• `Optional` **rectangleSpacing**: `number`

Spacing between bars/columns. The value specifies the size of the spacing as a
factor of the marker size. e.g.: 0.1 means 10% of marker height/width depending
on the chart's orientation.
