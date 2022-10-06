# Bake
<p><img :src="$withBase('/img/bake_enable.png')" alt='' /></p>

### Path
Output path for baked maps.
::: warning
- `Bake` operator will get disabled if `Groups`, `High Poly`, `Low Poly` or `Objects` and `Maps` are not available.
:::

### Sub Folder
Create a sub folder for baked maps.
::: warning
- `Bake_Group` name will be the name for the sub folder.
:::

### Size
Texture Size.
- Enum `['512', '1024', '2048', '4096', '8192']`
- Default `1024`

### Format
File format to save the rendered images as.
- Enum `['PNG', 'JPEG', 'Targa', 'TIFF', 'OpenEXR', 'WebP']`
- Default `PNG`

### Color Depth
Bit depth per channels.
- Enum `['8', '16', '32']`
- Default `8`

### Compression
Amount of time to determine best compression: 0 = no compression with fast file output, 100 = maximum lossless compression with show file output.
- Slider `0 - 100` %
- Default `15` %

### Quality
Quality for image formats that support lossy compression.
- Slider `0 - 100` %
- Default `90` %

### Margin
Extends the baked results as a post process filter.
- Slider `0 - ∞` px
- Soft max `64` px
- Default `8` px