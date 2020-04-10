"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_receiptItem=require("./receiptItem.js"),_receiptItem2=_interopRequireDefault(_receiptItem),_util=require("./../util.js"),receiptList=function(e){function t(){var e,i,r,n;_classCallCheck(this,t);for(var s=arguments.length,o=Array(s),p=0;p<s;p++)o[p]=arguments[p];return i=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.$repeat={list:{com:"receiptItem",props:"itemValue.sync"}},r.$props={receiptItem:{"xmlns:v-bind":{value:"",for:"list",item:"rItem",index:"index",key:"index"},"v-bind:itemValue.sync":{value:"rItem",type:"item",for:"list",item:"rItem",index:"index",key:"index"}}},r.$events={},r.components={receiptItem:_receiptItem2.default},r.props={list:Array,receiptType:{type:Number,default:0}},r.methods={viewDetail:function(e){if(this.receiptType){var t={entry_status:e.entry_status,invoice_status:e.invoice_status,interview_status:e.interview_status,view_time:e.view_time,entry_time:e.entry_time,is_video:e.is_video};wx.setStorageSync("statusObj",JSON.stringify(t)),!e.view_time&&1===this.receiptType||2===this.receiptType&&e.interview_status<=1&&!e.entry_time?this.$emit("setTime",e.id):wx.navigateTo({url:"/pages/companyView/checkResumeList?query="+this.receiptType+"&job_id="+e.id})}else e.status<=1?(0,_util.wxNavigateTo)("/pages/companyView/jobDetail?query="+e.id):(0,_util.wxNavigateTo)("/pages/companyView/viewJob?query="+e.id)}},n=i,_possibleConstructorReturn(r,n)}return _inherits(t,e),t}(_wepy2.default.component);exports.default=receiptList;