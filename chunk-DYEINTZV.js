import{a as P,b as O}from"./chunk-QWOTK7Q6.js";import{d as _}from"./chunk-TO2APWLA.js";import{Ab as i,Fb as g,Ib as C,Jb as d,Kb as y,Ua as a,cb as m,eb as b,fa as p,fb as f,lb as t,mb as l,nb as v,sc as M,tc as u,zb as c}from"./chunk-JOCWNNNL.js";var k=(n,o)=>[n,o],x=(()=>{let o=class o{constructor(){this.color="blue",this.type="outlined-bg"}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=p({type:o,selectors:[["app-category-icon"]],hostVars:5,hostBindings:function(e,r){e&2&&f(C(2,k,r.type,r.color))},inputs:{icon:"icon",color:"color",type:"type"},standalone:!0,features:[g],decls:2,vars:1,template:function(e,r){e&1&&(t(0,"mat-icon"),c(1),l()),e&2&&(a(1),i(r.icon))},dependencies:[u,O,P],styles:["[_nghost-%COMP%]{display:inline-flex;padding:4px;justify-content:center;align-items:center;gap:4px;border-radius:50px;width:48px;height:48px}.transparent.red[_nghost-%COMP%]{color:var(--colors-redprimary)}.transparent.orange[_nghost-%COMP%]{color:var(--colors-orangeprimary)}.transparent.yellow[_nghost-%COMP%]{color:var(--colors-yellowprimary)}.transparent.green[_nghost-%COMP%]{color:var(--colors-greenprimary)}.transparent.cyan[_nghost-%COMP%]{color:var(--colors-cyan)}.transparent.blue[_nghost-%COMP%]{color:var(--colors-blueprimary)}.transparent.purple[_nghost-%COMP%]{color:var(--colors-purpleprimary)}.transparent.gray[_nghost-%COMP%]{color:var(--colors-grayprimary)}.filled.red[_nghost-%COMP%]{color:#fff;background:var(--colors-redprimary)}.filled.orange[_nghost-%COMP%]{color:#fff;background:var(--colors-orangeprimary)}.filled.yellow[_nghost-%COMP%]{color:#fff;background:var(--colors-yellowprimary)}.filled.green[_nghost-%COMP%]{color:#fff;background:var(--colors-greenprimary)}.filled.cyan[_nghost-%COMP%]{color:#fff;background:var(--colors-cyan)}.filled.blue[_nghost-%COMP%]{color:#fff;background:var(--colors-blueprimary)}.filled.purple[_nghost-%COMP%]{color:#fff;background:var(--colors-purpleprimary)}.filled.gray[_nghost-%COMP%]{color:#fff;background:var(--colors-grayprimary)}.outlined.red[_nghost-%COMP%]{color:var(--colors-redprimary);border:1px solid var(--colors-redprimary);background:transparent}.outlined.orange[_nghost-%COMP%]{color:var(--colors-orangeprimary);border:1px solid var(--colors-orangeprimary);background:transparent}.outlined.yellow[_nghost-%COMP%]{color:var(--colors-yellowprimary);border:1px solid var(--colors-yellowprimary);background:transparent}.outlined.green[_nghost-%COMP%]{color:var(--colors-greenprimary);border:1px solid var(--colors-greenprimary);background:transparent}.outlined.cyan[_nghost-%COMP%]{color:var(--colors-cyan);border:1px solid var(--colors-cyan);background:transparent}.outlined.blue[_nghost-%COMP%]{color:var(--colors-blueprimary);border:1px solid var(--colors-blueprimary);background:transparent}.outlined.purple[_nghost-%COMP%]{color:var(--colors-purpleprimary);border:1px solid var(--colors-purpleprimary);background:transparent}.outlined.gray[_nghost-%COMP%]{color:var(--colors-grayprimary);border:1px solid var(--colors-grayprimary);background:transparent}.outlined-bg.red[_nghost-%COMP%]{color:var(--colors-redprimary);border:1px solid var(--colors-redprimary);background:var(--colors-redtransparent)}.outlined-bg.orange[_nghost-%COMP%]{color:var(--colors-orangeprimary);border:1px solid var(--colors-orangeprimary);background:var(--colors-orangetransparent)}.outlined-bg.yellow[_nghost-%COMP%]{color:var(--colors-yellowprimary);border:1px solid var(--colors-yellowprimary);background:var(--colors-yellowtransparent)}.outlined-bg.green[_nghost-%COMP%]{color:var(--colors-greenprimary);border:1px solid var(--colors-greenprimary);background:var(--colors-greentransparent)}.outlined-bg.cyan[_nghost-%COMP%]{color:var(--colors-cyan);border:1px solid var(--colors-cyan);background:var(--colors-cyantransparent)}.outlined-bg.blue[_nghost-%COMP%]{color:var(--colors-blueprimary);border:1px solid var(--colors-blueprimary);background:var(--colors-bluetransparent)}.outlined-bg.purple[_nghost-%COMP%]{color:var(--colors-purpleprimary);border:1px solid var(--colors-purpleprimary);background:var(--colors-purpletransparent)}.outlined-bg.gray[_nghost-%COMP%]{color:var(--colors-grayprimary);border:1px solid var(--colors-grayprimary);background:var(--colors-graytransparent)}"]});let n=o;return n})();var T=(()=>{let o=class o{constructor(){}humanizeCategory(s){return _(s)}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=p({type:o,selectors:[["app-category-item"]],inputs:{category:"category"},standalone:!0,features:[g],decls:24,vars:18,consts:[[1,"category"],[3,"color","icon"],[1,"category-details"],[1,"category-row"],[1,"category-name"],[1,"category-left-over"],[1,"left-over"],[3,"max","value"],[1,"category-progress"],[1,"budget-spent"],[1,"budget-total"],[1,"category-actions"]],template:function(e,r){e&1&&(t(0,"div",0),v(1,"app-category-icon",1),t(2,"div",2)(3,"div",3)(4,"div",4),c(5),l(),t(6,"div",5)(7,"div",6),c(8),d(9,"currency"),l()()(),v(10,"progress",7),t(11,"div",3)(12,"div",8)(13,"div",9),c(14),d(15,"currency"),l(),t(16,"span"),c(17,"/"),l(),t(18,"div",10),c(19),d(20,"currency"),l()(),t(21,"div",11)(22,"p"),c(23,"Edit"),l()()()()()),e&2&&(a(1),m("color",r.category.color)("icon",r.category.icon),a(4),i(r.humanizeCategory(r.category.category)),a(3),i(y(9,12,r.category.budgetRemaining)),a(2),b("warn",r.category.budgetPercent>=.8)("over",r.category.budgetPercent>=1),m("max",r.category.budgetTotal)("value",r.category.budgetSpent),a(4),i(y(15,14,r.category.budgetSpent)),a(5),i(y(20,16,r.category.budgetTotal)))},dependencies:[u,M,x],styles:[".category[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 auto;gap:16px;padding:16px;background-color:var(--elevated-bg-color);border-left:1px solid var(--border-color);border-right:1px solid var(--border-color);align-items:start;justify-content:center}.category[_ngcontent-%COMP%]   .category-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;gap:8px}.category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.category[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.category[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]{width:100%}.category[_ngcontent-%COMP%]   progress[value][_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.category[_ngcontent-%COMP%]   progress[value][_ngcontent-%COMP%]::-webkit-progress-bar{border-radius:8px}.category[_ngcontent-%COMP%]   progress[value][_ngcontent-%COMP%]::-webkit-progress-value{border-radius:8px;background:var(--colors-greenprimary)}.category[_ngcontent-%COMP%]   progress[value].warn[_ngcontent-%COMP%]::-webkit-progress-value{background:var(--colors-orangeprimary)}.category[_ngcontent-%COMP%]   progress[value].over[_ngcontent-%COMP%]::-webkit-progress-value{background:var(--colors-redprimary)}.category[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-bar{background:var(--background-color)}.category[_ngcontent-%COMP%]   .category-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.category[_ngcontent-%COMP%]   .category-progress[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px}.category[_ngcontent-%COMP%]   .category-progress[_ngcontent-%COMP%]   .budget-total[_ngcontent-%COMP%]{font-weight:700}.category[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:1px solid var(--border-color)}.category[_ngcontent-%COMP%]:first-of-type{border-radius:8px 8px 0 0;border-top:1px solid var(--border-color)}.category[_ngcontent-%COMP%]:last-of-type{border-radius:0 0 8px 8px;border-bottom:1px solid var(--border-color)}"]});let n=o;return n})();export{T as a};
