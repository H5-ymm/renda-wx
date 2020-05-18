"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),_search=require("./../../components/search.js"),_search2=_interopRequireDefault(_search),_teamUser=require("./../../components/teamUser.js"),_teamUser2=_interopRequireDefault(_teamUser),_modalAddUser=require("./../../components/modalAddUser.js"),_modalAddUser2=_interopRequireDefault(_modalAddUser),_util=require("./../../util.js"),userList=function(e){function t(){var e,a,r,s;_classCallCheck(this,t);for(var i=arguments.length,n=Array(i),o=0;o<i;o++)n[o]=arguments[o];return a=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n))),r.$repeat={},r.$props={search:{class:"weui-cell weui-flex start page_card",bindsearchValue:"searchValue"},teamUser:{"xmlns:v-bind":"","v-bind:list.sync":"list"},modalAddUser:{"v-bind:isScaleModal.sync":"isModal",bindhandleClose:"handleClose",bindhandleOk:"handleOk","v-bind:title.sync":"title","v-bind:height.sync":"modalHeight","v-bind:type.sync":"type","v-bind:imgUrl.sync":"qrCode"}},r.$events={},r.components={search:_search2.default,teamUser:_teamUser2.default,modalAddUser:_modalAddUser2.default},r.data={tabBarList:[],list:[],count:0,activeIndex:0,isSeachWidth:!1,modalHeight:520,isModal:!0,title:"请选择添加方式",id:"",params:{uid:"",page:1,limit:10},qrCode:"",type:0,teamId:"",rendaUserTeamType:1},r.config={navigationBarTitleText:"成员列表"},r.events={searchValue:function(e){r.params=Object.assign(r.params,{keyword:e}),r.getUserList()},handleOk:function(e){0===e?(r.isModal=!r.isModal,(0,_util.wxNavigateTo)("/pages/teamView/userInfo")):(r.activeIndex=e,r.createQrcode())},handleClose:function(){r.isModal=!r.isModal,r.$apply()}},r.methods={addUser:function(){this.type=0,this.isModal=!this.isModal,this.$apply()},searchScrollLower:function(){this.count>this.list.length&&this.count>this.params.limit&&(this.params.limit=this.params.limit+10,this.getUserList())}},s=a,_possibleConstructorReturn(r,s)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.params.uid=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,this.rendaUserTeamType=Number(wx.getStorageSync("rendaUserTeamType")),this.teamId=wx.getStorageSync("rendaUserTeamId"),console.log(this.teamId),console.log("获取"),this.$apply()}},{key:"getUserList",value:function(){var e=this;(0,_http.$http)("/userinfo/teamUserList",this.params).then(function(t){e.list=t.data.data||[],console.log(e.list),e.count=t.data.count,e.$apply()})}},{key:"onShow",value:function(){this.getUserList()}},{key:"createQrcode",value:function(){var e=this,t={page:"pages/login/welcome?uid="+this.params.uid+"&teamId="+this.teamId};this.isModal=!1,(0,_http.$http)("/login/get_qrcode",t).then(function(t){t.data&&(e.type=1,wx.removeStorageSync("rendaUserTeamId"),e.qrCode=(0,_util.getImgUrl)(t.data),e.$apply())})}},{key:"onShareAppMessage",value:function(e){return{title:"邀请成员加入团队",imageUrl:this.qrCode,path:"/pages/login/welcome?uid="+this.params.uid+"&teamId="+this.teamId}}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(userList,"pages/teamView/userList"));