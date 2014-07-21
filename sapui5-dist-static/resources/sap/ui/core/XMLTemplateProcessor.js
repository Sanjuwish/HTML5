/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.XMLTemplateProcessor");(function(){function p(t,v,n,c){var b=sap.ui.base.ManagedObject.bindingParser(v,c,true);if(b&&typeof b==="object"){return b}var V=v=b||v;var T=sap.ui.base.DataType.getType(t);if(T){if(T instanceof sap.ui.base.DataType){V=T.parseValue(v)}}else{throw new Error("Property "+n+" has unknown type "+t)}return typeof V==="string"?sap.ui.base.ManagedObject.bindingParser.escape(V):V}function l(x){return x.localName||x.baseName||x.nodeName}sap.ui.core.XMLTemplateProcessor={};sap.ui.core.XMLTemplateProcessor.loadTemplate=function(t,e){var r=jQuery.sap.getResourceName(t,"."+(e||"view")+".xml");return jQuery.sap.loadResource(r).documentElement};sap.ui.core.XMLTemplateProcessor.parseViewAttributes=function(x,v,s){var a=v.getMetadata().getAllProperties();for(var i=0;i<x.attributes.length;i++){var b=x.attributes[i];if(b.name==='controllerName'){v._controllerName=b.value}else if(b.name==='resourceBundleName'){v._resourceBundleName=b.value}else if(b.name==='resourceBundleUrl'){v._resourceBundleUrl=b.value}else if(b.name==='resourceBundleLocale'){v._resourceBundleLocale=b.value}else if(b.name==='resourceBundleAlias'){v._resourceBundleAlias=b.value}else if(!s[b.name]&&a[b.name]){s[b.name]=p(a[b.name].type,b.value,b.name,v._oContainingView.oController)}}};sap.ui.core.XMLTemplateProcessor.parseTemplate=function(x,v){var r=[];var c=undefined;var C=v.sViewName||v._sFragmentName;if(v.isSubView()){a(x,true)}else{b(x)}return r;function a(x,R,I){if(x.nodeType===1){var L=l(x);if(x.namespaceURI==="http://www.w3.org/1999/xhtml"||x.namespaceURI==="http://www.w3.org/2000/svg"){r.push("<"+L+" ");var s;for(var i=0;i<x.attributes.length;i++){var j=x.attributes[i];var k=j.value;if(j.name==="id"){k=v._oContainingView.createId(k)}r.push(j.name+"=\""+jQuery.sap.encodeHTML(k)+"\" ")}if(R===true){r.push("data-sap-ui-preserve"+"=\""+v.getId()+"\" ")}r.push(">");b(x);r.push("</"+L+">")}else if(L==="FragmentDefinition"&&x.namespaceURI==="sap.ui.core"){b(x,false,true)}else{var m=e(x);for(var i=0;i<m.length;i++){var o=m[i];if(v.getMetadata().hasAggregation("content")){v.addAggregation("content",o)}else if(v.getMetadata().hasAssociation(("content"))){v.addAssociation("content",o)}r.push(o)}}}else if(x.nodeType===3&&!I){var t=x.textContent||x.text,n=l(x.parentNode);if(t){if(n!="style"){t=jQuery.sap.encodeHTML(t)}r.push(t)}}}function b(x,R,I){var j=x.childNodes;for(var i=0;i<j.length;i++){a(j[i],R,I)}}function f(n,L){var s;var m=sap.ui.getCore().getLoadedLibraries();jQuery.each(m,function(i,o){if(n===o.namespace||n===o.name){s=o.name+"."+((o.tagNames&&o.tagNames[L])||L)}});s=s||n+"."+L;jQuery.sap.require(s);return jQuery.sap.getObject(s)}function d(n){if(n.namespaceURI==="http://www.w3.org/1999/xhtml"||n.namespaceURI==="http://www.w3.org/2000/svg"){var i=n.attributes['id']?n.attributes['id'].textContent||n.attributes['id'].text:null;return[new sap.ui.core.mvc.XMLView({id:i?v._oContainingView.createId(i):undefined,xmlNode:n,containingView:v._oContainingView})]}else{return e(n)}}function e(n){if(l(n)==="ExtensionPoint"&&n.namespaceURI==="sap.ui.core"){return g(n,v)}else{return h(n)}}function g(n,v){var R=undefined;if(sap.ui.core.CustomizingConfiguration){var j=sap.ui.core.CustomizingConfiguration.getViewExtension(C,n.getAttribute("name"));if(j){if(j.className){jQuery.sap.require(j.className);var o=jQuery.sap.getObject(j.className);jQuery.sap.log.info("Customizing: View extension found for extension point '"+n.getAttribute("name")+"' in View '"+C+"': "+j.className+": "+(j.viewName||j.fragmentName));if(j.className==="sap.ui.core.Fragment"){var F=new o({type:j.type,fragmentName:j.fragmentName,containingView:v});R=(jQuery.isArray(F)?F:[F])}else if(j.className==="sap.ui.core.mvc.View"){var v=sap.ui.view({type:j.type,viewName:j.viewName});R=[v]}else{jQuery.sap.log.warning("Customizing: Unknown extension className configured (and ignored) in Component.js for extension point '"+n.getAttribute("name")+"' in View '"+C+"': "+j.className)}}else{jQuery.sap.log.warning("Customizing: no extension className configured in Component.js for extension point '"+n.getAttribute("name")+"' in View '"+C+"': "+j.className)}}else{}}if(!R){R=[];var k=n.childNodes;for(var i=0;i<k.length;i++){var m=k[i];if(m.nodeType===1){R=jQuery.merge(R,d(m))}}}return R||[]}function h(n){var j=n.namespaceURI,o=f(j,l(n)),m=o.getMetadata(),J=m.getJSONKeys(),s={},S="",k=[],O;for(var i=0;i<n.attributes.length;i++){var q=n.attributes[i];var N=q.name;var V=q.value;var I=J[N];if(N==="id"){s[N]=v.createId(V);O=V}else if(N==="class"){S+=V}else if(N==="viewName"){s[N]=V}else if(N==="fragmentName"){s[N]=V;s['containingView']=v._oContainingView}else if(N==="binding"){var B=sap.ui.base.ManagedObject.bindingParser(V,v._oContainingView.oController);s.objectBindings=s.objectBindings||{};s.objectBindings[B.model||undefined]=B}else if(N.indexOf(":")>-1){if(q.namespaceURI==="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1"){var L=l(q);k.push(new sap.ui.core.CustomData({key:L,value:p("any",V,L,v._oContainingView.oController)}))}else if(N.indexOf("xmlns:")!==0){jQuery.sap.log.warning(v+": XMLView parser encountered and ignored attribute '"+N+"' (value: '"+V+"') with unknown namespace")}}else if(I&&I._iKind===0){s[N]=p(I.type,V,N,v._oContainingView.oController)}else if(I&&I._iKind===1&&I.altTypes){s[N]=p(I.altTypes[0],V,N,v._oContainingView.oController)}else if(I&&I._iKind===2){var B=sap.ui.base.ManagedObject.bindingParser(V,v._oContainingView.oController);if(B){s[N]=B}else{jQuery.sap.log.error(v+": aggregations with cardinality 0..n only allow binding paths as attribute value (wrong value: "+N+"='"+V+"')")}}else if(I&&I._iKind===3){s[N]=v.createId(V)}else if(I&&I._iKind===4){s[N]=jQuery.map(V.split(/[\s,]+/g),function(z){return z?v.createId(z):null})}else if(I&&I._iKind===5){var E=v._oContainingView.oController[V];if(typeof(E)!=="function"){jQuery.sap.log.warning(v+": event handler function \""+V+"\" is not a function or does not exist in the controller.")}if(E){E["_sapui_handlerName"]=V;s[N]=[E,v._oContainingView.oController]}}else if(N!=="xmlns"){jQuery.sap.log.warning(v+": XMLTemplateProcessor encountered and ignored unknown attribute '"+N+"' (value: '"+V+"')")}}if(k.length>0){s.customData=k}function t(n,A,u){var z,D;for(z=n.firstChild;z;z=z.nextSibling){if(z.nodeType===1){D=z.namespaceURI===j&&u&&u[l(z)];if(D){t(z,D)}else if(A){var F=d(z);for(var i=0;i<F.length;i++){var G=F[i];var H=A._sName;if(A.multiple){if(!s[H]){s[H]=[]}if(typeof s[H].path==="string"){s[H].template=G}else{s[H].push(G)}}else{s[H]=G}}}else if(l(n)!=="FragmentDefinition"||n.namespaceURI!=="sap.ui.core"){throw new Error("Cannot add direct child without default aggregation defined for control "+m.getElementName())}}else if(z.nodeType===3){if(jQuery.trim(z.textContent||z.text)){throw new Error("Cannot add text nodes as direct child of an aggregation. For adding text to an aggregation, a surrounding html tag is needed")}}}}var A=m.getDefaultAggregation();var u=m.getAllAggregations();t(n,A,u);if(sap.ui.core.CustomizingConfiguration&&O){var w=sap.ui.core.CustomizingConfiguration.getCustomProperties(C,O);if(w){s=jQuery.extend(s,w)}}var y;if(sap.ui.core.mvc.View.prototype.isPrototypeOf(o.prototype)&&typeof o._sType==="string"){y=sap.ui.view(s,undefined,o._sType)}else{y=new o(s)}if(S&&y.addStyleClass){y.addStyleClass(S)}if(!y){y=[]}else if(!jQuery.isArray(y)){y=[y]}return y}}}());