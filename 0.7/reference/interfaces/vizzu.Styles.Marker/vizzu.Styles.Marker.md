[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](../modules/vizzu.md)
/ [Styles](../modules/vizzu.Styles.md) / Marker

# Interface: Marker

[vizzu](../modules/vizzu.md).[Styles](../modules/vizzu.Styles.md).Marker

## Hierarchy

- [`DataPoint`](vizzu.Styles.DataPoint.md)

  ↳ **`Marker`**

## Properties

### borderOpacity

• `Optional` **borderOpacity**: `number`

Opacity of the marker border.

______________________________________________________________________

### borderOpacityMode

• `Optional` **borderOpacityMode**: `"straight"` | `"premultiplied"`

______________________________________________________________________

### borderWidth

• `Optional` **borderWidth**: `number`

Width of the marker border in pixels.

______________________________________________________________________

### circleMaxRadius

• `Optional` **circleMaxRadius**: `number`

Maximum circle radius specified as proportion of plot area size. e.g.: 0.01
means 1% of the width of the plot area.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[circleMaxRadius](vizzu.Styles.DataPoint.md#circlemaxradius)

______________________________________________________________________

### circleMinRadius

• `Optional` **circleMinRadius**: `number`

Minimum circle radius specified as proportion of plot area size. e.g.: 0.01
means 1% of the width of the plot area.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[circleMinRadius](vizzu.Styles.DataPoint.md#circleminradius)

______________________________________________________________________

### colorGradient

• `Optional` **colorGradient**: `string`

Color gradient used for the measure on the color channel.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[colorGradient](vizzu.Styles.DataPoint.md#colorgradient)

______________________________________________________________________

### colorPalette

• `Optional` **colorPalette**: `string`

Color palette used for the dimension on the color channel.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[colorPalette](vizzu.Styles.DataPoint.md#colorpalette)

______________________________________________________________________

### fillOpacity

• `Optional` **fillOpacity**: `number`

Opacity of the marker fill color.

______________________________________________________________________

### guides

• `Optional` **guides**: [`Guides`](vizzu.Styles.Guides.md)

Style settings for guide lines drawn for the markers.

______________________________________________________________________

### label

• `Optional` **label**: [`MarkerLabel`](vizzu.Styles.MarkerLabel.md)

Style settings for the marker labels.

______________________________________________________________________

### lineMaxWidth

• `Optional` **lineMaxWidth**: `number`

Maximum line width specified as proportion of plot area size. e.g.: 0.01 means
1% of the width of the plot area.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[lineMaxWidth](vizzu.Styles.DataPoint.md#linemaxwidth)

______________________________________________________________________

### lineMinWidth

• `Optional` **lineMinWidth**: `number`

Minimum of line width specified as proportion of plot area size. e.g.: 0.01
means 1% of the width of the plot area.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[lineMinWidth](vizzu.Styles.DataPoint.md#lineminwidth)

______________________________________________________________________

### maxLightness

• `Optional` **maxLightness**: `number`

Lightness value associated with the maximum value of the lightness channel's
range.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[maxLightness](vizzu.Styles.DataPoint.md#maxlightness)

______________________________________________________________________

### minLightness

• `Optional` **minLightness**: `number`

Lightness value associated with the minimum value of the lightness channel's
range.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[minLightness](vizzu.Styles.DataPoint.md#minlightness)

______________________________________________________________________

### rectangleSpacing

• `Optional` **rectangleSpacing**: `number`

Spacing between bars/columns. The value specifies the size of the spacing as a
factor of the marker size. e.g.: 0.1 means 10% of marker height/width depending
on the chart's orientation.

Inherited from

[DataPoint](vizzu.Styles.DataPoint.md).[rectangleSpacing](vizzu.Styles.DataPoint.md#rectanglespacing)
