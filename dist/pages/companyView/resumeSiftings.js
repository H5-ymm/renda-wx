"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),_search=require("./../../components/search.js"),_search2=_interopRequireDefault(_search),_receiptList=require("./../../components/receiptList.js"),_receiptList2=_interopRequireDefault(_receiptList),_selectModal=require("./../../components/selectModal.js"),_selectModal2=_interopRequireDefault(_selectModal),_noticeModal=require("./../../components/noticeModal.js"),_noticeModal2=_interopRequireDefault(_noticeModal),_util=require("./../../util.js"),resumeSiftings=function(e){function t(){var e,i,n,a;_classCallCheck(this,t);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return i=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.$repeat={},n.$props={search:{bindsearchValue:"searchValue",class:"weui-cell weui-flex start page_card"},selectModal:{"v-bind:isScaleModal.sync":"isSelectModal","v-bind:menus.sync":"menus",bindselectOk:"selectOk","v-bind:title.sync":"modalTitle"},receiptAllList:{"xmlns:v-bind":"","v-bind:list.sync":"list","v-bind:receiptType.sync":"receiptType",bindsetTime:"setTime"},noticeModal:{"v-bind:isScaleModal.sync":"isModal","v-bind:height.sync":"modalHeight",bindhandleClose:"handleClose","v-bind:title.sync":"title","v-bind:type.sync":"viewType"}},n.$events={},n.components={search:_search2.default,selectModal:_selectModal2.default,receiptAllList:_receiptList2.default,noticeModal:_noticeModal2.default},n.data={list:[],params:{uid:"",page:1,limit:10},count:0,receiptType:0,isModal:!0,viewType:1,modalHeight:930,title:"面试",job_id:"",isSelectModal:!0,modalTitle:"请选择面试方式",menus:[{icon:"../../images/orderTaking/icon2.png",title:"正常面试"},{icon:"../../images/orderTaking/icon1.png",title:"视频面试"}]},n.computed={urlApi:function(){return 1===this.receiptType?"/company/CompanyResumeList":2===this.receiptType?"/company/invoiceInterviewList":"/company/entryInvoiceList"},timeUrlApi:function(){return 1===this.receiptType?"/company/editInterviewTime":"/company/editEntryTime"}},n.events={searchValue:function(e){n.params=Object.assign(n.params,{job_name:e}),n.getJobList()},setTime:function(e){n.job_id=e,1==n.receiptType?wx.getStorageSync("rendaViewType")?wx.navigateTo({url:"/pages/companyView/checkResumeList?query="+n.receiptType+"&job_id="+n.job_id+"&setTime="+wx.getStorageSync("rendaViewType")}):(n.title="面试",n.isSelectModal=!n.isSelectModal):(n.title="入职",n.isModal=!n.isModal,wx.setStorageSync("rendaViewType",1)),n.$apply()},handleClose:function(){n.isModal=!n.isModal,n.$apply()},setAllTime:function(e){n.setDate(e)},selectOk:function(e){if(0==e)n.isModal=!n.isModal,n.$apply();else{var t=Number(e)+1;wx.navigateTo({url:"/pages/companyView/checkResumeList?query="+n.receiptType+"&job_id="+n.job_id+"&setTime="+t})}wx.setStorageSync("rendaViewType",Number(e)+1)}},n.methods={searchScrollLower:function(){this.count>this.list.length&&this.count>this.params.limit&&(this.params.limit=this.params.limit+10,this.getJobList())}},a=i,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"getTitle",value:function(e){return 1===e?"简历初筛":2===e?"面试结果":"入职名单"}},{key:"getJobList",value:function(){var e=this;(0,_http.$http)(this.urlApi,this.params).then(function(t){e.list=t.data.data||[],e.count=t.data.count,e.$apply()})}},{key:"setDate",value:function(e){var t=this,i={uid:this.params.uid,job_id:this.job_id,time:e.time,content:e.content};(0,_http.$http)(this.timeUrlApi,i).then(function(e){e.data?(t.isModal=!0,t.$apply(),t.getJobList()):(0,_util.wxToast)("设置时间失败")})}},{key:"onLoad",value:function(e){e.jobId&&(this.params.jobId=e.jobId),this.receiptType=Number(e.query),wx.setNavigationBarTitle({title:this.getTitle(this.receiptType)}),this.params.uid=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,this.$apply()}},{key:"onShow",value:function(){this.getJobList()}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(resumeSiftings,"pages/companyView/resumeSiftings"));