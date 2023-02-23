[Vizzu](../README.md) / [Modules](../modules.md) / [vizzu](vizzu.md) / Styles

# Namespace: Styles

[vizzu](vizzu.md).Styles

## Interfaces

- [Axis](../interfaces/vizzu.Styles.Axis.md)
- [AxisLabel](../interfaces/vizzu.Styles.AxisLabel.md)
- [AxisTitle](../interfaces/vizzu.Styles.AxisTitle.md)
- [Box](../interfaces/vizzu.Styles.Box.md)
- [Chart](../interfaces/vizzu.Styles.Chart.md)
- [DataPoint](../interfaces/vizzu.Styles.DataPoint.md)
- [Font](../interfaces/vizzu.Styles.Font.md)
- [Guides](../interfaces/vizzu.Styles.Guides.md)
- [Interlacing](../interfaces/vizzu.Styles.Interlacing.md)
- [Legend](../interfaces/vizzu.Styles.Legend.md)
- [LegendMarker](../interfaces/vizzu.Styles.LegendMarker.md)
- [Logo](../interfaces/vizzu.Styles.Logo.md)
- [Marker](../interfaces/vizzu.Styles.Marker.md)
- [MarkerLabel](../interfaces/vizzu.Styles.MarkerLabel.md)
- [OrientedLabel](../interfaces/vizzu.Styles.OrientedLabel.md)
- [Padding](../interfaces/vizzu.Styles.Padding.md)
- [Plot](../interfaces/vizzu.Styles.Plot.md)
- [Text](../interfaces/vizzu.Styles.Text.md)
- [Ticks](../interfaces/vizzu.Styles.Ticks.md)
- [Tooltip](../interfaces/vizzu.Styles.Tooltip.md)

## Type Aliases

### Angle

Ƭ **Angle**: \`${number}rad\` | \`${number}grad\` | \`${number}deg\` |
\`${number}turn\` | `number`

Angle can be set in radians, degrees, gradians and turns. Radians is the default
unit.

______________________________________________________________________

### Color

Ƭ **Color**: \`#${string}\` | \`rgb(${number},${number},${number})\` |
\`rgba(${number},${number},${number},${number})\`

The following CSS color formats are available: rgb(), rgba(), #RRGGBB,
#RRGGBBAA, #RGB.

______________________________________________________________________

### ColorGradient

Ƭ **ColorGradient**: [`ColorStop`](vizzu.Styles.md#colorstop) |
\`${ColorStop},${ColorStop}\` | \`${ColorStop},${ColorStop},${ColorStop}\` |
\`${ColorStop},${ColorStop},${ColorStop},${ColorStop}\` |
\`${ColorStop},${ColorStop},${ColorStop},${ColorStop},${ColorStop}\` | `string`

Color gradient is specified by a comma separated list of ColorStops. This is
used when a measure is on the color channel.

______________________________________________________________________

### ColorPalette

Ƭ **ColorPalette**: [`Color`](vizzu.Styles.md#color) | \`${Color} ${Color}\` |
\`${Color} ${Color} ${Color}\` | \`${Color} ${Color} ${Color} ${Color}\` |
\`${Color} ${Color} ${Color} ${Color} ${Color}\` | `string`

Color palette is a list of colors separated by spaces. This is used when only
dimensions are on the color channel

______________________________________________________________________

### ColorStop

Ƭ **ColorStop**: \`${Color} ${number}\`

Color and position pairs separated by spaces, where position is a number between
0 and 1.

______________________________________________________________________

### ColorTransform

Ƭ **ColorTransform**: \`color(${Color})\` | \`lightness(${number})\` |
\`grayscale(${number})\` | \`opacity(${number})\` | `"none"`

The following CSS like filters can be used to alter the color:

- color: overrides the color.
- lightness: lightens or darkens the color; 0 means the original color, -1 means
  black, 1 means white.
- grayscale: desaturates the color. 0 means the original color, 1 means fully
  desaturated.

none: no change.

______________________________________________________________________

### Label

Ƭ **Label**: [`Padding`](../interfaces/vizzu.Styles.Padding.md) &
[`Font`](../interfaces/vizzu.Styles.Font.md) &
[`Text`](../interfaces/vizzu.Styles.Text.md)

______________________________________________________________________

### Length

Ƭ **Length**: \`${number}px\` | \`${number}%\` | \`${number}em\` | `number`

Length can be set in pixels or in percentage of the element or the element's
font size. Pixel is the default unit.

______________________________________________________________________

### NumberScale

Ƭ **NumberScale**: `"SISymbol"` | `"shortScaleSymbolUS"` |
`"shortScaleSymbolUK"` | \`${string},${string}\` |
\`${string},${string},${string}\` | \`${string},${string},${string},${string}\`
| \`${string},${string},${string},${string},${string}\` | `string`

Number scale for human readable big number formats. There are built in formats:

- SI Symbols: k, M, G, ...
- Short scale with US abbreviations: K, M, B, T
- Short scale with UK abbreviations: k, m, bn, tn Can be set to custom format
  with a comma separated list of strings e.g:
  'thousand,million,billion,trillion'
