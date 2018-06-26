/*
使用mockjs提供接口
*/
import Mock from 'mockjs'
import data from './data.json' // js对象

// 向外提供goods数据
Mock.mock('/basic', {code: 0, data: data.basic}) //个人中心——个人设置——基本信息

Mock.mock('/preferences', {code: 0, data: data.preferences}) //个人中心——个人设置——投资偏好

Mock.mock('/collectionHouseList', {code: 0, data: data.collectionHouseList}) //个人中心——我的收藏房源列表数据

Mock.mock('/reportList', {code: 0, data: data.reportList}) //个人中心——房产报告列表数据

Mock.mock('/orderList', {code: 0, data: data.orderList}) //个人中心——订单列表数据

Mock.mock('/themeHouseList', {code: 0, data: data.themeHouseList}) //首页——主题房源数据

Mock.mock('/news/list/6/1', {code: 0, data: data.news})  // 新闻列表

Mock.mock('/news/list/7/1', {code: 0, data: data.news})  // 新闻列表

Mock.mock('/news/list/8/1', {code: 0, data: data.news}) // 新闻列表

Mock.mock('/news/list/9/1', {code: 0, data: data.news}) // 新闻列表

Mock.mock('/newsDetails', {code: 0, data: data.newsDetails}) // 新闻列表