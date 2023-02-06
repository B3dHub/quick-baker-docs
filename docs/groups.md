# Groups
Group is a container for high and low poly objects.
<p><img :src="$withBase('/img/group.png')" alt='' /></p>

### Add

Add a new `Group` to the active `BakeGroup` by pressing the `+` operator.
<p><img :src="$withBase('/img/group_add.png')" alt='' /></p>
<p><img :src="$withBase('/img/group_add_all.png')" alt='' /></p>

Add a new `Group` from selected objects based on suffix by holding `SHIFT` and pressing `+` operator.
<p><img :src="$withBase('/gif/group/shift.gif')" alt='' /></p>

Add a new `Group` from selected objects by holding `CTRL` and pressing `+` operator.
<p><img :src="$withBase('/gif/group/ctrl.gif')" alt='' /></p>

### Load
Load group of high and low poly objects by pressing `Load` operator.
<p><img :src="$withBase('/img/group_load.png')" alt='' /></p>
<p><img :src="$withBase('/gif/group/load.gif')" alt='' /></p>

### Select
Select a group from the dropdown menu.
<p><img :src="$withBase('/img/group_select.png')" alt='' /></p>
<p><img :src="$withBase('/gif/group/select.gif')" alt='' /></p>

### Remove
Remove the active `Group` by pressing the `-` operator.
<p><img :src="$withBase('/img/group_remove.png')" alt='' /></p>

Remove all the groups by holding `SHIFT` and pressing `-` operator.
<p><img :src="$withBase('/img/group_remove_all.png')" alt='' /></p>

---

## High Poly
<p><img :src="$withBase('/img/high_poly.png')" alt='' /></p>

::: warning
- High poly objects should have `_high` suffix.
- If there are multiple high poly objects, then the suffix should be `_high.001`, `_high.002` etc.
:::

### Add
Add a new high poly object to the active `Group` by pressing the `+` operator.
- Select the high poly object
<p><img :src="$withBase('/img/high_poly_add.png')" alt='' /></p>

Add selected objects to the active `Group` by holding `SHIFT` and pressing `+` operator.
<p><img :src="$withBase('/img/high_poly_add_all.png')" alt='' /></p>

### Remove
Remove the high poly object from the active `Group` by pressing the `-` operator.
<p><img :src="$withBase('/img/high_poly_remove.png')" alt='' /></p>

Remove all the high poly objects from the active `Group` by holding `SHIFT` and pressing `-` operator.
<p><img :src="$withBase('/img/high_poly_remove_all.png')" alt='' /></p>

---

## Low Poly
<p><img :src="$withBase('/img/low_poly.png')" alt='' /></p>

::: tip
- Low poly object doesn't require `_low` suffix.
:::

### Add
Add a new low poly object to the active `Group` by pressing the `+` operator.
- Select the low poly object
<p><img :src="$withBase('/img/low_poly_add.png')" alt='' /></p>

Add selected objects to the active `Group` by holding `SHIFT` and pressing `+` operator.
<p><img :src="$withBase('/img/low_poly_add_all.png')" alt='' /></p>

### Remove
Remove the low poly object from the active `Group` by pressing the `-` operator.
<p><img :src="$withBase('/img/low_poly_remove.png')" alt='' /></p>

Remove all the low poly objects from the active `Group` by holding `SHIFT` and pressing `-` operator.
<p><img :src="$withBase('/img/low_poly_remove_all.png')" alt='' /></p>

---

## Cage
<p><img :src="$withBase('/img/cage.png')" alt='' /></p>

### Extrusion
Inflate the cage object by the specified distance for baking. This helps matching to points nearer to the outside of the high poly objects meshes.
- Min `0.0`
- Default `0.10`
<p><img :src="$withBase('/gif/cage.gif')" alt='' /></p>

::: tip
Extrude multiple cage objects by holding `ALT`
:::

### Ray Distance
The maximum ray distance for matching points between the low poly and high poly objects, If zero, there is no limit.
- Min `0 m`
- Max `1 m`
- Default `0 m`