/*!
 * XogusTools.Object(XObject) v0.9.0 (http://)
 * Copyright 2016- Taehyun Kim.
 * Licensed under the MIT license
 */

'use strict';

var XObject = {

	init: function() {
		if (this.initialized)
			return;

		//	Override Object methods
		if (!Object.prototype.getOwnProperties) {
        	Object.prototype.getOwnProperties = function() {
        		return XObject.getOwnProperties(this);
        	}
        }

		this.initialize = true;
	},

	//	get list of properties whitch o has.
	getOwnProperties : function(o) {
		//	if given object is null, return empty array
		if (!o)
			return [];

        var result = [];
        //  for all keys in o
        for(var key in o) {
           // filter keys which owned by object o
           if( o.hasOwnProperty(key) ) {
                result.push(key);
           } 
        }

        //  return result;
        return result;
	}
};

XObject.init();
