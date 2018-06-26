<template>
    <section>
        <!--轮播背景图-->
        <div class="header-bg clearfix">
            <div class="swiper-container" id="header-bg-swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img data-src="../../../static/img/header-bg1.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="../../../static/img/header-bg2.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="../../../static/img/header-bg3.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="../../../static/img/header-bg4.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="../../../static/img/header-bg5.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-opacity clearfix">
            <Row class="company-header clearfix" type="flex" justify="center" align="middle">
                <Col :span="18" class="text-left">
                    <img v-lazy="'../../../static/img/logo.png'" style="max-width: 160px;">
                </Col>
                <Col :span="3" class="text-right company-tel-box">
                    <i class="iconfont icon-dianhua"></i>
                    <span>400-600-4982</span>
                </Col>
                <Col :span="3" class="text-right" v-show="isLoginShow">
                    <router-link to="/" class="active">登录</router-link>
                    |
                    <router-link to="/register">注册</router-link>
                </Col>
                <Col :span="3" class="text-right" v-show="!isLoginShow">
                    <Dropdown @on-click="clickDropdownItem">
                        <a href="javascript:void(0)">
                            <span>{{ userName }}</span>
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list" style="text-align: center">
                            <DropdownItem name="ownSpace">个人中心</DropdownItem>
                            <DropdownItem name="loginout" divided>注销</DropdownItem>
                        </DropdownMenu>
                        <Avatar :src="userHeadPhoto" style="margin: 0 0 0 10px" />
                        
                    </Dropdown>
                </Col>
            </Row>
            <h1>全美真实千万套房源随意搜</h1>

            <nav>
                <Tabs :animated="false" @on-click="navTabsClick">
                    <TabPane label="房源搜索" name="房源搜索">
                        <Row class="clearfix" type="flex" justify="center" align="middle">
                            <Col :xs="24" :sm="24" :md="15" :lg="14">
                                <div class="ivu-input-wrapper ivu-input-type ivu-input-group ivu-input-group-with-prepend ivu-input-group-with-append ivu-input-hide-icon">
                                    <search-bar></search-bar>
                                    <div class="ivu-input-group-append">
                                        <Button type="primary">
                                            <i class="ivu-icon ivu-icon-ios-search"></i> 搜索
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane label="地图" name="地图">
                        <div id="hotCity-map" style="height: 400px;"></div>
                    </TabPane>
                    <TabPane label="房产报告" name="房产报告">
                        <Row class="clearfix" type="flex" justify="center" align="middle">
                            <Col :xs="24" :sm="24" :md="15" :lg="14">
                            <div class="ivu-input-wrapper ivu-input-type ivu-input-group ivu-input-group-with-prepend ivu-input-group-with-append ivu-input-hide-icon">
                                <search-bar></search-bar>
                                <div class="ivu-input-group-append">
                                    <Button type="info" style="background-color: #57c5f7; border-color: #57c5f7;">
                                        <i class="ivu-icon ivu-icon-ios-search"></i> 房产报告
                                    </Button>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane label="帮我找房" name="帮我找房">
                        <helpMeFindHouse></helpMeFindHouse>
                    </TabPane>

                </Tabs>
            </nav>

            <Row class="hotCityUl clearfix" type="flex" justify="center" align="middle">
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'New York'}}">纽约</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'Los Angeles'}}">洛杉矶</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'Atlanta'}}">亚特兰大</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'Seattle'}}">西雅图</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'San Francisco'}}">旧金山</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'Houston'}}">休斯顿</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'Boston'}}">波士顿</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'San Diego'}}">圣地亚哥</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'New Jersey'}}">新泽西</router-link></Col>
                <Col :xs="2" :sm="2" :md="2" :lg="2"><router-link :to="{path: '/houseList', query: {city: 'Orlando'}}">奥兰多</router-link></Col>
            </Row>

            <!--首页banner房源统计-->
            <Row :gutter="30" class="House-statistics">
                <Col :xs="24" :sm="24" :md="24" :lg="18">
                    <ul>
                        <li>
                            <div class="inside">
                                <h3 id="all-America-housing-average-price">$200,700</h3>
                                <span>全美房产平均价格</span>
                            </div>
                        </li>
                        <li>
                            <div class="inside">
                                <h3 id="all-America-housing-monthly-change">0.2%</h3>
                                <span>全美房产月度变化</span>
                            </div>
                        </li>
                        <li>
                            <div class="inside">
                                <h3 id="all-America-housing-Annual-change">6.8%</h3>
                                <span>全美房产年度变化</span>
                            </div>
                        </li>
                        <li>
                            <div class="inside">
                                <h3 id="all-America-housing-price-forecast">2.7%</h3>
                                <span>优房数据全美房价预测</span>
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>

    </section>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import searchBar from '../../components/searchBar.vue'    //公共房源搜索框
    import helpMeFindHouse from '../../page/homePage/helpMeFindHouse.vue'    //帮我找房


    export default {
        data() {
            return {
                mySwiper: null,//背景轮播配置
                userName: '',       // 用户名
                userHeadPhoto: '',  // 用户头像
                isLoginShow: true,      // 判断是否登录
                //10个热门城市坐标数据
                citylist: [
                    {lat: 37.7749295, lng: -122.41941550000001, city: 'San Francisco', cityName: '旧金山'},
                    {lat: 34.0522342, lng: -118.2436849, city: 'Los Angeles', cityName: '洛杉矶'},
                    {lat: 40.7127837, lng: -74.00594130000002, city: 'New York', cityName: '纽约'},
                    {lat: 47.6062095, lng: -122.3320708, city: 'Seattle', cityName: '西雅图'},
                    {lat: 33.7489954, lng: -84.3879824, city: 'Atlanta', cityName: '亚特兰大'},
                    {lat: 42.3600825, lng: -71.05888010000001, city: 'Boston', cityName: '波士顿'},
                    {lat: 40.0583238, lng: -74.4056612, city: 'New Jersey', cityName: '新泽西'},
                    {lat: 29.7604267, lng: -95.3698028, city: 'Houston', cityName: '休斯顿'},
                    {lat: 32.715738, lng: -117.16108380000003, city: 'San Diago', cityName: '圣地亚哥'},
                    {lat: 28.5383355, lng: -81.37923649999999, city: 'Orlando', cityName: '奥兰多'},
                ],
                myMap: null,//10个热门城市地图
                options: null,//10个热门城市地图配置项
                marker: null,//10个热门城市地图坐标点
                infowindow: null,//10个热门城市地图infowindow框


            }
        },
        computed: {},
        created() {
        },
        mounted() {
            //背景轮播图swiper配置
            this.mySwiper = new Swiper('#header-bg-swiper-container', {
                autoplay: {
                    delay: 5000,//自动切换的时间间隔，单位ms
                    stopOnLastSlide: false,//如果设置为true，当切换到最后一个slide时停止自动切换
                    disableOnInteraction: true,//用户操作swiper之后，是否禁止autoplay。默认为true,如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
                },
                effect: 'fade',//slide的切换效果：淡入淡出
                spaceBetween: 0,//slide之间的距离（单位px）
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 1,
                },
            });

            this.isLogin();

            this.setGoogleMapOptions();

        },
        methods: {
            // 判断是否已经登录,如果登录则赋值账号手机号和角色名
            isLogin() {
                if (localStorage.userName || localStorage.userHeadPhoto) {
                    this.userName = localStorage.userName;
                    this.userHeadPhoto = localStorage.userHeadPhoto;
                    this.isLoginShow = false;
                }
            },
            //点击右上角个人中心菜单项时触发
            clickDropdownItem(name) {
                if(name == 'ownSpace'){
                    this.$router.push('/account');
                }else if (name == 'loginout') {
                    this.$get('/exit').then(res => {
                        const data = res;
                        if (data.status == 0) {
                            localStorage.removeItem('userName');
                            localStorage.removeItem('userHeadPhoto');
                            this.$router.push('/');
                        } else {
                            this.$Message.warning(data.msg)
                        }
                    })
                }
            },
            //nav tab点击切换事件
            navTabsClick(name){
                // console.log(name)
                if(name == '地图'){
                    // this.setGoogleMapOptions();
                }
            },
            //设置10个热门城市地图配置
            setGoogleMapOptions(){
                this.options = {
                    zoom: 4,
                    center: {lat: 40, lng: -98},//地图居中在美国中部
                    maxZoom: 6,//最大放大比例
                    minZoom: 3,//最大缩小比例
                    mapTypeId: google.maps.MapTypeId.ROADMAP,//道路图
                    scrollwheel: true, //禁用滚轮缩放
                    panControl: false,    //左上角4个方向控制圆形
                    zoomControl: false,   //点击缩放按钮
                    mapTypeControl: false,//切换地图类型
                    scaleControl: false,  //缩放比例尺
                    streetViewControl: false, //街景控件
                    overviewMapControl: false, //右下角小地图
                    rotateControl: false, //开启45°旋转实景图才会显示
                    fullscreenControl: false, //全屏查看
                };
                this.myMap = new google.maps.Map(document.getElementById("hotCity-map"), this.options);

                let attachSecretMessage = (marker, goList) => {
                    //点击热门城市跳转至对应的列表页
                        marker.addListener('click', function () {
                            window.open('../city/' + goList);
                        });
                        //移入城市点的时候显示城市名
                        this.infowindow = new google.maps.InfoWindow({});
                        let _this = this;
                        marker.addListener('mouseover', function () {
                            _this.infowindow.setContent(this.cityName);
                            _this.infowindow.open(_this.myMap, marker);
                        });
                        marker.addListener('mouseout', function () {
                            _this.infowindow.close()
                        });
                };

                let addMarkerWithTimeout = (cityItem, timeout) => {
                    setTimeout(() => {
                        this.marker = new google.maps.Marker({
                            position: new google.maps.LatLng(cityItem.lat, cityItem.lng),
                            map: this.myMap,
                            icon: '../../../static/img/hotCity-marker.png',
                            cityName: cityItem.cityName,
                            animation: google.maps.Animation.DROP//加载marker动画
                        });
                        attachSecretMessage(this.marker, cityItem.city);
                    }, timeout);
                };

                this.citylist.forEach((i) => {
                    addMarkerWithTimeout(i, i * 200);
                });

                //地图盒子显示时重新刷新地图，避免出现地图背景图层是灰色的问题
                google.maps.event.trigger(this.myMap, 'resize');
            },




        },
        components: {
            'search-bar': searchBar,
            'helpMeFindHouse': helpMeFindHouse,
        }
    }
</script>

<style scoped lang="less" type="text/less">
    body {
        section {
            position: relative;
            width: 100%;
            /*轮播背景图*/
            >.header-bg {
                position: absolute;
                z-index: 1;
                left: 0;
                right: 0;
                top: 0;
                width: 100%;
                height: 100%;
                .swiper-container {
                    width: 100%;
                    height: 100%;
                    .swiper-slide {
                        width: 100%;
                        height: 100%;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                        @media (max-width: 1100px) {
                            img {
                                width: auto;
                            }
                        }
                    }
                }
            }

            >.bg-opacity {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                position: relative;
                z-index: 2;
                padding: 0 30px;
                >.company-header {
                    margin: 15px 0 0 0;
                    .company-tel-box{
                        font-size: 20px;
                        color: #fff;
                    }
                }
                >h1 {
                    margin-top: 180px;
                    font-size: 56px;
                    color: #fff;
                    text-align: center;
                }

                >nav {
                    padding: 80px 0 20px 0;
                    /deep/ .ivu-tabs-bar {
                        border-bottom: none;
                        .ivu-tabs-nav {
                            width: 700px;
                            float: none;
                            margin: 0 auto;
                            .ivu-tabs-tab {
                                width: 25%;
                                font-size: 18px;
                                color: #fff;
                                text-align: center;
                            }
                        }
                    }

                    /*房源搜索框*/
                    /deep/ .ivu-input-group{
                        border-radius: 5px;
                        -webkit-border-radius: 5px;
                        -moz-border-radius: 5px;
                        -ms-border-radius: 5px;
                        -o-border-radius: 5px;
                        border: 6px solid rgba(0, 0, 0, 0.3);
                        .ivu-auto-complete {
                            width: 100% !important;
                            .ivu-input{
                                border-right: none;
                            }
                        }
                    }
                }

                /*10个热门城市的a标签*/
                >.hotCityUl{
                    margin: 0 auto;
                    z-index: 2;
                    width: 70%;
                    .ivu-col {
                        text-align: center;
                        > a {
                            font-size: 16px;
                            color: #fff;
                        }
                    }
                }


                /*首页banner全美房源数据统计*/
                >.House-statistics {
                    padding: 100px 0 40px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    >div{
                        margin: 0 auto;
                        li {
                            float: left;
                            width: 25%;
                            padding: 0 15px;
                            > .inside {
                                text-align: center;
                                color: #000;
                                background: #fff;
                                padding: 20px 15px;
                                border-radius: 5px;
                                > h3 {
                                    font-size: 35px;
                                    font-weight: bold;
                                }
                                > span {
                                    font-size: 16px;
                                    margin-top: 5px;
                                }
                            }
                        }
                    }

                }
            }

        }
    }
</style>
