# Bake Groups
Bake Group is the starting point for the addon to work.
<p><img :src="$withBase('/img/bake_group.png')" alt='' /></p>

### Add
- Add a new `Bake_Group` by pressing the `+` operator.
<p><img :src="$withBase('/img/bake_group_added.png')" alt='' /></p>

- Create a new bake group from selected objects by holding `SHIFT` and pressing `+` operator.

::: warning
- High poly objects should have `_high` suffix.
- If there are multiple high poly objects, then the suffix should be `_high.001`, `_high.002` etc.
:::

### Rename
- Rename the active `Bake_Group` by double chick on it.
<p><img :src="$withBase('/img/bake_group_rename.png')" alt='' /></p>

::: warning
- `Bake_Group` name will be the name for the baked map(s).
:::

### Remove
- Remove the active `Bake_Group` by pressing the `-` operator.
- Remove all the bake groups by holding `SHIFT` and pressing `-` operator.