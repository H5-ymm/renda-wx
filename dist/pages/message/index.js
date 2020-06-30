"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),_util=require("./../../util.js"),_tabBarBottom=require("./../../components/tabBarBottom.js"),_tabBarBottom2=_interopRequireDefault(_tabBarBottom),message=function(t){function e(){var t,r,n,o;_classCallCheck(this,e);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),n.$repeat={},n.$props={tabBarBottom:{"xmlns:v-bind":"","v-bind:tabBarIndex.sync":"tabBarIndex","v-bind:usertype.sync":"usertype"}},n.$events={},n.components={tabBarBottom:_tabBarBottom2.default},n.data={teamData:{},usertype:0,tabBarIndex:2,rendaUserTeamType:0,params:{uid:"",limit:10,page:0},list:[],count:0},n.config={navigationBarTitleText:"消息管理"},n.computed={urlApi:function(){return 1==this.usertype?"/personinfo/getcom_msglist":"/personinfo/getMsg"},newList:function(){return(0,_util.getList)(this.list,"view_time","YYYY-MM-DD HH:mm")},delUrl:function(){return 1==this.usertype?"/Personinfo/delmsg_com":"/Personinfo/delmsg_per"}},n.methods={viewMessage:function(t){1==this.usertype?(0,_util.wxNavigateTo)("/pages/message/dialogBox?query="+t.id):(0,_util.wxNavigateTo)("/pages/message/personalDialogBox?query="+t.id)},onDel:function(t){var e=this;if(!t.status)return(0,_util.wxToast)("面试没有结束，不能删除");var r={uid:this.params.uid,id:t.id};(0,_util.wxShowModal)("","确定删除消息吗?").then(function(t){e.delMsg(r)}).catch(function(){console.log("取消")})},searchScrollLower:function(){this.count>this.list.length&&this.count>this.params.limit&&(this.params.limit=this.params.limit+10,this.getMsglist())}},o=r,_possibleConstructorReturn(n,o)}return _inherits(e,t),_createClass(e,[{key:"onLoad",value:function(){this.params.uid=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,this.usertype=wx.getStorageSync("rendaUserType"),1==this.usertype?this.tabBarIndex=2:this.tabBarIndex=0,this.$apply()}},{key:"onShow",value:function(){this.getMsglist()}},{key:"getMsglist",value:function(){var t=this;(0,_http.$http)(this.urlApi,this.params).then(function(e){t.list=e.data.data||[],t.list.forEach(function(t){t.logo_url&&(-1==t.logo_url.indexOf("http")?t.logo_url=(0,_util.getImgUrl)(t.logo_url):t.logo_url=t.logo_url)}),t.count=e.data.count,t.$apply()})}},{key:"delMsg",value:function(t){var e=this;(0,_http.$http)(this.delUrl,t).then(function(t){t.data&&e.getMsglist()})}}]),e}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(message,"pages/message/index"));