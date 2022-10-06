# Workflow

::: warning Requirements
- Add suffix `_high` to high poly object(s), e.g. `Suzanne_high`, `Suzanne_high.001` etc.
:::

- Add the `Bake_Group` by pressing the `+` operator.
<p><img :src="$withBase('/img/bake_group_added.png')" alt='' /></p>

- Add a new `Group` to the active `Bake_Group` by pressing the `+` operator.
<p><img :src="$withBase('/img/group_added.png')" alt='' /></p>

- Add a new high poly object to the active `Group` by pressing the `+` operator.
<p><img :src="$withBase('/img/high_poly_added.png')" alt='' /></p>

- Add a new low poly object to the active `Group` by pressing the `+` operator.
<p><img :src="$withBase('/img/low_poly_added.png')" alt='' /></p>

- Add maps to the active `Bake_Group`.
<p><img :src="$withBase('/img/map_all.png')" alt='' /></p>

- Bake the active `Bake_Group` by pressing the `Bake` operator.
<p><img :src="$withBase('/img/bake_enable.png')" alt='' /></p>

::: danger Note
- High poly object(s) must have a material assigned.
- The material must have a `Principled BSDF` shader.
:::