# Bake Groups
Bake Group is the starting point for the addon to work.
<p><img :src="$withBase('/img/bake_group.png')" alt='' /></p>

### Add
Add a new `BakeGroup` by pressing the `+` operator.
<p><img :src="$withBase('/img/bake_group_add.png')" alt='' /></p>
<p><img :src="$withBase('/img/bake_group_add_all.png')" alt='' /></p>

Create a new bake group from selected objects by holding `SHIFT` and pressing `+` operator.
<p><img :src="$withBase('/gif/bake_group/shift.gif')" alt='' /></p>

Create a high to low poly bake group from selected objects by holding `CTRL` and pressing `+` operator.
<p><img :src="$withBase('/gif/bake_group/ctrl.gif')" alt='' /></p>

Create a high to low poly bake group from selected objects by holding `ALT` and pressing `+` operator.
<p><img :src="$withBase('/gif/bake_group/alt.gif')" alt='' /></p>

::: warning
High poly objects should have `_high` suffix.
If there are multiple high poly objects, then the suffix should be `_high.001`, `_high.002` etc.
:::

### Rename
Rename the active `BakeGroup` by double chick on it.
<p><img :src="$withBase('/img/bake_group_rename.png')" alt='' /></p>

::: tip
`BakeGroup` name will be the name for the baked map(s).
:::

### Remove
Remove the active `BakeGroup` by pressing the `-` operator.
<p><img :src="$withBase('/img/bake_group_remove.png')" alt='' /></p>

Remove all the bake groups by holding `SHIFT` and pressing `-` operator.
<p><img :src="$withBase('/img/bake_group_remove_all.png')" alt='' /></p>