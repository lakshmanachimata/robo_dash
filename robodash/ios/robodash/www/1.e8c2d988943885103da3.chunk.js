webpackJsonp([1,9],{EDYU:function(e,t,r){"use strict";var n=r("YaVQ"),i=r("ATz5"),_=r("zKH5"),s=r("oUgg");r.d(t,"a",function(){return l});var l=function(){function e(e,t,r,n){this.logger=e,this.data=t,this.router=r,this.location=n,this.data.setShowTopMenu(!0),this.data.setShowLeftMenu(!0),this.data.setShowBottomMenu(!0),this.data.setShowRightMenu(!0)}return e.prototype.ngOnChanges=function(e){},e.prototype.ngDoCheck=function(){},e.prototype.ngAfterContentInit=function(){},e.prototype.ngAfterContentChecked=function(){},e.prototype.ngAfterViewInit=function(){},e.prototype.ngAfterViewChecked=function(){},e.prototype.ngOnInit=function(){this.data.setScreen(4)},e.prototype.ngOnDestroy=function(){},e.prototype.menuItemClick=function(e){this.location.replaceState("/"),this.router.navigateByUrl(e)},e.ctorParameters=function(){return[{type:n.a},{type:i.a},{type:_.Router},{type:s.Location}]},e}()},F3or:function(e,t,r){"use strict";var n=r("EDYU"),i=r("R2h3"),_=r("qs5H"),s=r("TTjD"),l=r("jzTW"),h=r("gWLF"),a=r("vU4g"),c=r("YaVQ"),o=r("ATz5"),d=r("3UAB"),p=r("eHnQ"),u=r("l78e"),x=r("HcWd"),g=r("bgHk");r.d(t,"a",function(){return w});var y=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},f=function(){function e(e,t,r,i){this._changed=!1,this._changes={},this.context=new n.a(e,t,r,i)}return e.prototype.ngOnDetach=function(e,t,r){},e.prototype.ngOnDestroy=function(){this.context.ngOnDestroy()},e.prototype.ngDoCheck=function(e,t,r){var n=this._changed;return this._changed=!1,r||(n&&(this.context.ngOnChanges(this._changes),this._changes={}),0===e.numberOfChecks&&this.context.ngOnInit(),this.context.ngDoCheck()),n},e.prototype.checkHost=function(e,t,r,n){},e.prototype.handleEvent=function(e,t){return!0},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}(),m=_.createRenderComponentType("",0,s.b.None,[],{}),R=function(e){function t(r,n,i,_){e.call(this,t,m,l.a.HOST,r,n,i,_,h.b.CheckAlways)}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=_.selectOrCreateRenderHostElement(this.renderer,"screen4-root",_.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new E(this.viewUtils,this,0,this._el_0),this._Screen4Component_0_3=new f(this.injectorGet(c.a,this.parentIndex),this.injectorGet(o.a,this.parentIndex),this.injectorGet(d.a,this.parentIndex),this.injectorGet(p.a,this.parentIndex)),this.compView_0.create(this._Screen4Component_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new a.a(0,this,this._el_0,this._Screen4Component_0_3.context)},t.prototype.injectorGetInternal=function(e,t,r){return e===n.a&&0===t?this._Screen4Component_0_3.context:r},t.prototype.detectChangesInternal=function(e){this._Screen4Component_0_3.ngDoCheck(this,this._el_0,e),e||(0===this.numberOfChecks&&this._Screen4Component_0_3.context.ngAfterContentInit(),this._Screen4Component_0_3.context.ngAfterContentChecked()),this.compView_0.internalDetectChanges(e),e||(0===this.numberOfChecks&&this._Screen4Component_0_3.context.ngAfterViewInit(),this._Screen4Component_0_3.context.ngAfterViewChecked())},t.prototype.destroyInternal=function(){this.compView_0.destroy(),this._Screen4Component_0_3.ngOnDestroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(i.a),w=new a.b("screen4-root",R,n.a),T=[u.a,x.a],v=_.createRenderComponentType("",0,s.b.Emulated,T,{}),E=function(e){function t(r,n,i,_){e.call(this,t,v,l.a.COMPONENT,r,n,i,_,h.b.CheckAlways),this._expr_108=g.b,this._expr_109=g.b,this._expr_110=g.b,this._expr_111=g.b}return y(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);this._el_0=_.createRenderElement(this.renderer,t,"div",new _.InlineArray2(2,"class","screen_container"),null),this._text_1=this.renderer.createText(this._el_0,"\n    ",null),this._el_2=_.createRenderElement(this.renderer,this._el_0,"div",new _.InlineArray2(2,"class","screen_tabs"),null),this._text_3=this.renderer.createText(this._el_2,"\n    ",null),this._el_4=_.createRenderElement(this.renderer,this._el_2,"ul",new _.InlineArray2(2,"class","nav nav-pills"),null),this._text_5=this.renderer.createText(this._el_4,"\n        ",null),this._el_6=_.createRenderElement(this.renderer,this._el_4,"li",_.EMPTY_INLINE_ARRAY,null),this._el_7=_.createRenderElement(this.renderer,this._el_6,"a",new _.InlineArray2(2,"href","javascript:void(0)"),null),this._text_8=this.renderer.createText(this._el_7,"Project",null),this._text_9=this.renderer.createText(this._el_4,"\n        ",null),this._el_10=_.createRenderElement(this.renderer,this._el_4,"li",_.EMPTY_INLINE_ARRAY,null),this._el_11=_.createRenderElement(this.renderer,this._el_10,"a",new _.InlineArray2(2,"href","javascript:void(0)"),null),this._text_12=this.renderer.createText(this._el_11,"Stations",null),this._text_13=this.renderer.createText(this._el_4,"\n        ",null),this._el_14=_.createRenderElement(this.renderer,this._el_4,"li",_.EMPTY_INLINE_ARRAY,null),this._el_15=_.createRenderElement(this.renderer,this._el_14,"a",new _.InlineArray2(2,"href","javascript:void(0)"),null),this._text_16=this.renderer.createText(this._el_15,"Parts",null),this._text_17=this.renderer.createText(this._el_4,"\n        ",null),this._el_18=_.createRenderElement(this.renderer,this._el_4,"li",_.EMPTY_INLINE_ARRAY,null),this._el_19=_.createRenderElement(this.renderer,this._el_18,"a",new _.InlineArray2(2,"href","javascript:void(0)"),null),this._text_20=this.renderer.createText(this._el_19,"Gripper",null),this._text_21=this.renderer.createText(this._el_4,"\n    ",null),this._text_22=this.renderer.createText(this._el_2," \n    ",null),this._text_23=this.renderer.createText(this._el_0,"\n     ",null),this._el_24=_.createRenderElement(this.renderer,this._el_0,"div",new _.InlineArray2(2,"class","gripper_listing"),null),this._text_25=this.renderer.createText(this._el_24,"\n         ",null),this._el_26=_.createRenderElement(this.renderer,this._el_24,"div",new _.InlineArray2(2,"class","gripper_overview"),null),this._text_27=this.renderer.createText(this._el_26,"\n             ",null),this._el_28=_.createRenderElement(this.renderer,this._el_26,"img",new _.InlineArray4(4,"class","gripper_image","src","assets/icons/gripper1.png"),null),this._text_29=this.renderer.createText(this._el_26,"\n             ",null),this._el_30=_.createRenderElement(this.renderer,this._el_26,"label",new _.InlineArray2(2,"class","gripper_label"),null),this._text_31=this.renderer.createText(this._el_30,"Gripper 1",null),this._text_32=this.renderer.createText(this._el_26,"\n         ",null),this._text_33=this.renderer.createText(this._el_24,"\n         ",null),this._el_34=_.createRenderElement(this.renderer,this._el_24,"div",new _.InlineArray2(2,"class","gripper_overview"),null),this._text_35=this.renderer.createText(this._el_34,"\n             ",null),this._el_36=_.createRenderElement(this.renderer,this._el_34,"img",new _.InlineArray4(4,"class","gripper_image","src","assets/icons/gripper2.png"),null),this._text_37=this.renderer.createText(this._el_34,"\n             ",null),this._el_38=_.createRenderElement(this.renderer,this._el_34,"label",new _.InlineArray2(2,"class","gripper_label"),null),this._text_39=this.renderer.createText(this._el_38,"Gripper 2",null),this._text_40=this.renderer.createText(this._el_34,"\n         ",null),this._text_41=this.renderer.createText(this._el_24,"\n         ",null),this._el_42=_.createRenderElement(this.renderer,this._el_24,"div",new _.InlineArray2(2,"class","gripper_overview"),null),this._text_43=this.renderer.createText(this._el_42,"\n             ",null),this._el_44=_.createRenderElement(this.renderer,this._el_42,"img",new _.InlineArray4(4,"class","gripper_image","src","assets/icons/gripper3.png"),null),this._text_45=this.renderer.createText(this._el_42,"\n             ",null),this._el_46=_.createRenderElement(this.renderer,this._el_42,"label",new _.InlineArray2(2,"class","gripper_label"),null),this._text_47=this.renderer.createText(this._el_46,"Gripper 3",null),this._text_48=this.renderer.createText(this._el_42,"\n         ",null),this._text_49=this.renderer.createText(this._el_24,"\n         ",null),this._el_50=_.createRenderElement(this.renderer,this._el_24,"div",new _.InlineArray2(2,"class","gripper_overview"),null),this._text_51=this.renderer.createText(this._el_50,"\n             ",null),this._el_52=_.createRenderElement(this.renderer,this._el_50,"img",new _.InlineArray4(4,"class","gripper_image","src","assets/icons/gripper4.png"),null),this._text_53=this.renderer.createText(this._el_50,"\n             ",null),this._el_54=_.createRenderElement(this.renderer,this._el_50,"label",new _.InlineArray2(2,"class","gripper_label"),null),this._text_55=this.renderer.createText(this._el_54,"Gripper 4",null),this._text_56=this.renderer.createText(this._el_50,"\n         ",null),this._text_57=this.renderer.createText(this._el_24,"\n         ",null),this._el_58=_.createRenderElement(this.renderer,this._el_24,"div",new _.InlineArray2(2,"class","gripper_overview"),null),this._text_59=this.renderer.createText(this._el_58,"\n             ",null),this._el_60=_.createRenderElement(this.renderer,this._el_58,"img",new _.InlineArray4(4,"class","gripper_image","src","assets/icons/gripper5.png"),null),this._text_61=this.renderer.createText(this._el_58,"\n             ",null),this._el_62=_.createRenderElement(this.renderer,this._el_58,"label",new _.InlineArray2(2,"class","gripper_label"),null),this._text_63=this.renderer.createText(this._el_62,"Gripper 5",null),this._text_64=this.renderer.createText(this._el_58,"\n         ",null),this._text_65=this.renderer.createText(this._el_24,"\n         ",null),this._el_66=_.createRenderElement(this.renderer,this._el_24,"div",new _.InlineArray2(2,"class","gripper_overview"),null),this._text_67=this.renderer.createText(this._el_66,"\n             ",null),this._el_68=_.createRenderElement(this.renderer,this._el_66,"img",new _.InlineArray4(4,"class","gripper_image","src","assets/icons/gripper6.png"),null),this._text_69=this.renderer.createText(this._el_66,"\n             ",null),this._el_70=_.createRenderElement(this.renderer,this._el_66,"label",new _.InlineArray2(2,"class","gripper_label"),null),this._text_71=this.renderer.createText(this._el_70,"Gripper 6",null),this._text_72=this.renderer.createText(this._el_66,"\n         ",null),this._text_73=this.renderer.createText(this._el_24,"\n\n\n     ",null),this._text_74=this.renderer.createText(this._el_0,"\n     ",null),this._el_75=_.createRenderElement(this.renderer,this._el_0,"div",new _.InlineArray2(2,"class","gripper_details"),null),this._text_76=this.renderer.createText(this._el_75,"\n         ",null),this._el_77=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_header"),null),this._text_78=this.renderer.createText(this._el_77,"\n             Selected Gripper\n         ",null),this._text_79=this.renderer.createText(this._el_75,"\n         ",null),this._el_80=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_info"),null),this._text_81=this.renderer.createText(this._el_80,"\n             Gripper 1\n         ",null),this._text_82=this.renderer.createText(this._el_75,"\n         ",null),this._el_83=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_header"),null),this._text_84=this.renderer.createText(this._el_83,"\n             Task\n         ",null),this._text_85=this.renderer.createText(this._el_75,"\n         ",null),this._el_86=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_info"),null),this._text_87=this.renderer.createText(this._el_86,"\n             T_Rob1\n         ",null),this._text_88=this.renderer.createText(this._el_75,"\n         ",null),this._el_89=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_header"),null),this._text_90=this.renderer.createText(this._el_89,"\n             Type\n         ",null),this._text_91=this.renderer.createText(this._el_75,"\n         ",null),this._el_92=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_info"),null),this._text_93=this.renderer.createText(this._el_92,"\n             Type3\n         ",null),this._text_94=this.renderer.createText(this._el_75,"\n         ",null),this._el_95=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_header"),null),this._text_96=this.renderer.createText(this._el_95,"\n             Valid\n         ",null),this._text_97=this.renderer.createText(this._el_75,"\n         ",null),this._el_98=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_info"),null),this._text_99=this.renderer.createText(this._el_98,"\n             TRUE\n         ",null),this._text_100=this.renderer.createText(this._el_75,"\n         ",null),this._el_101=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_header"),null),this._text_102=this.renderer.createText(this._el_101,"\n             Wait Time\n         ",null),this._text_103=this.renderer.createText(this._el_75,"\n         ",null),this._el_104=_.createRenderElement(this.renderer,this._el_75,"div",new _.InlineArray2(2,"class","gripper_details_info"),null),this._text_105=this.renderer.createText(this._el_104,"\n             2\n         ",null),this._text_106=this.renderer.createText(this._el_75,"\n     ",null),this._text_107=this.renderer.createText(this._el_0,"\n",null);var r=_.subscribeToRenderElement(this,this._el_14,new _.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_14)),n=_.subscribeToRenderElement(this,this._el_18,new _.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_18));return this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._el_6,this._el_7,this._text_8,this._text_9,this._el_10,this._el_11,this._text_12,this._text_13,this._el_14,this._el_15,this._text_16,this._text_17,this._el_18,this._el_19,this._text_20,this._text_21,this._text_22,this._text_23,this._el_24,this._text_25,this._el_26,this._text_27,this._el_28,this._text_29,this._el_30,this._text_31,this._text_32,this._text_33,this._el_34,this._text_35,this._el_36,this._text_37,this._el_38,this._text_39,this._text_40,this._text_41,this._el_42,this._text_43,this._el_44,this._text_45,this._el_46,this._text_47,this._text_48,this._text_49,this._el_50,this._text_51,this._el_52,this._text_53,this._el_54,this._text_55,this._text_56,this._text_57,this._el_58,this._text_59,this._el_60,this._text_61,this._el_62,this._text_63,this._text_64,this._text_65,this._el_66,this._text_67,this._el_68,this._text_69,this._el_70,this._text_71,this._text_72,this._text_73,this._text_74,this._el_75,this._text_76,this._el_77,this._text_78,this._text_79,this._el_80,this._text_81,this._text_82,this._el_83,this._text_84,this._text_85,this._el_86,this._text_87,this._text_88,this._el_89,this._text_90,this._text_91,this._el_92,this._text_93,this._text_94,this._el_95,this._text_96,this._text_97,this._el_98,this._text_99,this._text_100,this._el_101,this._text_102,this._text_103,this._el_104,this._text_105,this._text_106,this._text_107],[r,n]),null},t.prototype.detectChangesInternal=function(e){var t=1==this.context.data.getScreen();_.checkBinding(e,this._expr_108,t)&&(this.renderer.setElementClass(this._el_6,"active",t),this._expr_108=t);var r=2==this.context.data.getScreen();_.checkBinding(e,this._expr_109,r)&&(this.renderer.setElementClass(this._el_10,"active",r),this._expr_109=r);var n=3==this.context.data.getScreen();_.checkBinding(e,this._expr_110,n)&&(this.renderer.setElementClass(this._el_14,"active",n),this._expr_110=n);var i=4==this.context.data.getScreen();_.checkBinding(e,this._expr_111,i)&&(this.renderer.setElementClass(this._el_18,"active",i),this._expr_111=i)},t.prototype.handleEvent_14=function(e,t){this.markPathToRootAsCheckOnce();var r=!0;if("click"==e){r=!1!==this.context.menuItemClick("screen3")&&r}return r},t.prototype.handleEvent_18=function(e,t){this.markPathToRootAsCheckOnce();var r=!0;if("click"==e){r=!1!==this.context.menuItemClick("screen4")&&r}return r},t}(i.a)},HcWd:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=[".screen_container[_ngcontent-%COMP%]{position:fixed;margin-left:7%;width:93%;height:75%}.gripper_listing[_ngcontent-%COMP%]{margin-top:4%;width:70%;height:100%;display:inline-block;padding-left:2%}.gripper_details[_ngcontent-%COMP%]{width:25%;height:100%;margin-top:1%;display:inline-block;vertical-align:top;padding-top:2%;text-align:center;font-size:2.5vw}.gripper_overview[_ngcontent-%COMP%]{padding:3%;margin:3%;width:20%;display:inline-block;background-color:#000;border-radius:30px}.gripper_image[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.gripper_label[_ngcontent-%COMP%]{color:#006fa2;text-align:center;font-weight:700;font-size:2vw;width:100%;display:block}.gripper_details_header[_ngcontent-%COMP%]{background-color:#000;color:#fff;font-size:1.5vw;padding-top:10px;padding-bottom:10px}.gripper_details_info[_ngcontent-%COMP%]{padding-top:8px;font-size:1.5vw;padding-bottom:8px}"]},aFo4:function(e,t,r){"use strict";var n=r("EDYU");r.d(t,"a",function(){return i});var i=(n.a,function(){function e(){console.log("S4Module Loaded")}return e.ctorParameters=function(){return[]},e}())},eMFs:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mPYt"),i=r("aFo4"),_=r("afOh"),s=r("d3cp"),l=r("VJXx"),h=r("QYVq"),a=r("YmUE"),c=r("MuAL"),o=r("yb2a"),d=r("9MX5"),p=r("2wEa"),u=r("F3or"),x=r("EDYU"),g=r("EezI"),y=r("FvJ4"),f=r("tFPf");r.d(t,"Screen4ModuleNgFactory",function(){return w});var m=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},R=function(e){function t(t){e.call(this,t,[u.a],[])}return m(t,e),Object.defineProperty(t.prototype,"_RadioControlRegistry_5",{get:function(){return null==this.__RadioControlRegistry_5&&(this.__RadioControlRegistry_5=new a.a),this.__RadioControlRegistry_5},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserXhr_6",{get:function(){return null==this.__BrowserXhr_6&&(this.__BrowserXhr_6=new c.a),this.__BrowserXhr_6},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ResponseOptions_7",{get:function(){return null==this.__ResponseOptions_7&&(this.__ResponseOptions_7=new o.a),this.__ResponseOptions_7},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XSRFStrategy_8",{get:function(){return null==this.__XSRFStrategy_8&&(this.__XSRFStrategy_8=l.a()),this.__XSRFStrategy_8},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XHRBackend_9",{get:function(){return null==this.__XHRBackend_9&&(this.__XHRBackend_9=new d.a(this._BrowserXhr_6,this._ResponseOptions_7,this._XSRFStrategy_8)),this.__XHRBackend_9},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RequestOptions_10",{get:function(){return null==this.__RequestOptions_10&&(this.__RequestOptions_10=new p.a),this.__RequestOptions_10},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Http_11",{get:function(){return null==this.__Http_11&&(this.__Http_11=l.b(this._XHRBackend_9,this._RequestOptions_10)),this.__Http_11},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ROUTES_12",{get:function(){return null==this.__ROUTES_12&&(this.__ROUTES_12=[[{path:"",component:x.a}]]),this.__ROUTES_12},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._InternalFormsSharedModule_0=new _.a,this._FormsModule_1=new s.a,this._HttpModule_2=new l.c,this._RouterModule_3=new h.g(this.parent.get(h.j,null)),this._Screen4Module_4=new i.a,this._Screen4Module_4},t.prototype.getInternal=function(e,t){return e===_.a?this._InternalFormsSharedModule_0:e===s.a?this._FormsModule_1:e===l.c?this._HttpModule_2:e===h.g?this._RouterModule_3:e===i.a?this._Screen4Module_4:e===a.a?this._RadioControlRegistry_5:e===c.a?this._BrowserXhr_6:e===o.b?this._ResponseOptions_7:e===g.a?this._XSRFStrategy_8:e===d.a?this._XHRBackend_9:e===p.b?this._RequestOptions_10:e===y.a?this._Http_11:e===f.a?this._ROUTES_12:t},t.prototype.destroyInternal=function(){},t}(n.a),w=new n.b(R,i.a)}});