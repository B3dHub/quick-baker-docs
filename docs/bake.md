# Bake
<p><img :src="$withBase('/img/bake.png')" alt='' /></p>

## Path

### Add
Add path by pressing the `+` operator.
<p><img :src="$withBase('/img/folder_add.png')" alt='' /></p>

### Rename

Rename the active `Path` by double chick on it.
<p><img :src="$withBase('/img/folder_rename.png')" alt='' /></p>

### Load
Load child folder from the path by pressing `Load` operator.
<p><img :src="$withBase('/img/folder_load.png')" alt='' /></p>

### Remove
Remove the active `Path` by pressing the `-` operator.
<p><img :src="$withBase('/img/folder_remove.png')" alt='' /></p>

Remove all the paths by holding `SHIFT` and pressing `-` operator.
<p><img :src="$withBase('/img/folder_remove_all.png')" alt='' /></p>

## UDIM
Auto UDIM bake based on UV grid.
<p><img :src="$withBase('/gif/udim_bake.gif')" alt='' /></p>

## Node
Bake the selected shader node in node editor.
<p><img :src="$withBase('/img/node_bake.png')" alt='' /></p>
<p><img :src="$withBase('/gif/node_bake.gif')" alt='' /></p>

Replace selected node with baked result by holding `SHIFT` and pressing `Bake` operator.
<p><img :src="$withBase('/img/node_bake_replace.png')" alt='' /></p>
<p><img :src="$withBase('/gif/node_bake_shift.gif')" alt='' /></p>


::: warning
- `Bake` operator will get disabled if `Groups`, `High Poly`, `Low Poly` or `Objects` and `Maps` are not available.
- `BakeGroup` name will be the name for the sub folder.
:::