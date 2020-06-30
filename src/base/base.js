export const list1 = [{
    pagePath: '/pages/companyView/index',
    text: '发单管理',
    selected: true,
    iconPath: '/images/orderTaking/list.png',
    selectedIconPath: '/images/orderTaking/list-active.png'
},
{
    pagePath: '/pages/companyView/staffManage',
    text: '员工管理',
    selected: false,
    iconPath: '/images/orderTaking/staff.png',
    selectedIconPath: '/images/orderTaking/staff-active.png'
},
{
    pagePath: '/pages/message/index',
    text: '消息管理',
    selected: false,
    iconPath: '/images/message.png',
    selectedIconPath: '/images/message-active.png'
},

{
    pagePath: '/pages/my/index',
    text: '企业中心',
    selected: false,
    iconPath: '/images/orderTaking/my.png',
    selectedIconPath: '/images/orderTaking/my-active.png'
}
]
export const list2 = [{
    pagePath: '/pages/teamView/index',
    text: '首页',
    selected: true,
    iconPath: '/images/team/home.png',
    selectedIconPath: '/images/team/home-active.png'
},
{
    pagePath: '/pages/teamView/orderManage/index',
    text: '接单管理',
    selected: true,
    iconPath: '/images/team/receipt.png',
    selectedIconPath: '/images/team/receipt-active.png'
},
{
    pagePath: '/pages/my/index',
    text: '我的',
    selected: false,
    iconPath: '/images/my.png',
    selectedIconPath: '/images/my-active.png'
}
]
export const list3 = [{
    pagePath: '/pages/message/index',
    text: '消息',
    selected: true,
    iconPath: '/images/message.png',
    selectedIconPath: '/images/message-active.png'
},
{
    pagePath: '/pages/my/index',
    text: '我的',
    selected: false,
    iconPath: '/images/my.png',
    selectedIconPath: '/images/my-active.png'
}
]
export const welfareList = [{
    label: '是',
    value: 1
}, {
    label: '否',
    value: 2
},
{
    label: '试用期后',
    value: 3
}
]

export const moneyTypeList = [{
    label: '月薪',
    value: 1
}, {
    label: '日薪',
    value: 2
},
{
    label: '时薪',
    value: 3
}
]
export const rewardTypeList = [{
    label: '月返',
    value: 1
}, {
    label: '日返',
    value: 2
},
{
    label: '时返',
    value: 3
},
{
    label: '一次性返',
    value: 4
}
]

export const weekList = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
export const moneyTypeList1 = [
    { label: '全部', value: 0 },
    { label: '月薪', value: 1 },
    { label: '日薪', value: 2 },
    { label: '时薪', value: 3 }
  ]
  export const requirePersonList = [
    { label: '不限', value: '2-9999' },
    { label: '2-20人', value: '2-20' },
    { label: '20-50人', value: '20-50' },
    { label: '50-100人', value: '50-100' },
    { label: '100-200人', value: '100-200' },
    { label: '200人以上', value: '200-9999' }
  ]
  export const sexList = [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
    { label: '男女不限', value: 3 }
  ]
  export const cityList = [
    { name: '全国', value: '' },
    {
      name: '上海',
      value: '310100'
    },
    {
      name: '北京',
      value: '110100'
    },
    {
      name: '郑州',
      value: '410100'
    },
    {
      name: '广州',
      value: '440100'
    },
    {
      name: '杭州',
      value: '330100'
    },
    {
      name: '天津',
      value: '120000'
    },
    {
      name: '西安',
      value: '610100'
    },
    {
      name: '苏州',
      value: '320500'
    },
    {
      name: '武汉',
      value: '430100'
    },
    {
      name: '厦门',
      value: '350200'
    },
    {
      name: '长沙',
      value: '430100'
    },
    {
      name: '成都',
      value: '510100'
    },
    {
      name: '湖南',
      value: '420100'
    },
    {
      name: '福建',
      value: '423100'
    }
  ]
  
  export const teamMenus = [
    {
      child: [
        {
          title: '账户信息',
          icon: 'https://a.rsd123.com/image/images/icon1.png',
          url: '/pages/my/userInfo'
        },
        {
          title: '账户绑定',
          icon: 'https://a.rsd123.com/image/images/icon2.png',
          url: '/pages/my/userBind'
        }
      ]
    },
    {
      child: [{
        title: '团队信息',
        icon: 'https://a.rsd123.com/image/images/icon3.png',
        url: '/pages/my/teamInfo'
      }]
    },
    {
      child: [{
        title: '切换账号',
        icon: 'https://a.rsd123.com/image/images/icon6.png',
        url: '/pages/my/userBind'
      }, {
        title: '我的消息',
        icon: '../../images/icon7.png',
        url: '/pages/message/index'
      }]
    }
  ]
  export const companyMenus = [
    {
      child: [
        {
          title: '账户信息',
          icon: 'https://a.rsd123.com/image/images/icon1.png',
          url: '/pages/my/companyInfo'
        },
        {
          title: '账户绑定',
          icon: 'https://a.rsd123.com/image/images/icon2.png',
          url: '/pages/my/userBind'
        }
      ]
    },
    {
      child: [
        {
          title: '合同中心',
          icon: 'https://a.rsd123.com/image/images/icon1.png',
          url: '/pages/electronicContract/index'
        }
      ]
    },
    {
      child: [{
        title: '切换账号',
        icon: 'https://a.rsd123.com/image/images/icon6.png',
        url: '/pages/my/userBind'
      }]
    }
  ]
  export const personalMenus = [
    {
      child: [
        {
          title: '合同管理',
          icon: 'https://a.rsd123.com/image/images/icon1.png',
          url: '/pages/electronicContract/index'
        }
      ]
    }
  ]
  export const menus =  [
    {
      title: '审核发单',
      subTitle: '已发布职位的审核情况',
      icon: 'https://a.rsd123.com/image/images/orderTaking/icon1.png',
      url: '/pages/companyView/checkReceipt',
      badgeNum: 0
    },
    {
      title: '审核团队',
      subTitle: '选择确定合作团队',
      icon: 'https://a.rsd123.com/image/images/orderTaking/icon2.png',
      url: '/pages/companyView/checkTeam',
      badgeNum: 0
    },
    {
      title: '简历初筛',
      subTitle: '团队推荐简历等待筛选，确认面试信息',
      icon: 'https://a.rsd123.com/image/images/orderTaking/icon3.png',
      url: '/pages/companyView/resumeSiftings?query=1',
      badgeNum: 0
    },
    {
      title: '面试结果',
      subTitle: '已完成面试，确认入职名单、时间及入职信息',
      icon: 'https://a.rsd123.com/image/images/orderTaking/icon4.png',
      url: '/pages/companyView/resumeSiftings?query=2',
      badgeNum: 0
    },
    {
      title: '入职名单',
      subTitle: '已完成入职，确认入职名单',
      icon: 'https://a.rsd123.com/image/images/orderTaking/icon5.png',
      url: '/pages/companyView/resumeSiftings?query=3',
      badgeNum: 0
    }
  ]