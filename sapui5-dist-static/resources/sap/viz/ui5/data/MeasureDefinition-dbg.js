/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.data.MeasureDefinition.
jQuery.sap.declare("sap.viz.ui5.data.MeasureDefinition");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new ui5/data/MeasureDefinition.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getGroup group} : int (default: 1)</li>
 * <li>{@link #getValue value} : any</li>
 * <li>{@link #getName name} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Definition of a single Measure
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.data.MeasureDefinition
 */
sap.ui.core.Element.extend("sap.viz.ui5.data.MeasureDefinition", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"group" : {type : "int", group : "Misc", defaultValue : 1},
		"value" : {type : "any", group : "Data", defaultValue : null},
		"name" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.data.MeasureDefinition with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.viz.ui5.data.MeasureDefinition.extend
 * @function
 */


/**
 * Getter for property <code>group</code>.
 * Measure group this measure belongs to. Order is significant, number should start from 1.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>group</code>
 * @public
 * @name sap.viz.ui5.data.MeasureDefinition#getGroup
 * @function
 */

/**
 * Setter for property <code>group</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iGroup  new value for property <code>group</code>
 * @return {sap.viz.ui5.data.MeasureDefinition} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.MeasureDefinition#setGroup
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * Value for the measure. Usually bound to some model field.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>value</code>
 * @public
 * @name sap.viz.ui5.data.MeasureDefinition#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oValue  new value for property <code>value</code>
 * @return {sap.viz.ui5.data.MeasureDefinition} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.MeasureDefinition#setValue
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * Name of the measure as displayed in the chart
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.viz.ui5.data.MeasureDefinition#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.viz.ui5.data.MeasureDefinition} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.MeasureDefinition#setName
 * @function
 */


// Start of sap/viz/ui5/data/MeasureDefinition.js
sap.viz.ui5.data.MeasureDefinition.prototype._getAdapter = function() {
	var that = this,
	  oBindingInfo = this.getBindingInfo("value"),
	  oValue, sPath, oType, fnFormatter;
	
	// if there is no binding info, then the value is constant
	if ( !oBindingInfo ) {
		oValue = this.getValue();
		return function() { 
			return oValue; 
		};
	}
	
	// otherwise ensure a simple property binding for now
	if ( oBindingInfo.parts.length > 1 ) {
		throw new Error("MeasureDefinition doesn't support calculated bindings yet");
	}
	
	sPath = oBindingInfo.parts[0].path;
	oType = oBindingInfo.parts[0].type;
	fnFormatter = oBindingInfo.formatter;
	
	// for simple binding just resolve the value
	if ( !(oType || fnFormatter) ) {
		return function(oContext) {
			return oContext.getProperty(sPath);
		}
	}

	// else apply type and/or formatter
	return function(oContext) {
		var oValue = oContext.getProperty(sPath);
		if (oType) {
			oValue = oType.formatValue(oValue, "string"); //TODO discuss internal type
		}
		if (fnFormatter) {
			oValue = fnFormatter.call(that, oValue, oContext);
		}
		return oValue;
	};

}
