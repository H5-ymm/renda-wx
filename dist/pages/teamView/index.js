"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),_moment=require("./../../npm/moment/moment.js"),_moment2=_interopRequireDefault(_moment),_base=require("./../../base/base.js"),_util=require("./../../util.js"),_tabBarBottom=require("./../../components/tabBarBottom.js"),_tabBarBottom2=_interopRequireDefault(_tabBarBottom),teamView=function(e){function t(){var e,i,a,n;_classCallCheck(this,t);for(var r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];return i=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.$repeat={},a.$props={tabBarBottom:{"xmlns:v-bind":"","v-bind:tabBarIndex.sync":"tabBarIndex","v-bind:usertype.sync":"usertype"}},a.$events={},a.components={tabBarBottom:_tabBarBottom2.default},a.data={usertype:2,tabBarIndex:0,rendaUserTeamType:0,banner:[],params:{uid:"",page:1,limit:10,required_number:"",sex:""},list:[],count:0,requirePersonList:_base.requirePersonList,moneyTypeList:_base.moneyTypeList1,sexList:_base.sexList,activeIndex:-1,sexIndex:-1,moneyIndex:-1,visibile:!1,sexVisibile:!1,moneyVisibile:!1,areaName:"全国"},a.config={navigationBarTitleText:"首页"},a.computed={menus:function(){var e=[{title:"添加简历",icon:"../../images/team/icon1.png",url:"/pages/home/addInfo"},{title:"简历列表",icon:"../../images/team/icon3.png",url:"/pages/home/index"},{title:"成员管理",icon:"../../images/team/icon2.png",url:"/pages/teamView/userList"}];if(this.rendaUserTeamType)if(1==this.rendaUserTeamType){var t={title:"部门管理",icon:"../../images/team/icon4.png",url:"/pages/teamView/department/index"};e.splice(4,0,t)}else e=e.splice(0);return e}},a.methods={viewInfo:function(e){wx.navigateTo({url:e.url})},viewDetail:function(e){(0,_util.wxNavigateTo)("/pages/companyView/viewJob?query="+e.id+"&apply=1")},selectCity:function(){(0,_util.wxNavigateTo)("/pages/teamView/cityView")},searchScrollLower:function(){this.count>this.list.length&&this.count>this.params.limit&&(this.params.limit=this.params.limit+10,this.getReceiptList())},showModal:function(e){1==e?this.visibile=!this.visibile:2==e?this.sexVisibile=!this.sexVisibile:this.moneyVisibile=!this.moneyVisibile},select:function(e,t,i){"required_number"==i?this.activeIndex=t:"sex"==i?this.sexIndex=t:this.moneyIndex=t,this.params[i]=e.value,this.$apply(),this.getReceiptList()},applyRecepit:function(e){var t={job_id:e.id,uid:this.params.uid};this.setReceipt(t)}},n=i,_possibleConstructorReturn(a,n)}return _inherits(t,e),_createClass(t,[{key:"setReceipt",value:function(e){(0,_http.$http)("/apply/add_apply",e).then(function(e){e.data?((0,_util.wxToast)("接单成功"),wx.setStorageSync("receiptType",0),(0,_util.wxNavigateTo)("/pages/teamView/orderManage/list?query=0")):(0,_util.wxToast)("接单失败")})}},{key:"getBanner",value:function(){var e=this;(0,_http.$http)("/receipt/advertisementList",{page:1,limit:3}).then(function(t){var i=t.data.data||[];i.forEach(function(e){e.image=(0,_util.getImgUrl)(e.image)}),e.banner=i,e.$apply()})}},{key:"getReceiptList",value:function(e){var t=this;(0,_http.$http)("/receipt/receiptList",this.params).then(function(e){t.visibile=!1,t.sexVisibile=!1,t.moneyVisibile=!1;var i=[];i=e.data.data?e.data.data.data:[],i.forEach(function(e){e.utime-(0,_moment2.default)().valueOf()>0?e.utime=_moment2.default.unix(e.utime).format("HH:ss"):e.utime=_moment2.default.unix(e.utime).format("YYYY-MM-DD")}),t.list=i,t.count=e.data.count,t.$apply()})}},{key:"getTeamInfoAPi",value:function(e){var t=this;(0,_http.$http)("/Userinfo/getteaminfo",{uid:e}).then(function(e){t.rendaUserTeamType=e.data.grade_num,wx.setStorageSync("rendaUserTeamId",e.data.team_id),wx.setStorageSync("rendaUserTeamType",e.data.grade_num),wx.setStorageSync("rendaDradeId",e.data.grade_id),t.$apply()})}},{key:"saveUser",value:function(e){var t=JSON.parse(wx.getStorageSync("wxInfo")),i={uid:e,head_img:t.head_img};(0,_http.$http)("/userinfo/editUserInfo",i).then(function(e){console.log(e)})}},{key:"onLoad",value:function(e){this.params.uid=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,e&&e.code?(this.params.three_cityid=e.code,this.areaName=e.name):this.areaName="全国",this.$apply(),this.getBanner(),this.getTeamInfoAPi(this.params.uid),(!wx.getStorageSync("userInfo")||wx.getStorageSync("userInfo")&&!JSON.parse(wx.getStorageSync("userInfo")).head_img)&&this.saveUser(this.params.uid)}},{key:"onShow",value:function(){this.getReceiptList()}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(teamView,"pages/teamView/index"));