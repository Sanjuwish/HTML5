// Copyright (c) 2013 SAP AG, All Rights Reserved
(function(){"use strict";jQuery.sap.declare("sap.ushell.renderers.fiori2.Renderer");jQuery.sap.require("sap.ui.core.UIComponent");jQuery.sap.require("sap.ushell.resources");sap.ui.core.UIComponent.extend("sap.ushell.renderers.fiori2.Renderer",{metadata:{version:"1.16.4",dependencies:{version:"1.16.4",libs:["sap.ui.core","sap.ui.unified","sap.m"],components:[]}}});sap.ushell.renderers.fiori2.Renderer.prototype.createContent=function(){return sap.ui.view({type:sap.ui.core.mvc.ViewType.JS,viewName:"sap.ushell.renderers.fiori2.Shell"})}}());