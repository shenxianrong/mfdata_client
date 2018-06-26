const Login = r => require.ensure([], () => r(require('@/components/login.vue')), 'Login');//登录页
const Register = r => require.ensure([], () => r(require('@/components/register.vue')), 'Register');//注册页

//首页
const index = r => require.ensure([], () => r(require('@/page/homePage/homePage.vue')), 'index');

//房源列表页
const houseList = r => require.ensure([], () => r(require('@/page/houseList/houseList.vue')), 'houseList');

//主题房源列表页
const themeHouseList = r => require.ensure([], () => r(require('@/page/themeHouseList.vue')), 'themeHouseList');

//主题房源详情页
const themeHouseDetails = r => require.ensure([], () => r(require('@/page/themeHouseDetails.vue')), 'themeHouseDetails');

//新闻资讯列表页
const newsList = r => require.ensure([], () => r(require('@/page/newsList.vue')), 'newsList');

//新闻资讯详情页
const newsDetails = r => require.ensure([], () => r(require('@/page/newsDetails.vue')), 'newsDetails');

//个人设置页
const account = r => require.ensure([], () => r(require('@/page/account/account.vue')), 'account');
const personalSettings = r => require.ensure([], () => r(require('@/page/account/personalSettings.vue')), 'personalSettings');  //个人设置
const myCollection = r => require.ensure([], () => r(require('@/page/account/myCollection.vue')), 'myCollection');  //我的收藏
const myHouseReport = r => require.ensure([], () => r(require('@/page/account/myHouseReport.vue')), 'myHouseReport');  //我的房产报告
const orderManagement = r => require.ensure([], () => r(require('@/page/account/orderManagement.vue')), 'orderManagement');  //订单管理

//房源详情页
const houseDetails = r => require.ensure([], () => r(require('@/components/houseDetails/houseDetails.vue')), 'houseDetails');


// 优房数据公司介绍
const YFSJinfo = r => require.ensure([], () => r(require('@/components/YFSJinfo/YFSJinfo.vue')), 'YFSJinfo');
const companyIntroduce = r => require.ensure([], () => r(require('@/components/YFSJinfo/companyIntroduce.vue')), 'companyIntroduce');//公司介绍
const businessIntroduce = r => require.ensure([], () => r(require('@/components/YFSJinfo/businessIntroduce.vue')), 'businessIntroduce');//业务介绍
const useTerms = r => require.ensure([], () => r(require('@/components/YFSJinfo/useTerms.vue')), 'useTerms');//使用条款
const privacyAgreement = r => require.ensure([], () => r(require('@/components/YFSJinfo/privacyAgreement.vue')), 'privacyAgreement');//隐私协议
const contactUS = r => require.ensure([], () => r(require('@/components/YFSJinfo/contactUS.vue')), 'contactUS');//联系我们


export const routes = [
    {path: '/', component: Login, meta: {keepAlive: true}},//登录页
    {path: '/register', component: Register, meta: {keepAlive: true}},//注册页

    {path: '/index', component: index, meta: {keepAlive: true}},//首页

    {path: '/houseList', component: houseList, meta: {keepAlive: true}},//房源列表页

    {path: '/themeHouseList', component: themeHouseList, meta: {keepAlive: true}},//主题房源列表页
    {path: '/themeHouseDetails', component: themeHouseDetails, meta: {keepAlive: true}},//主题房源详情页

    {path: '/newsList', component: newsList, meta: {keepAlive: true}},//新闻资讯列表页
    {path: '/newsDetails', component: newsDetails, meta: {keepAlive: true}},//新闻资讯详情页


    //个人设置页
    {
        path: '/account', component: account, redirect: 'personalSettings',
        children: [
            {path: '/personalSettings', component: personalSettings},   //个人设置
            {path: '/myCollection', component: myCollection},   //我的收藏
            {path: '/myHouseReport', component: myHouseReport}, //我的房产报告
            {path: '/orderManagement', component: orderManagement}, //订单管理
        ], meta: {keepAlive: true}
    },


    //房源详情页
    {path: '/houseDetails', component: houseDetails, meta: {keepAlive: false}},

    //优房数据公司介绍
    {path: '/YFSJinfo', component: YFSJinfo, redirect: 'companyIntroduce',
        children: [
            {path: '/companyIntroduce', component: companyIntroduce},   //公司介绍
            {path: '/businessIntroduce', component: businessIntroduce}, //业务介绍
            {path: '/useTerms', component: useTerms},   //使用条款
            {path: '/privacyAgreement', component: privacyAgreement}, //隐私协议
            {path: '/contactUS', component: contactUS}, //联系我们
        ], meta: {keepAlive: true}
    },



];

