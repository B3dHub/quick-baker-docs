import{_ as s,p as i,q as n,R as e,t as o,a1 as t}from"./framework-96b046e1.js";const d={},a=e("h1",{id:"groups",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#groups","aria-hidden":"true"},"#"),o(" Groups")],-1),c=e("p",null,"Group is a container for high and low poly objects.",-1),r=["src"],h=e("h3",{id:"add",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#add","aria-hidden":"true"},"#"),o(" Add")],-1),u=e("p",null,[o("Add a new "),e("code",null,"Group"),o(" to the active "),e("code",null,"BakeGroup"),o(" by pressing the "),e("code",null,"+"),o(" operator.")],-1),p=["src"],g=["src"],_=e("p",null,[o("Add a new "),e("code",null,"Group"),o(" from selected objects based on suffix by holding "),e("code",null,"SHIFT"),o(" and pressing "),e("code",null,"+"),o(" operator.")],-1),m=["src"],f=e("p",null,[o("Add a new "),e("code",null,"Group"),o(" from selected objects by holding "),e("code",null,"CTRL"),o(" and pressing "),e("code",null,"+"),o(" operator.")],-1),b=["src"],y=e("h3",{id:"load",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#load","aria-hidden":"true"},"#"),o(" Load")],-1),w=e("p",null,[o("Load group of high and low poly objects by pressing "),e("code",null,"Load"),o(" operator.")],-1),v=["src"],B=["src"],$=e("h3",{id:"select",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#select","aria-hidden":"true"},"#"),o(" Select")],-1),j=e("p",null,"Select a group from the dropdown menu.",-1),G=["src"],R=["src"],T=e("h3",{id:"remove",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remove","aria-hidden":"true"},"#"),o(" Remove")],-1),A=e("p",null,[o("Remove the active "),e("code",null,"Group"),o(" by pressing the "),e("code",null,"-"),o(" operator.")],-1),I=["src"],S=e("p",null,[o("Remove all the groups by holding "),e("code",null,"SHIFT"),o(" and pressing "),e("code",null,"-"),o(" operator.")],-1),H=["src"],L=e("hr",null,null,-1),F=e("h2",{id:"high-poly",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#high-poly","aria-hidden":"true"},"#"),o(" High Poly")],-1),x=["src"],N=t('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><ul><li>High poly objects should have <code>_high</code> suffix.</li><li>If there are multiple high poly objects, then the suffix should be <code>_high.001</code>, <code>_high.002</code> etc.</li></ul></div><h3 id="add-1" tabindex="-1"><a class="header-anchor" href="#add-1" aria-hidden="true">#</a> Add</h3><p>Add a new high poly object to the active <code>Group</code> by pressing the <code>+</code> operator.</p><ul><li>Select the high poly object</li></ul>',4),k=["src"],P=e("p",null,[o("Add selected objects to the active "),e("code",null,"Group"),o(" by holding "),e("code",null,"SHIFT"),o(" and pressing "),e("code",null,"+"),o(" operator.")],-1),D=["src"],E=e("h3",{id:"remove-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remove-1","aria-hidden":"true"},"#"),o(" Remove")],-1),M=e("p",null,[o("Remove the high poly object from the active "),e("code",null,"Group"),o(" by pressing the "),e("code",null,"-"),o(" operator.")],-1),V=["src"],q=e("p",null,[o("Remove all the high poly objects from the active "),e("code",null,"Group"),o(" by holding "),e("code",null,"SHIFT"),o(" and pressing "),e("code",null,"-"),o(" operator.")],-1),C=["src"],z=e("hr",null,null,-1),W=e("h2",{id:"low-poly",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#low-poly","aria-hidden":"true"},"#"),o(" Low Poly")],-1),J=["src"],K=t('<div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>Low poly object doesn&#39;t require <code>_low</code> suffix.</li></ul></div><h3 id="add-2" tabindex="-1"><a class="header-anchor" href="#add-2" aria-hidden="true">#</a> Add</h3><p>Add a new low poly object to the active <code>Group</code> by pressing the <code>+</code> operator.</p><ul><li>Select the low poly object</li></ul>',4),O=["src"],Q=e("p",null,[o("Add selected objects to the active "),e("code",null,"Group"),o(" by holding "),e("code",null,"SHIFT"),o(" and pressing "),e("code",null,"+"),o(" operator.")],-1),U=["src"],X=e("h3",{id:"remove-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remove-2","aria-hidden":"true"},"#"),o(" Remove")],-1),Y=e("p",null,[o("Remove the low poly object from the active "),e("code",null,"Group"),o(" by pressing the "),e("code",null,"-"),o(" operator.")],-1),Z=["src"],ee=e("p",null,[o("Remove all the low poly objects from the active "),e("code",null,"Group"),o(" by holding "),e("code",null,"SHIFT"),o(" and pressing "),e("code",null,"-"),o(" operator.")],-1),oe=["src"],le=e("hr",null,null,-1),te=e("h2",{id:"cage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cage","aria-hidden":"true"},"#"),o(" Cage")],-1),se=["src"],ie=e("h3",{id:"extrusion",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extrusion","aria-hidden":"true"},"#"),o(" Extrusion")],-1),ne=e("p",null,"Inflate the cage object by the specified distance for baking. This helps matching to points nearer to the outside of the high poly objects meshes.",-1),de=e("ul",null,[e("li",null,[o("Min "),e("code",null,"0.0")]),e("li",null,[o("Default "),e("code",null,"0.10")])],-1),ae=["src"],ce=t('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Extrude multiple cage objects by holding <code>ALT</code></p></div><h3 id="ray-distance" tabindex="-1"><a class="header-anchor" href="#ray-distance" aria-hidden="true">#</a> Ray Distance</h3><p>The maximum ray distance for matching points between the low poly and high poly objects, If zero, there is no limit.</p><ul><li>Min <code>0 m</code></li><li>Max <code>1 m</code></li><li>Default <code>0 m</code></li></ul>',4);function re(l,he){return i(),n("div",null,[a,c,e("p",null,[e("img",{src:l.$withBase("/img/group.png"),alt:""},null,8,r)]),h,u,e("p",null,[e("img",{src:l.$withBase("/img/group_add.png"),alt:""},null,8,p)]),e("p",null,[e("img",{src:l.$withBase("/img/group_add_all.png"),alt:""},null,8,g)]),_,e("p",null,[e("img",{src:l.$withBase("/gif/group/shift.gif"),alt:""},null,8,m)]),f,e("p",null,[e("img",{src:l.$withBase("/gif/group/ctrl.gif"),alt:""},null,8,b)]),y,w,e("p",null,[e("img",{src:l.$withBase("/img/group_load.png"),alt:""},null,8,v)]),e("p",null,[e("img",{src:l.$withBase("/gif/group/load.gif"),alt:""},null,8,B)]),$,j,e("p",null,[e("img",{src:l.$withBase("/img/group_select.png"),alt:""},null,8,G)]),e("p",null,[e("img",{src:l.$withBase("/gif/group/select.gif"),alt:""},null,8,R)]),T,A,e("p",null,[e("img",{src:l.$withBase("/img/group_remove.png"),alt:""},null,8,I)]),S,e("p",null,[e("img",{src:l.$withBase("/img/group_remove_all.png"),alt:""},null,8,H)]),L,F,e("p",null,[e("img",{src:l.$withBase("/img/high_poly.png"),alt:""},null,8,x)]),N,e("p",null,[e("img",{src:l.$withBase("/img/high_poly_add.png"),alt:""},null,8,k)]),P,e("p",null,[e("img",{src:l.$withBase("/img/high_poly_add_all.png"),alt:""},null,8,D)]),E,M,e("p",null,[e("img",{src:l.$withBase("/img/high_poly_remove.png"),alt:""},null,8,V)]),q,e("p",null,[e("img",{src:l.$withBase("/img/high_poly_remove_all.png"),alt:""},null,8,C)]),z,W,e("p",null,[e("img",{src:l.$withBase("/img/low_poly.png"),alt:""},null,8,J)]),K,e("p",null,[e("img",{src:l.$withBase("/img/low_poly_add.png"),alt:""},null,8,O)]),Q,e("p",null,[e("img",{src:l.$withBase("/img/low_poly_add_all.png"),alt:""},null,8,U)]),X,Y,e("p",null,[e("img",{src:l.$withBase("/img/low_poly_remove.png"),alt:""},null,8,Z)]),ee,e("p",null,[e("img",{src:l.$withBase("/img/low_poly_remove_all.png"),alt:""},null,8,oe)]),le,te,e("p",null,[e("img",{src:l.$withBase("/img/cage.png"),alt:""},null,8,se)]),ie,ne,de,e("p",null,[e("img",{src:l.$withBase("/gif/cage.gif"),alt:""},null,8,ae)]),ce])}const pe=s(d,[["render",re],["__file","groups.html.vue"]]);export{pe as default};