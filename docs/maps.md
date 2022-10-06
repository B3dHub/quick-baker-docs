# Maps
<p><img :src="$withBase('/img/map.png')" alt='' /></p>

## Add
- Add maps to the active `Bake_Group`.
<p><img :src="$withBase('/img/map_all.png')" alt='' /></p>

### Abledo
<p><img :src="$withBase('/img/albedo.png')" alt='' /></p>

- Suffix `Albedo`

### Alpha
<p><img :src="$withBase('/img/alpha.png')" alt='' /></p>

- Suffix `Alpha`

### AO
<p><img :src="$withBase('/img/ao.png')" alt='' /></p>

- Suffix `AO`
- Sample `1`

### Curvature
<p><img :src="$withBase('/img/curvature.png')" alt='' /></p>

- Suffix `Curvature`

### Emission
<p><img :src="$withBase('/img/emission.png')" alt='' /></p>

- Suffix `Emission`

### Metallic
<p><img :src="$withBase('/img/metallic.png')" alt='' /></p>

- Suffix `Metallic`

### Material ID
<p><img :src="$withBase('/img/material_id.png')" alt='' /></p>

- Suffix `Material ID`

- To bake material id map, it requires vertex color or color attribute named `VertexColor`.
  - Go to edit mode.
  - `Vertex Color` panel will appear.
  <p><img :src="$withBase('/img/vertex_color.png')" alt='' /></p>
  - Select `Verts` or `Faces` to assign color.
  - Click the paint icon to assign color.


### Normal
<p><img :src="$withBase('/img/normal_tangent.png')" alt='' /></p>

- Suffix `Normal`
- Space `['Tangent', 'Object']`
- Type `['OpenGL', 'DirectX', 'Custom']`

### Roughness
<p><img :src="$withBase('/img/roughness.png')" alt='' /></p>

- Suffix `Roughness`

<!-- ### Combined
<p><img :src="$withBase('/img/combined.png')" alt='' /></p>

- Suffix `First letter of the RGBA maps` e.g. `Bake_Group_MRAC` -->

## Preset
<p><img :src="$withBase('/img/map_preset.png')" alt='' /></p>

- Select preset from the dropdown menu.
- Add preset of the maps by pressing `+` operator.
- Remove preset of the maps by pressing `-` operator.

## Remove
- Remove the map by pressing the `x` operator.