# Workflow

## Object Bake

Add the `BakeGroup` by pressing the `+` operator.
<p><img :src="$withBase('/img/bake_group_add.png')" alt='' /></p>

Add a new `Object` to the active `BakeGroup` by pressing the `+` operator.
- Select the object(s).
<p><img :src="$withBase('/img/object_add.png')" alt='' /></p>

Add maps to the active `BakeGroup`.
<p><img :src="$withBase('/img/map_add.png')" alt='' /></p>

Bake the active `BakeGroup` by pressing the `Bake` operator.
<p><img :src="$withBase('/img/bake.png')" alt='' /></p>

::: warning
- Object(s) must have a material assigned.
- The material must have a `Principled BSDF` shader.
:::

## High to Low Poly Bake

::: tip
Add suffix `_high` to high poly object(s), e.g. `Suzanne_high`, `Suzanne_high.001` etc.
:::

Add the `BakeGroup` by pressing the `+` operator.
<p><img :src="$withBase('/img/bake_group_add.png')" alt='' /></p>

Add a new `Group` to the active `BakeGroup` by pressing the `+` operator.
<p><img :src="$withBase('/img/group_add.png')" alt='' /></p>

Add a new high poly object to the active `Group` by pressing the `+` operator.
- Select the high poly object.
<p><img :src="$withBase('/img/high_poly_add.png')" alt='' /></p>

Add a new low poly object to the active `Group` by pressing the `+` operator.
- Select the low poly object.
<p><img :src="$withBase('/img/low_poly_add.png')" alt='' /></p>

Add maps to the active `BakeGroup`.
<p><img :src="$withBase('/img/map_add.png')" alt='' /></p>

Bake the active `BakeGroup` by pressing the `Bake` operator.
<p><img :src="$withBase('/img/bake.png')" alt='' /></p>

::: warning
- High poly object(s) must have a material assigned.
- The material must have a `Principled BSDF` shader.
:::