import{a as q,b as $,d as P,f as je,h as Pe}from"./chunk-QYORRQEH.js";import{G as he,a as Oe,g as Ne,s as Ae}from"./chunk-FUZY7AID.js";import{$a as f,Cb as w,H as le,Mb as v,Nb as g,Ob as j,Pa as k,Pb as C,Qb as y,Sa as I,U as F,Va as a,Xa as Ie,Y as xe,Ya as Te,Z as B,Za as A,ab as de,ba as H,bc as W,ca as Ee,eb as V,fa as b,ga as Q,gb as T,gc as Me,ha as d,j as ae,ja as z,k as be,n as ke,na as D,o as ce,oa as Fe,q as Se,qb as S,wb as U,xb as M}from"./chunk-JOCWNNNL.js";var it=[[["caption"]],[["colgroup"],["col"]]],ot=["caption","colgroup, col"];function ge(n){return class extends n{get sticky(){return this._sticky}set sticky(e){let c=this._sticky;this._sticky=Ne(e),this._hasStickyChanged=c!==this._sticky}hasStickyChanged(){let e=this._hasStickyChanged;return this._hasStickyChanged=!1,e}resetStickyChanged(){this._hasStickyChanged=!1}constructor(...e){super(...e),this._sticky=!1,this._hasStickyChanged=!1}}}var E=new H("CDK_TABLE");var oe=(()=>{let e=class e{constructor(t){this.template=t}};e.\u0275fac=function(i){return new(i||e)(a(v))},e.\u0275dir=d({type:e,selectors:[["","cdkCellDef",""]]});let n=e;return n})(),ne=(()=>{let e=class e{constructor(t){this.template=t}};e.\u0275fac=function(i){return new(i||e)(a(v))},e.\u0275dir=d({type:e,selectors:[["","cdkHeaderCellDef",""]]});let n=e;return n})(),Be=(()=>{let e=class e{constructor(t){this.template=t}};e.\u0275fac=function(i){return new(i||e)(a(v))},e.\u0275dir=d({type:e,selectors:[["","cdkFooterCellDef",""]]});let n=e;return n})(),ue=class{},nt=ge(ue),O=(()=>{let e=class e extends nt{get name(){return this._name}set name(t){this._setNameInput(t)}get stickyEnd(){return this._stickyEnd}set stickyEnd(t){t!==this._stickyEnd&&(this._stickyEnd=t,this._hasStickyChanged=!0)}constructor(t){super(),this._table=t,this._stickyEnd=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}};e.\u0275fac=function(i){return new(i||e)(a(E,8))},e.\u0275dir=d({type:e,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,o,r){if(i&1&&(C(r,oe,5),C(r,ne,5),C(r,Be,5)),i&2){let s;g(s=y())&&(o.cell=s.first),g(s=y())&&(o.headerCell=s.first),g(s=y())&&(o.footerCell=s.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:["stickyEnd","stickyEnd",W]},features:[w([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:e}]),de,f]});let n=e;return n})(),K=class{constructor(e,c){c.nativeElement.classList.add(...e._columnCssClassName)}},He=(()=>{let e=class e extends K{constructor(t,i){super(t,i)}};e.\u0275fac=function(i){return new(i||e)(a(O),a(k))},e.\u0275dir=d({type:e,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[f]});let n=e;return n})();var Qe=(()=>{let e=class e extends K{constructor(t,i){if(super(t,i),t._table?._elementRef.nativeElement.nodeType===1){let o=t._table._elementRef.nativeElement.getAttribute("role"),r=o==="grid"||o==="treegrid"?"gridcell":"cell";i.nativeElement.setAttribute("role",r)}}};e.\u0275fac=function(i){return new(i||e)(a(O),a(k))},e.\u0275dir=d({type:e,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[f]});let n=e;return n})(),Y=class{constructor(){this.tasks=[],this.endTasks=[]}},G=new H("_COALESCED_STYLE_SCHEDULER"),ye=(()=>{let e=class e{constructor(t){this._ngZone=t,this._currentSchedule=null,this._destroyed=new ae}schedule(t){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(t)}scheduleEnd(t){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(t)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new Y,this._getScheduleObservable().pipe(F(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){let t=this._currentSchedule;this._currentSchedule=new Y;for(let i of t.tasks)i();for(let i of t.endTasks)i()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?ke(Promise.resolve(void 0)):this._ngZone.onStable.pipe(le(1))}};e.\u0275fac=function(i){return new(i||e)(Ee(A))},e.\u0275prov=xe({token:e,factory:e.\u0275fac});let n=e;return n})();var we=(()=>{let e=class e{constructor(t,i){this.template=t,this._differs=i}ngOnChanges(t){if(!this._columnsDiffer){let i=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof L?t.headerCell.template:this instanceof _e?t.footerCell.template:t.cell.template}};e.\u0275fac=function(i){return new(i||e)(a(v),a(I))},e.\u0275dir=d({type:e,features:[z]});let n=e;return n})(),fe=class extends we{},rt=ge(fe),L=(()=>{let e=class e extends rt{constructor(t,i,o){super(t,i),this._table=o}ngOnChanges(t){super.ngOnChanges(t)}};e.\u0275fac=function(i){return new(i||e)(a(v),a(I),a(E,8))},e.\u0275dir=d({type:e,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[f,z]});let n=e;return n})(),me=class extends we{},st=ge(me),_e=(()=>{let e=class e extends st{constructor(t,i,o){super(t,i),this._table=o}ngOnChanges(t){super.ngOnChanges(t)}};e.\u0275fac=function(i){return new(i||e)(a(v),a(I),a(E,8))},e.\u0275dir=d({type:e,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[f,z]});let n=e;return n})(),re=(()=>{let e=class e extends we{constructor(t,i,o){super(t,i),this._table=o}};e.\u0275fac=function(i){return new(i||e)(a(v),a(I),a(E,8))},e.\u0275dir=d({type:e,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[f]});let n=e;return n})(),x=(()=>{let e=class e{constructor(t){this._viewContainer=t,e.mostRecentCellOutlet=this}ngOnDestroy(){e.mostRecentCellOutlet===this&&(e.mostRecentCellOutlet=null)}};e.mostRecentCellOutlet=null,e.\u0275fac=function(i){return new(i||e)(a(T))},e.\u0275dir=d({type:e,selectors:[["","cdkCellOutlet",""]]});let n=e;return n})(),De=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=b({type:e,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,o){i&1&&S(0,0)},dependencies:[x],encapsulation:2});let n=e;return n})();var ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=b({type:e,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,o){i&1&&S(0,0)},dependencies:[x],encapsulation:2});let n=e;return n})(),ze=(()=>{let e=class e{constructor(t){this.templateRef=t,this._contentClassName="cdk-no-data-row"}};e.\u0275fac=function(i){return new(i||e)(a(v))},e.\u0275dir=d({type:e,selectors:[["ng-template","cdkNoDataRow",""]]});let n=e;return n})(),Le=["top","bottom","left","right"],pe=class{constructor(e,c,t,i,o=!0,r=!0,s){this._isNativeHtmlTable=e,this._stickCellCss=c,this.direction=t,this._coalescedStyleScheduler=i,this._isBrowser=o,this._needsPositionStickyOnElement=r,this._positionListener=s,this._cachedCellWidths=[],this._borderCellCss={top:`${c}-border-elem-top`,bottom:`${c}-border-elem-bottom`,left:`${c}-border-elem-left`,right:`${c}-border-elem-right`}}clearStickyPositioning(e,c){let t=[];for(let i of e)if(i.nodeType===i.ELEMENT_NODE){t.push(i);for(let o=0;o<i.children.length;o++)t.push(i.children[o])}this._coalescedStyleScheduler.schedule(()=>{for(let i of t)this._removeStickyStyle(i,c)})}updateStickyColumns(e,c,t,i=!0){if(!e.length||!this._isBrowser||!(c.some(m=>m)||t.some(m=>m))){this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]}));return}let o=e[0],r=o.children.length,s=this._getCellWidths(o,i),l=this._getStickyStartColumnPositions(s,c),u=this._getStickyEndColumnPositions(s,t),h=c.lastIndexOf(!0),_=t.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{let m=this.direction==="rtl",R=m?"right":"left",se=m?"left":"right";for(let N of e)for(let p=0;p<r;p++){let Re=N.children[p];c[p]&&this._addStickyStyle(Re,R,l[p],p===h),t[p]&&this._addStickyStyle(Re,se,u[p],p===_)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:h===-1?[]:s.slice(0,h+1).map((N,p)=>c[p]?N:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:_===-1?[]:s.slice(_).map((N,p)=>t[p+_]?N:null).reverse()}))})}stickRows(e,c,t){if(!this._isBrowser)return;let i=t==="bottom"?e.slice().reverse():e,o=t==="bottom"?c.slice().reverse():c,r=[],s=[],l=[];for(let h=0,_=0;h<i.length;h++){if(!o[h])continue;r[h]=_;let m=i[h];l[h]=this._isNativeHtmlTable?Array.from(m.children):[m];let R=m.getBoundingClientRect().height;_+=R,s[h]=R}let u=o.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{for(let h=0;h<i.length;h++){if(!o[h])continue;let _=r[h],m=h===u;for(let R of l[h])this._addStickyStyle(R,t,_,m)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:r,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:r,elements:l})})}updateStickyFooterContainer(e,c){if(!this._isNativeHtmlTable)return;let t=e.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{c.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1)})}_removeStickyStyle(e,c){for(let i of c)e.style[i]="",e.classList.remove(this._borderCellCss[i]);Le.some(i=>c.indexOf(i)===-1&&e.style[i])?e.style.zIndex=this._getCalculatedZIndex(e):(e.style.zIndex="",this._needsPositionStickyOnElement&&(e.style.position=""),e.classList.remove(this._stickCellCss))}_addStickyStyle(e,c,t,i){e.classList.add(this._stickCellCss),i&&e.classList.add(this._borderCellCss[c]),e.style[c]=`${t}px`,e.style.zIndex=this._getCalculatedZIndex(e),this._needsPositionStickyOnElement&&(e.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(e){let c={top:100,bottom:10,left:1,right:1},t=0;for(let i of Le)e.style[i]&&(t+=c[i]);return t?`${t}`:""}_getCellWidths(e,c=!0){if(!c&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=e.children;for(let o=0;o<i.length;o++){let r=i[o];t.push(r.getBoundingClientRect().width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(e,c){let t=[],i=0;for(let o=0;o<e.length;o++)c[o]&&(t[o]=i,i+=e[o]);return t}_getStickyEndColumnPositions(e,c){let t=[],i=0;for(let o=e.length;o>0;o--)c[o]&&(t[o]=i,i+=e[o]);return t}};var X=new H("CDK_SPL");var J=(()=>{let e=class e{constructor(t,i){this.viewContainer=t,this.elementRef=i}};e.\u0275fac=function(i){return new(i||e)(a(T),a(k))},e.\u0275dir=d({type:e,selectors:[["","rowOutlet",""]]});let n=e;return n})(),ee=(()=>{let e=class e{constructor(t,i){this.viewContainer=t,this.elementRef=i}};e.\u0275fac=function(i){return new(i||e)(a(T),a(k))},e.\u0275dir=d({type:e,selectors:[["","headerRowOutlet",""]]});let n=e;return n})(),te=(()=>{let e=class e{constructor(t,i){this.viewContainer=t,this.elementRef=i}};e.\u0275fac=function(i){return new(i||e)(a(T),a(k))},e.\u0275dir=d({type:e,selectors:[["","footerRowOutlet",""]]});let n=e;return n})(),ie=(()=>{let e=class e{constructor(t,i){this.viewContainer=t,this.elementRef=i}};e.\u0275fac=function(i){return new(i||e)(a(T),a(k))},e.\u0275dir=d({type:e,selectors:[["","noDataRowOutlet",""]]});let n=e;return n})();var Ce=(()=>{let e=class e{get trackBy(){return this._trackByFn}set trackBy(t){this._trackByFn=t}get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&this._switchDataSource(t)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=t,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(t){this._fixedLayout=t,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}constructor(t,i,o,r,s,l,u,h,_,m,R,se){this._differs=t,this._changeDetectorRef=i,this._elementRef=o,this._dir=s,this._platform=u,this._viewRepeater=h,this._coalescedStyleScheduler=_,this._viewportRuler=m,this._stickyPositioningListener=R,this._ngZone=se,this._onDestroy=new ae,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new Te,this.viewChange=new be({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","table"),this._document=l,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE"}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i),this._viewportRuler.change().pipe(F(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){[this._rowOutlet.viewContainer,this._headerRowOutlet.viewContainer,this._footerRowOutlet.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(t=>{t.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),q(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let t=this._dataDiffer.diff(this._renderRows);if(!t){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(t,i,(o,r,s)=>this._getEmbeddedViewArgs(o.item,s),o=>o.item.data,o=>{o.operation===1&&o.context&&this._renderCellTemplateForItem(o.record.item.rowDef,o.context)}),this._updateRowIndexContext(),t.forEachIdentityChange(o=>{let r=i.get(o.currentIndex);r.context.$implicit=o.item.data}),this._updateNoDataRow(),this._ngZone&&A.isInAngularZone()?this._ngZone.onStable.pipe(le(1),F(this._onDestroy)).subscribe(()=>{this.updateStickyColumnStyles()}):this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}setNoDataRow(t){this._customNoDataRow=t}updateStickyHeaderRowStyles(){let t=this._getRenderedRows(this._headerRowOutlet),o=this._elementRef.nativeElement.querySelector("thead");o&&(o.style.display=t.length?"":"none");let r=this._headerRowDefs.map(s=>s.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,r,"top"),this._headerRowDefs.forEach(s=>s.resetStickyChanged())}updateStickyFooterRowStyles(){let t=this._getRenderedRows(this._footerRowOutlet),o=this._elementRef.nativeElement.querySelector("tfoot");o&&(o.style.display=t.length?"":"none");let r=this._footerRowDefs.map(s=>s.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,r,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,r),this._footerRowDefs.forEach(s=>s.resetStickyChanged())}updateStickyColumnStyles(){let t=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...t,...i,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),t.forEach((r,s)=>{this._addStickyColumnStyles([r],this._headerRowDefs[s])}),this._rowDefs.forEach(r=>{let s=[];for(let l=0;l<i.length;l++)this._renderRows[l].rowDef===r&&s.push(i[l]);this._addStickyColumnStyles(s,r)}),o.forEach((r,s)=>{this._addStickyColumnStyles([r],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}_getAllRenderRows(){let t=[],i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=0;o<this._data.length;o++){let r=this._data[o],s=this._getRenderRowsForData(r,o,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let l=0;l<s.length;l++){let u=s[l],h=this._cachedRenderRowsMap.get(u.data);h.has(u.rowDef)?h.get(u.rowDef).push(u):h.set(u.rowDef,[u]),t.push(u)}}return t}_getRenderRowsForData(t,i,o){return this._getRowDefs(t,i).map(s=>{let l=o&&o.has(s)?o.get(s):[];if(l.length){let u=l.shift();return u.dataIndex=i,u}else return{data:t,rowDef:s,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Z(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Z(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Z(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Z(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let t=this._rowDefs.filter(i=>!i.when);!this.multiTemplateDataRows&&t.length>1,this._defaultRowDef=t[0]}_renderUpdatedColumns(){let t=(s,l)=>s||!!l.getColumnsDiff(),i=this._rowDefs.reduce(t,!1);i&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(t,!1);o&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(t,!1);return r&&this._forceRenderFooterRows(),i||o||r}_switchDataSource(t){this._data=[],q(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;q(this.dataSource)?t=this.dataSource.connect(this):Se(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=ce(this.dataSource)),this._renderChangeSubscription=t.pipe(F(this._onDestroy)).subscribe(i=>{this._data=i||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,i)=>this._renderRow(this._headerRowOutlet,t,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,i)=>this._renderRow(this._footerRowOutlet,t,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(t,i){let o=Array.from(i.columns||[]).map(l=>{let u=this._columnDefsByName.get(l);return u}),r=o.map(l=>l.sticky),s=o.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(t,r,s,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(t){let i=[];for(let o=0;o<t.viewContainer.length;o++){let r=t.viewContainer.get(o);i.push(r.rootNodes[0])}return i}_getRowDefs(t,i){if(this._rowDefs.length==1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(r=>!r.when||r.when(i,t));else{let r=this._rowDefs.find(s=>s.when&&s.when(i,t))||this._defaultRowDef;r&&o.push(r)}return o.length,o}_getEmbeddedViewArgs(t,i){let o=t.rowDef,r={$implicit:t.data};return{templateRef:o.template,context:r,index:i}}_renderRow(t,i,o,r={}){let s=t.viewContainer.createEmbeddedView(i.template,r,o);return this._renderCellTemplateForItem(i,r),s}_renderCellTemplateForItem(t,i){for(let o of this._getCellTemplates(t))x.mostRecentCellOutlet&&x.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let t=this._rowOutlet.viewContainer;for(let i=0,o=t.length;i<o;i++){let s=t.get(i).context;s.count=o,s.first=i===0,s.last=i===o-1,s.even=i%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[i].dataIndex,s.renderIndex=i):s.index=this._renderRows[i].dataIndex}}_getCellTemplates(t){return!t||!t.columns?[]:Array.from(t.columns,i=>{let o=this._columnDefsByName.get(i);return t.extractCellTemplate(o)})}_applyNativeTableSections(){let t=this._document.createDocumentFragment(),i=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(let o of i){let r=this._document.createElement(o.tag);r.setAttribute("role","rowgroup");for(let s of o.outlets)r.appendChild(s.elementRef.nativeElement);t.appendChild(r)}this._elementRef.nativeElement.appendChild(t)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let t=(i,o)=>i||o.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let t=this._dir?this._dir.value:"ltr";this._stickyStyler=new pe(this._isNativeHtmlTable,this.stickyCssClass,t,this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:ce()).pipe(F(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_getOwnDefs(t){return t.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let t=this._customNoDataRow||this._noDataRow;if(!t)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(i){let r=o.createEmbeddedView(t.templateRef),s=r.rootNodes[0];r.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE&&(s.setAttribute("role","row"),s.classList.add(t._contentClassName))}else o.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}};e.\u0275fac=function(i){return new(i||e)(a(I),a(Ie),a(k),Fe("role"),a(Ae,8),a(Me),a(Oe),a(P),a(G),a(je),a(X,12),a(A,8))},e.\u0275cmp=b({type:e,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,o,r){if(i&1&&(C(r,ze,5),C(r,O,5),C(r,re,5),C(r,L,5),C(r,_e,5)),i&2){let s;g(s=y())&&(o._noDataRow=s.first),g(s=y())&&(o._contentColumnDefs=s),g(s=y())&&(o._contentRowDefs=s),g(s=y())&&(o._contentHeaderRowDefs=s),g(s=y())&&(o._contentFooterRowDefs=s)}},viewQuery:function(i,o){if(i&1&&(j(J,7),j(ee,7),j(te,7),j(ie,7)),i&2){let r;g(r=y())&&(o._rowOutlet=r.first),g(r=y())&&(o._headerRowOutlet=r.first),g(r=y())&&(o._footerRowOutlet=r.first),g(r=y())&&(o._noDataRowOutlet=r.first)}},hostAttrs:["ngSkipHydration","",1,"cdk-table"],hostVars:2,hostBindings:function(i,o){i&2&&V("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:["multiTemplateDataRows","multiTemplateDataRows",W],fixedLayout:["fixedLayout","fixedLayout",W]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[w([{provide:E,useExisting:e},{provide:P,useClass:$},{provide:G,useClass:ye},{provide:X,useValue:null}]),de],ngContentSelectors:ot,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,o){i&1&&(U(it),M(0),M(1,1),S(2,0)(3,1)(4,2)(5,3))},dependencies:[J,ee,te,ie],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2});let n=e;return n})();function Z(n,e){return n.concat(Array.from(e))}var Ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Q({type:e}),e.\u0275inj=B({imports:[Pe]});let n=e;return n})();var ct=[[["caption"]],[["colgroup"],["col"]]],lt=["caption","colgroup, col"];var Ut=(()=>{let e=class e extends Ce{constructor(){super(...arguments),this.stickyCssClass="mat-mdc-table-sticky",this.needsPositionStickyOnElement=!1}ngOnInit(){super.ngOnInit(),this._isNativeHtmlTable&&this._elementRef.nativeElement.querySelector("tbody").classList.add("mdc-data-table__content")}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275cmp=b({type:e,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:["ngSkipHydration","",1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,o){i&2&&V("mdc-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],features:[w([{provide:Ce,useExisting:e},{provide:E,useExisting:e},{provide:G,useClass:ye},{provide:P,useClass:$},{provide:X,useValue:null}]),f],ngContentSelectors:lt,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,o){i&1&&(U(ct),M(0),M(1,1),S(2,0)(3,1)(4,2)(5,3))},dependencies:[J,ee,te,ie],styles:[".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],encapsulation:2});let n=e;return n})(),Wt=(()=>{let e=class e extends oe{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275dir=d({type:e,selectors:[["","matCellDef",""]],features:[w([{provide:oe,useExisting:e}]),f]});let n=e;return n})(),qt=(()=>{let e=class e extends ne{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275dir=d({type:e,selectors:[["","matHeaderCellDef",""]],features:[w([{provide:ne,useExisting:e}]),f]});let n=e;return n})();var $t=(()=>{let e=class e extends O{get name(){return this._name}set name(t){this._setNameInput(t)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275dir=d({type:e,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[w([{provide:O,useExisting:e},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:e}]),f]});let n=e;return n})(),Zt=(()=>{let e=class e extends He{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275dir=d({type:e,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[f]});let n=e;return n})();var Kt=(()=>{let e=class e extends Qe{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275dir=d({type:e,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[f]});let n=e;return n})();var Yt=(()=>{let e=class e extends L{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275dir=d({type:e,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[w([{provide:L,useExisting:e}]),f]});let n=e;return n})();var Gt=(()=>{let e=class e extends re{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275dir=d({type:e,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[w([{provide:re,useExisting:e}]),f]});let n=e;return n})(),Xt=(()=>{let e=class e extends De{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275cmp=b({type:e,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[w([{provide:De,useExisting:e}]),f],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,o){i&1&&S(0,0)},dependencies:[x],encapsulation:2});let n=e;return n})();var Jt=(()=>{let e=class e extends ve{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})(),e.\u0275cmp=b({type:e,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[w([{provide:ve,useExisting:e}]),f],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,o){i&1&&S(0,0)},dependencies:[x],encapsulation:2});let n=e;return n})();var ei=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Q({type:e}),e.\u0275inj=B({imports:[he,Ve,he]});let n=e;return n})();export{Ut as a,Wt as b,qt as c,$t as d,Zt as e,Kt as f,Yt as g,Gt as h,Xt as i,Jt as j,ei as k};
