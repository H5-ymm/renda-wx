"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAllContant=exports.getKeyValue=exports.getArray=void 0;var _contant=require("./../types/contant.js"),_reduxActions=require("./../../npm/redux-actions/lib/index.js"),_http=require("./../../http.js"),getArray=exports.getArray=function(t){var e=[];for(var r in t)e.push(t[r]);return e},getKeyValue=exports.getKeyValue=function(t){for(var e in t)"job_array"!==e&&"money_array"!==e||(t[e]=getArray(t[e]));return t},getAllContant=exports.getAllContant=(0,_reduxActions.createAction)(_contant.GETALLCONTANT,function(t){return new Promise(function(t){(0,_http.$http)("/index/getConstant",{filed:"com_type,com_scale,job_array,money_array,edu_type"}).then(function(e){var r=getKeyValue(e.data);t(r)})})});