"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_modal=require("./../../components/modal.js"),_modal2=_interopRequireDefault(_modal),_createForm=require("./../../components/createForm.js"),_createForm2=_interopRequireDefault(_createForm),_http=require("./../../http.js"),_util=require("./../../util.js"),lock=!1,ceateList=function(e){function t(){var e,r,o,n;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.$repeat={},o.$props={teamModal:{"v-bind:isScaleModal.sync":"isModal",bindhandleOk:"handleOk","v-bind:height.sync":"modalHeight","v-bind:modalObj.sync":"modalObj",class:"orderModal"},createForm:{"xmlns:v-bind":"","v-bind:typeBtn.sync":"typeBtn",bindsubmit:"submit",bindprePage:"prePage"}},o.$events={},o.components={teamModal:_modal2.default,createForm:_createForm2.default},o.data={form:{uid:wx.getStorageSync("rendaUid")},modalHeight:460,modalObj:{title:"发单成功",subTitle:"",imgBg:"https://a.rsd123.com/image/images/success.png"},isModal:!0,preForm:"",typeBtn:1},o.config={navigationBarTitleText:"更多信息"},o.events={handleOk:function(e){o.isModal=!0,o.$apply(),wx.setStorageSync("receiptType",0),(0,_util.wxReLaunch)("/pages/companyView/checkReceipt")},submit:function(e){var t=Object.assign(JSON.parse(o.preForm),e,o.form);t.uid=wx.getStorageSync("rendaUid"),lock||o.createOrderApi(t)},prePage:function(){wx.setStorageSync("preForm",o.preForm),(0,_util.wxReLaunch)("/pages/companyView/ceateList")}},n=r,_possibleConstructorReturn(o,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.preForm=e.query}},{key:"createOrderApi",value:function(e){var t=this;lock=!0,(0,_http.$http)("/enterpriseinvoice/createInvoice",e).then(function(e){lock=!1,e.data?(wx.removeStorageSync("preForm"),t.isModal=!1,t.$apply()):(0,_util.wxToast)("发单失败")}).catch(function(e){lock=!1,(0,_util.wxToast)(e.status.remind||"发单失败"),t.$apply()})}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ceateList,"pages/companyView/ceateMoreList"));