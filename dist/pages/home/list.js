"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),list=function(e){function t(){var e,r,n,i;_classCallCheck(this,t);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.data={list:[],activeIndex:0,resumeType:"",params:{uid:"",page:1,limit:10},count:0},n.config={navigationBarTitleText:n.resumeType},n.methods={selectJob:function(e,t){this.activeIndex=e;var r={};r="团队接单"==this.resumeType?{name:t.job_name,companyName:t.com_name,resumeType:this.resumeType,id:t.job_id}:{name:t.job_name,companyName:t.company_name,resumeType:this.resumeType,id:t.id};var n=JSON.stringify(r);wx.setStorageSync("query",n),wx.redirectTo({url:"/pages/home/addInfo?query="+n})},searchScrollLower:function(){this.count>this.params.limit&&this.count>this.list.length&&(this.params.limit=this.params.limit+10,this.getList())}},i=r,_possibleConstructorReturn(n,i)}return _inherits(t,e),_createClass(t,[{key:"getGeportOrderList",value:function(){var e=this;(0,_http.$http)("/Wxresume/reportOrderList",this.params).then(function(t){e.list=t.data.data||[],e.count=t.data.count,e.$apply()})}},{key:"getInternalInvoiceList",value:function(){var e=this;(0,_http.$http)("/Wxresume/internalInvoiceList",this.params).then(function(t){e.list=t.data.data||[],e.count=t.data.count,e.$apply()})}},{key:"getList",value:function(){"团队接单"==this.resumeType?this.getGeportOrderList():this.getInternalInvoiceList()}},{key:"onShow",value:function(){this.params.uid=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,this.resumeType=wx.getStorageSync("resumeType"),this.getList()}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(list,"pages/home/list"));