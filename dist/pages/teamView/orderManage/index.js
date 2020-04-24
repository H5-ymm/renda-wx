"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../../http.js"),_util=require("./../../../util.js"),_tabBarBottom=require("./../../../components/tabBarBottom.js"),_tabBarBottom2=_interopRequireDefault(_tabBarBottom),teamView=function(e){function t(){var e,a,r,n;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return a=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.$repeat={},r.$props={tabBarBottom:{"xmlns:v-bind":"","v-bind:tabBarIndex.sync":"tabBarIndex","v-bind:usertype.sync":"usertype"}},r.$events={},r.components={tabBarBottom:_tabBarBottom2.default},r.data={userTeamType:1,menus:[],usertype:2,tabBarIndex:1},r.config={navigationBarTitleText:"接单管理"},r.methods={viewInfo:function(e){var t=e.url.split("=")[1];e.url.indexOf("orderManage")>-1&&wx.setStorageSync("receiptType",t),(0,_util.wxNavigateTo)(e.url)},createOrderTaking:function(){(0,_util.wxNavigateTo)("/pages/companyView/ceateList")}},n=a,_possibleConstructorReturn(r,n)}return _inherits(t,e),_createClass(t,[{key:"getMenus",value:function(e){var t=[],a=[],r=[{title:"简历初筛",subTitle:"推荐简历给企业筛选，通过简历可参加面试",icon:"https://a.rsd123.com/image/images/orderTaking/icon3.png",url:"/pages/teamView/orderManage/list?query=2",badgeNum:0},{title:"面试结果",subTitle:"已通过面试简历，可参加入职",icon:"https://a.rsd123.com/image/images/orderTaking/icon4.png",url:"/pages/teamView/orderManage/list?query=3",badgeNum:0},{title:"入职名单",subTitle:"已入职简历",icon:"https://a.rsd123.com/image/images/orderTaking/icon5.png",url:"/pages/teamView/orderManage/list?query=4",badgeNum:0}];return t=1==e?[{title:"申请接单",subTitle:"已申请接单的审核情况",icon:"https://a.rsd123.com/image/images/orderTaking/icon6.png",url:"/pages/teamView/orderManage/list?query=0",badgeNum:0},{title:"接单分配",subTitle:"已确定合作企业接单",icon:"https://a.rsd123.com/image/images/orderTaking/icon7.png",url:"/pages/teamView/orderManage/list?query=1",badgeNum:0}]:2==e?[{title:"接单分配",subTitle:"已确定合作企业接单",icon:"https://a.rsd123.com/image/images/orderTaking/icon7.png",url:"/pages/companyView/checkTeam",badgeNum:0}]:[],a=t.concat(r),this.getUnreadNum(a,e),a}},{key:"getUnreadNum",value:function(e,t){var a=this,r=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid;(0,_http.$http)("/apply/getStatistics",{uid:r}).then(function(r){1==t?(e[0].badgeNum=r.data.applynummsg,e[1].badgeNum=r.data.orderDistribution,e[2].badgeNum=r.data.applyshmsg,e[3].badgeNum=r.data.applyviewmsg,e[4].badgeNum=r.data.applynumentrymsg):2==t?(e[0].badgeNum=r.data.orderDistribution,e[1].badgeNum=r.data.applyshmsg,e[2].badgeNum=r.data.applyviewmsg,e[3].badgeNum=r.data.applynumentrymsg):(e[0].badgeNum=r.data.applyshmsg,e[1].badgeNum=r.data.applyviewmsg,e[2].badgeNum=r.data.applynumentrymsg),a.$apply()})}},{key:"onLoad",value:function(){this.userTeamType=wx.getStorageSync("rendaUserTeamType")}},{key:"onShow",value:function(){this.menus=this.getMenus(this.userTeamType)}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(teamView,"pages/teamView/orderManage/index"));