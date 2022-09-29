# Groups
<p><img :src="$withBase('/img/bake_group_groups.png')" alt='' /></p>

### Add
- Add a new `Group` to the active `Bake_Group` by pressing the `+` operator.
<p><img :src="$withBase('/img/group_added.png')" alt='' /></p>
- Create a new `Group` to the active `Bake_Group` from selected objects by holding `SHIFT` and pressing `+` operator.

### Remove
- Remove the active `Group` by pressing the `-` operator.
- Remove all the groups by holding `SHIFT` and pressing `-` operator.

### Load
- Load group of high and low poly objects by pressing `Reload` operator.

### Select
- Select a group from the dropdown menu.

---

## High Poly
<p><img :src="$withBase('/img/high_poly.png')" alt='' /></p>

::: warning
- High poly objects should have `_high` suffix.
- If there are multiple high poly objects, then the suffix should be `_high.001`, `_high.002` etc.
:::

### Add
- Add a new high poly object to the active `Group` by pressing the `+` operator.
<p><img :src="$withBase('/img/high_poly_added.png')" alt='' /></p>
- Add selected objects to the active `Group` by holding `SHIFT` and pressing `+` operator.

### Remove
- Remove the high poly object from the active `Group` by pressing the `-` operator.
- Remove all the high poly objects from the active `Group` by holding `SHIFT` and pressing `-` operator.

---

## Low Poly
<p><img :src="$withBase('/img/low_poly.png')" alt='' /></p>

::: tip
- Low poly object doesn't require `_low` suffix.
:::

### Add
- Add a new low poly object to the active `Group` by pressing the `+` operator.
<p><img :src="$withBase('/img/low_poly_added.png')" alt='' /></p>
- Add selected objects to the active `Group` by holding `SHIFT` and pressing `+` operator.

### Remove
- Remove the low poly object from the active `Group` by pressing the `-` operator.
- Remove all the low poly objects from the active `Group` by holding `SHIFT` and pressing `-` operator.

---

## Cage
<p><img :src="$withBase('/img/cage.png')" alt='' /></p>

Cage is available when `Cage` is enabled.
- `Cage` enable, it creates cage object based on the low poly object.
- `Cage` disable, it removes the cage object of the low poly object.

### Extrusion
Inflate the cage object by the specified distance for baking. This helps matching to points nearer to the outside of the high poly objects meshes.
- Min `0.0`
- Max `0.50`
- Default `0.10`

### Ray Distance
The maximum ray distance for matching points between the low poly and high poly objects, If zero, there is no limit.
- Min `0 m`
- Max `1 m`
- Default `0 m`