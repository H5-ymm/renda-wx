"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),_util=require("./../../util.js"),_tabBarBottom=require("./../../components/tabBarBottom.js"),_tabBarBottom2=_interopRequireDefault(_tabBarBottom),message=function(t){function e(){var t,r,o,a;_classCallCheck(this,e);for(var i=arguments.length,n=Array(i),s=0;s<i;s++)n[s]=arguments[s];return r=o=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(n))),o.$repeat={},o.$props={tabBarBottom:{"xmlns:v-bind":"","v-bind:tabBarIndex.sync":"tabBarIndex","v-bind:usertype.sync":"usertype"}},o.$events={},o.components={tabBarBottom:_tabBarBottom2.default},o.data={teamData:{},usertype:0,tabBarIndex:2,rendaUserTeamType:0,params:{uid:"",limit:10,page:0},list:[],count:0},o.config={navigationBarTitleText:"消息管理"},o.computed={urlApi:function(){return 1==this.usertype?"/personinfo/getcom_msglist":"/personinfo/getMsg"},newList:function(){return(0,_util.getList)(this.list,"view_time","YYYY-MM-DD HH:mm")}},o.methods={viewMessage:function(t){1==this.usertype?(0,_util.wxNavigateTo)("/pages/message/dialogBox?query="+t.id):(0,_util.wxNavigateTo)("/pages/message/personalDialogBox?query="+t.id)},searchScrollLower:function(){this.count>this.list.length&&this.count>this.params.limit&&(this.params.limit=this.params.limit+10,this.getMsglist())}},a=r,_possibleConstructorReturn(o,a)}return _inherits(e,t),_createClass(e,[{key:"onLoad",value:function(){this.usertype=wx.getStorageSync("rendaUserType"),1==this.usertype&&(this.tabBarIndex=2),this.params.uid=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,this.$apply()}},{key:"onShow",value:function(){this.getMsglist()}},{key:"getMsglist",value:function(){var t=this;(0,_http.$http)(this.urlApi,this.params).then(function(e){t.list=e.data.data||[],t.list.forEach(function(t){t.logo_url&&(-1==t.logo_url.indexOf("http")?t.logo_url=(0,_util.getImgUrl)(t.logo_url):t.logo_url=t.logo_url)}),t.count=e.data.count,t.$apply()})}}]),e}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(message,"pages/message/index"));