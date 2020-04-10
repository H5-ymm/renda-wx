"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),_util=require("./../../util.js"),_tabBarBottom=require("./../../components/tabBarBottom.js"),_tabBarBottom2=_interopRequireDefault(_tabBarBottom),Index=function(e){function t(){var e,a,n,r;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return a=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.$repeat={},n.$props={tabBarBottom:{"usertype.sync":"usertype","xmlns:v-bind":"","v-bind:tabBarIndex.sync":"tabBarIndex"}},n.$events={},n.components={tabBarBottom:_tabBarBottom2.default},n.data={menus:[{title:"审核发单",subTitle:"已发布职位的审核情况",icon:"https://a.rsd123.com/image/images/orderTaking/icon1.png",url:"/pages/companyView/checkReceipt",badgeNum:0},{title:"审核团队",subTitle:"选择确定合作团队",icon:"https://a.rsd123.com/image/images/orderTaking/icon2.png",url:"/pages/companyView/checkTeam",badgeNum:0},{title:"简历初筛",subTitle:"团队推荐简历等待筛选，确认面试信息",icon:"https://a.rsd123.com/image/images/orderTaking/icon3.png",url:"/pages/companyView/resumeSiftings?query=1",badgeNum:0},{title:"面试结果",subTitle:"已完成面试，确认入职名单、时间及入职信息",icon:"https://a.rsd123.com/image/images/orderTaking/icon4.png",url:"/pages/companyView/resumeSiftings?query=2",badgeNum:0},{title:"入职名单",subTitle:"已完成入职，确认入职名单",icon:"https://a.rsd123.com/image/images/orderTaking/icon5.png",url:"/pages/companyView/resumeSiftings?query=3",badgeNum:0}],usertype:"1",tabBarIndex:0},n.config={navigationBarTitleText:"发单管理"},n.methods={viewInfo:function(e){if(e.url.indexOf("checkReceipt")>-1&&wx.setStorageSync("receiptType",0),e.url.indexOf("resumeSiftings")>-1){var t=e.url.split("=")[1];wx.setStorageSync("receiptType",t)}(0,_util.wxNavigateTo)(e.url)},createOrderTaking:function(){(0,_util.wxNavigateTo)("/pages/companyView/ceateList")}},r=a,_possibleConstructorReturn(n,r)}return _inherits(t,e),_createClass(t,[{key:"getUnreadNum",value:function(){var e=this,t=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid;(0,_http.$http)("/company/obtainAuditedTeamNum",{uid:t}).then(function(t){e.menus[0].badgeNum=t.data.teamInvoiceNum,e.menus[1].badgeNum=t.data.teamNum,e.menus[2].badgeNum=t.data.resumeNum,e.menus[3].badgeNum=t.data.interviewNum,e.menus[4].badgeNum=t.data.entryNum,e.$apply()})}},{key:"saveUser",value:function(e){var t=JSON.parse(wx.getStorageSync("wxInfo")),a={uid:wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,head_img:t.head_img};(0,_http.$http)("/userinfo/editUserInfo",a).then(function(e){console.log(e)})}},{key:"onShow",value:function(){this.getUnreadNum(),(!wx.getStorageSync("userInfo")||wx.getStorageSync("userInfo")&&!JSON.parse(wx.getStorageSync("userInfo")).head_img)&&this.saveUser()}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/companyView/index"));