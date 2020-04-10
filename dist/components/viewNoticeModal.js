"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../http.js"),_moment=require("./../npm/moment/moment.js"),_moment2=_interopRequireDefault(_moment),viewNoticeModal=function(t){function e(){var t,o,i,n;_classCallCheck(this,e);for(var r=arguments.length,s=Array(r),l=0;l<r;l++)s[l]=arguments[l];return o=i=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),i.props={isScaleModal:Boolean,height:Number,title:String,timeInfo:Object},i.data={isShow:!1,form:{}},i.methods={handleClose:function(){this.isShow=!1,this.$apply(),this.$emit("handleClose")},handleOk:function(){this.isShow=!1,this.$apply(),this.$emit("handleClose")}},i.watch={timeInfo:function(t){if(t&&t.content){var e=/^[0-9]+.?[0-9]*$/;console.log(t.time),e.test(t.time)?this.form.time=_moment2.default.unix(t.time).format("YYYY-MM-DD HH:mm"):this.form.time=t.time;var o=t.content.split("&");this.form.content=o[1];var i=o[0].split("/");this.form.address=i[0]+i[1]+i[2],this.form.detailAddress=i[3],this.$apply()}},isScaleModal:function(t){t?(this.activeIndex=0,this.isShow=!1):this.isShow=!0,this.$apply()}},n=o,_possibleConstructorReturn(i,n)}return _inherits(e,t),e}(_wepy2.default.component);exports.default=viewNoticeModal;