"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_moment=require("./../npm/moment/moment.js"),_moment2=_interopRequireDefault(_moment),_util=require("./../util.js"),datePicker=function(e){function t(){var e,a,r,i;_classCallCheck(this,t);for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return a=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.props={date:String},r.data={dateValue:"请选择日期",timeValue:"请选择时间",startValue:"",params:{date:"",time:""},viewType:1},r.watch={params:function(e){if(""!==e.date&&""!==e.time){var t=e.date+" "+e.time;t+="";var a=(0,_moment2.default)(t).valueOf()+"";if(a-(new Date).getTime()<0)return this.timeValue=(0,_moment2.default)(new Date).format("HH:mm"),this.$apply(),(0,_util.wxToast)("不能选择小于当前的时间");a=a.substr(0,10),this.$emit("setDate",a)}},date:function(e){e&&(this.dateValue=(0,_moment2.default)(e).format("YYYY-MM-DD"),this.timeValue=(0,_moment2.default)(e).format("HH:mm"),this.$apply())}},r.methods={bindDateChange:function(e){var t=e.detail.value;if((0,_moment2.default)(t).valueOf()-(0,_moment2.default)(this.startValue).valueOf()<0)return this.dateValue=this.startValue,this.params.date=this.startValue,(0,_util.wxToast)("不能选择小于当天的时间");this.dateValue=t,this.params.date=t,this.$apply()},timeChange:function(e){this.timeValue=e.detail.value,this.params.time=e.detail.value,this.$apply()}},i=a,_possibleConstructorReturn(r,i)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){this.viewType=wx.getStorageSync("rendaViewType"),this.dateValue=(0,_moment2.default)().format("YYYY-MM-DD"),this.timeValue=(0,_moment2.default)().format("HH:mm"),this.params.date=this.dateValue,this.startValue=this.dateValue,this.$apply()}}]),t}(_wepy2.default.component);exports.default=datePicker;