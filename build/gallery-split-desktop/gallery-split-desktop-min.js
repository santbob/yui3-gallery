YUI.add("gallery-split-desktop",function(Z){var aa="px",z="#",G="HTML",J="width",aw="height",aF="backgroundImage",i="backgroundPosition",S="assets/",az="/gallery-split-desktop/",ap="gallery-split-desktop",C="enter",s="drag",ad="close",ax="open",aj="Main",m="init",B="start",y="end",e="Crown",at="NE",an="NW",e="Crown",aC=960,ai=150,Q=700,b=30,aE="drag-here.png",aA=S+aE,R=162,O=7,aG="center-handle.png",ab=null,g="handle",N="ea_",W='id="',ar='" ',k="<img ",A='src="',ay='" ',l="/>",a=z+"99cccc",ac="pix-blue.gif",I=S+ac,X={wrapper:"page_wrapper",crown:"crown",nw:"nw",nwbody:"body_nw",ne:"ne",borders:"borders",nebody:"body_ne",main:"main"},v="pageWidth",av="bordersColor",ak="dragHereImg",D="pathToImages",T="borderPixImg",ag="handleImg",q="dragHereLeft",au="dragHereTop",F="mainHeight",am="crownHeight",H="isDragging",c="prefix",ao="closeCrownHeight",af="closeNWWidth",aB="closeNEWidth",aq="isCloseCrown",o="isCloseNW",x="isCloseNE",aD=z+N+X.ne,p=z+N+X.nwbody,n=z+N+X.main,L=z+N+X.wrapper,ah=null,r=null,f=null,ae=null,V=null,al=false,u=0,E=0,K=0,U=0,M=5,P=null,t=null,j=null;function d(h){d.superclass.constructor.apply(this,arguments);}d.NAME="splitDesktop";d.ATTRS={boundingBox:{value:G},contentBox:{value:"page_wrapper"},pageWidth:{value:aC+aa},bodyHeight:{value:Q+aa},dragHereImg:{value:aE},pathToImages:{value:S},pathToStyles:{value:S},pointerLeftPos:{value:R+aa},pointerTopPos:{value:O+aa},handleImage:{value:aG},handleId:{value:g},dragHereImgPath:{value:aA},defaultPrefix:{value:N},mainDivId:{value:X.main},bordersColor:{value:a},borderPixImg:{value:I},markupIsValidated:{value:null},handleImg:{value:aG},dragHereLeft:{value:R+aa},dragHereTop:{value:O+aa},mainHeight:{value:Q+aa},crownHeight:{value:b+aa,setter:"_setCrownHeight"},prefix:{value:N},baseUrl:{getter:"_getBaseUrl",lazyAdd:false},isDragging:{value:false},closeCrownHeight:{value:40,validator:"_validateCloseCrownHeight"},closeNWWidth:{value:30,validator:"_validateCloseNwWidth"},closeNEWidth:{value:30,validator:"_validateCloseNeWidth"},isCloseCrown:{value:false},isCloseNW:{value:false},isCloseNE:{value:false}};Z.extend(d,Z.Widget,{initializer:function(Y){var aJ=this.get("baseUrl"),aH,w=aJ+S+aG;ab=k+W+N+g+ar+A+w+ay+l;for(aH in Y){if(Y.hasOwnProperty(aH)){switch(aH){case v:aC=this.get(aH);var aI=aC-ai;var h=aC+21;Z.one(z+N+X.wrapper).setStyle("width",aC);Z.one(z+N+X.ne).setStyle("width",aI);Z.one(z+N+X.main).setStyle("width",h);break;case av:var aK=this.get(av);Z.one(z+N+X.borders).setStyle("borderLeftColor",aK).setStyle("borderBottomColor",aK);Z.one(z+N+X.wrapper).setStyle("borderColor",aK);break;case ak:case D:case T:case ag:aA=this.get(D)+this.get(ak);Z.one(z+N+X.main).setStyle(aF,'url("'+aA+'")');I=this.get(D)+this.get(T);if(aH===T||aH===D){Z.one(z+N+X.nw).setStyle(aF,I);}if(aH===ag||aH===D){N=this.get(c);w=this.get(D)+this.get(ag);ab=k+W+N+g+ar+A+w+ay+l;}break;case q:N=this.get(c);Z.one(z+N+X.main).setStyle(i,this.get(q)+aa+" "+this.get(au)+aa);break;case au:N=this.get(c);Z.one(z+N+X.main).setStyle(i,this.get(q)+aa+" "+this.get(au)+aa);break;case F:N=this.get(c);Z.one(z+N+X.main).setStyle(aw,this.get(F)+aa);break;case am:N=this.get(c);Z.one(z+N+X.ne).setStyle(aw,this.get(am)+aa);break;case c:N=this.get(c);aD=z+N+X.ne;p=z+N+X.nwbody;n=z+N+X.main;L=z+N+X.wrapper;ab=k+W+N+g+ar+A+w+ay+l;break;}}}this.publish(C+aj,{bubbles:true});this.publish(C+at,{bubbles:true});this.publish(C+an,{bubbles:true});this.publish(s+m,{});this.publish(s+B,{});this.publish(s+y,{});this.publish(ad+at,{});this.publish(ad+an,{});this.publish(ad+e,{});this.publish(ax+e,{});this.publish(ax+at,{});this.publish(ax+an,{});this._over=function(aL){switch(z+aL.currentTarget.get("id")){case p:if(!this.get("isDragging")){this.fire(C+an);}break;case aD:if(!this.get("isDragging")){this.fire(C+at);}break;case n:if(!this.get("isDragging")){this.fire(C+aj);}break;}};this._out=function(aL){return;};Z.one(L).delegate("hover",this._over,this._out,".sdt-active",this);},renderUI:function(){ah=Z.one(aD);ae=Z.Node.create(ab,ah);ah.append(ae);V=new Z.DD.Drag({node:z+N+g});V.plug(Z.Plugin.DDConstrained,{constrain2node:L});},bindUI:function(){V.on("drag:start",this._onDragStart,this);V.on("drag:drag",this._onDragDrag,this);V.on("drag:end",this._onDragEnd,this);},syncUI:function(){Z.one(G).setStyle("display","block");},_onDragStart:function(h){f=Z.one(n);this.set(H,true);switch(al){case false:this.fire(s+m);f.setStyle(aF,"none");case true:this.fire(s+B);U=parseInt(ah.getStyle(aw).toString().replace(aa,""),10);K=parseInt(ah.getStyle(J).toString().replace(aa,""),10);al=true;break;}},_onDragDrag:function(Y){r=Z.one(p);ah=Z.one(aD);var h=parseInt(Y.info.offset[0],10),w=parseInt(Y.info.offset[1],10);u=K-h;E=U+w;if(!t){t=this.get(v)-6-this.get(af);}if(!P){P=this.get(aB);}if(!j){j=this.get(ao);}this._isPaneClosed(o,an,t,u,true);this._isPaneClosed(x,at,P,u,false);this._isPaneClosed(aq,e,j,E,false);ah.setStyle(J,u);ah.setStyle(aw,E);r.setStyle(J,aC-u+M);r.setStyle(aw,E);},_onDragEnd:function(h){this.fire(s+y);this.set(H,false);this._repositionHandle();},_getBaseUrl:function(){if(Z.config.modules){if(Z.config.modules[ap]){if(Z.config.modules[ap].gallery){return Z.Env.base+Z.config.modules[ap].gallery+"/build/";}else{if(Z.config.modules[ap].fullpath){var h=Z.config.modules[ap].fullpath;return h.substring(0,h.lastIndexOf("/")+1);}else{if(Z.config.modules.base){return Z.config.modules.base;}}}}}else{if(Z.config.gallery){return Z.Env.base+Z.config.gallery+"/build/";}else{if(Z.config.fullpath){var h=Z.config.fullpath;return h.substring(0,lastIndexOf("/",h)+1);}else{return az;}}}},_getMain:function(){return Z.one(n);},_getSecondary:function(){return Z.one(p);},_getResizer:function(){return Z.one(aD);},_validateCloseCrownHeight:function(h){return(h>=this.get(am));},_validateCloseNWWidth:function(h){return(h>=0&&h<=parseInt(this.get(v).replace(aa,""),10)/4);},_validateCloseNEWidth:function(h){return(h>=0&&h<=parseInt(this.get(v).replace(aa,""),10)/4);},_isPaneClosed:function(aI,h,Y,aH,w){if(!this.get(aI)){if(this._evalLimits(Y<=aH,w)){this.set(aI,true);
this.fire(ad+h);}}else{if(this._evalLimits(Y>aH,w)){this.set(aI,false);this.fire(ax+h);}}},_evalLimits:function(h,w){return w?h:!h;},_setCrownHeight:function(h){N=this.get(c);Z.one(z+N+X.ne).setStyle(aw,h+aa);this._repositionHandle(h);},_repositionHandle:function(h){ae.setStyle("left","0px");if(h){r.setStyle(aw,h);}ae.setStyle("bottom","0px");ae.setStyle("top","");}});Z.namespace("Widget").SplitDesktop=d;},"gallery-2011.05.04-20-03",{requires:["widget","dd-constrain","event-hover"]});