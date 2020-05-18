"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_util=require("./../util.js"),actionSheet=function(e){function t(){var e,o,n,r;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.props={isScaleModal:Boolean,height:Number,modalObj:Object,type:{type:Number,default:0},imgUrl:String,openType:{type:String,default:""}},n.data={isShow:!1},n.methods={saveImg:function(){var e=this;wx.getSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?e.saveImgUrl(e.imgUrl):wx.authorize({scope:"scope.writePhotosAlbum",success:function(){e.saveImgUrl(e.imgUrl)},fail:function(e){console.log(e)}})},fail:function(e){console.log(e)}})},handleOk:function(){this.isShow=!1,this.$apply(),this.$emit("handleOk",this.imgUrl)}},n.watch={isScaleModal:function(e){this.isShow=!e,this.$apply()}},r=o,_possibleConstructorReturn(n,r)}return _inherits(t,e),_createClass(t,[{key:"saveImgUrl",value:function(e){wx.getImageInfo({src:e,success:function(e){var t=e.path;wx.saveImageToPhotosAlbum({filePath:t,success:function(e){console.log(e),(0,_util.wxToast)("保存成功")},fail:function(e){console.log(e),(0,_util.wxToast)("保存失败")}})},fail:function(e){console.log(e)}})}}]),t}(_wepy2.default.component);exports.default=actionSheet;