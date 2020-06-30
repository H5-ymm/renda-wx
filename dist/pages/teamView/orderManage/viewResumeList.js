"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../../http.js"),_tabBar=require("./../../../components/tabBar.js"),_tabBar2=_interopRequireDefault(_tabBar),_search=require("./../../../components/search.js"),_search2=_interopRequireDefault(_search),_teamResumeList=require("./../../../components/teamResumeList.js"),_teamResumeList2=_interopRequireDefault(_teamResumeList),_viewNoticeModal=require("./../../../components/viewNoticeModal.js"),_viewNoticeModal2=_interopRequireDefault(_viewNoticeModal),_util=require("./../../../util.js"),viewResumeList=function(e){function t(){var e,i,a,n;_classCallCheck(this,t);for(var r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];return i=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.$repeat={},a.$props={tabBar:{"xmlns:v-bind":"","v-bind:tabBarList.sync":"tabBarList","xmlns:wx":""},search:{class:"search-box {{isSeachWidth?'weui-flex__item':''}}",bindsearchValue:"searchValue"},teamResumeList:{"v-bind:list.sync":"newList","v-bind:receiptType.sync":"receiptType"},viewNoticeModal:{"v-bind:isScaleModal.sync":"isModal","v-bind:height.sync":"modalHeight","v-bind:timeInfo.sync":"timeInfo","v-bind:title.sync":"title"}},a.$events={},a.components={tabBar:_tabBar2.default,search:_search2.default,teamResumeList:_teamResumeList2.default,viewNoticeModal:_viewNoticeModal2.default},a.data={tabBarList:[{name:"全部简历",num:0},{name:"待审核",num:0},{name:"已同意",num:0},{name:"已拒绝",num:0}],list:[],params:{uid:"",job_id:"",status:0,type:""},count:0,activeIndex:0,isSeachWidth:!1,isModal:!0,modalHeight:860,receiptType:2,job_id:"",timeInfo:{},id:"",receiptTime:"",apply_id:""},a.computed={newList:function(){return(0,_util.getList)(this.list,"addtime")},viewAndEntryNotice:function(){return 2===this.receiptType?"/apply/getViewtime":"/apply/getOffermsg"},title:function(){return 2===this.receiptType?"面试":"入职"}},a.events={searchValue:function(e){a.params=Object.assign(a.params,{where:e}),a.getCheckList()},inputFocus:function(){a.isSeachWidth=!0,a.$apply()},switchTab:function(e){a.activeIndex=e,a.params.status=e,a.getCheckList(),a.$apply()}},a.methods={recommendResume:function(){(0,_util.wxRedirectTo)("/pages/home/index")},viewNotice:function(){this.viewTimeInfo()}},n=i,_possibleConstructorReturn(a,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.receiptType=Number(e.query),this.params.type=this.receiptType-1,this.job_id=e.id,this.apply_id=e.apply_id,this.params.job_id=e.id,this.receiptTime=wx.getStorageSync("receiptTime"),console.log(this.receiptTime),this.$apply(),wx.setNavigationBarTitle({title:this.getTitle(this.receiptType)})}},{key:"onShow",value:function(){this.params.uid=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,this.getCheckList(),this.$apply()}},{key:"viewTimeInfo",value:function(){var e=this;(0,_http.$http)(this.viewAndEntryNotice,{apply_id:this.apply_id}).then(function(t){var i={};i=2===e.receiptType?{time:t.data.view_time,content:t.data.content}:{time:t.data.entry_time,content:t.data.entry_comtent},e.timeInfo=i,e.isModal=!e.isModal,e.$apply()})}},{key:"getCheckList",value:function(){var e=this;(0,_http.$http)("/apply/getList_resume",this.params).then(function(t){e.list=t.data.data||[],(t.data.num||[]).forEach(function(t,i){e.tabBarList[i].num=t}),e.count=t.data.count,e.$apply()})}},{key:"getTitle",value:function(e){return 2===e?"简历列表":3===e?"面试审核":"入职审核"}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(viewResumeList,"pages/teamView/orderManage/viewResumeList"));