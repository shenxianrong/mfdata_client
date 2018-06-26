<template>
    <section class="theme-house-box">
        <h5>主题房源</h5>
        <Row type="flex" justify="center" align="middle" :gutter="30">
            <Col :xs="24" :sm="24" :md="24" :lg="20" style="text-align: center;">
                <div class="swiper-container" id="theme-house-swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in themeHouseList" :key="index">
                            <img v-lazy="item.themePhoto">
                            <div class="info transition">
                                <h3 class="webkit-text-overflow-2lines">{{item.themeName}}</h3>
                                <p class="webkit-text-overflow-3lines">{{item.description}}</p>
                                <Button type="info">
                                    <router-link :to="{path: '/themeHouseDetails', query: {themeid: item.themeId}}">详情</router-link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-next swiper-button-white iconfont icon-zuoyou"></div>
                    <div class="swiper-button-prev swiper-button-white iconfont icon-zuoyou1"></div>
                </div>
                <Button type="info">
                    <router-link to="/themeHouseList">查看所有主题</router-link>
                </Button>
            </Col>
        </Row>
    </section>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
        data() {
            return {
                mySwiper: null,//主题房源轮播swiper配置
                themeHouseList: [],//主题房源列表数据
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            //主题房源轮播swiper配置
            this.mySwiper = new Swiper('#theme-house-swiper-container', {
                autoplay: {
                    delay: 5000,//自动切换的时间间隔，单位ms
                    stopOnLastSlide: false,//如果设置为true，当切换到最后一个slide时停止自动切换
                    disableOnInteraction: true,//用户操作swiper之后，是否禁止autoplay。默认为true,如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
                },
                spaceBetween: 40,//在slide之间设置距离（单位px）
                slidesPerView: 'auto',
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 3,
                },
                navigation: {//前进后退按钮组件
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                runCallbacksOnInit : false,//初始化时不触发slideChange
                observer: true,//启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
                observeParents: true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
                on:{
                    init:function(){
                        // if($(document).width() <= 992 && $(document).width() > 600){
                        //     var swiper = new Swiper('#theme-house-swiper-container', {
                        //         autoplay: 5000,//自动轮播5s
                        //         nextButton: '.swiper-button-next',//下一张按钮
                        //         prevButton: '.swiper-button-prev',//上一张按钮
                        //         slidesPerView: 2,//设置slider容器能够同时显示的slides数量
                        //         spaceBetween: 30,//间距(px)
                        //     })
                        // }else if($(document).width() <= 600){
                        //     var swiper = new Swiper('#theme-house-swiper-container', {
                        //         autoplay: 5000,//自动轮播5s
                        //         nextButton: '.swiper-button-next',//下一张按钮
                        //         prevButton: '.swiper-button-prev',//上一张按钮
                        //         slidesPerView: 1//设置slider容器能够同时显示的slides数量
                        //     })
                        // }
                    },
                },
            });

            this.getThemeHouseList();//获取主题房源列表数据
        },
        methods: {
            //获取主题房源列表数据
            getThemeHouseList(){
                this.$get('/themeHouseList').then(res => {
                    if (res.code == 0) {
                        this.themeHouseList = res.data;
                        this.mySwiper.update();
                        console.log(this.themeHouseList)
                    }
                })
            },
        },
        components: {}
    }
</script>

<style scoped lang="less" type="text/less">
    body {
        .theme-house-box {
            padding: 60px 0;
            > h5 {
                text-align: center;
                font-size: 27px;
                color: #474747;
                font-weight: bold;
            }
            .swiper-container {
                margin: 25px 0 0 0;
                >.swiper-wrapper {
                    > .swiper-slide {
                        width: 480px;
                        height: 326px;
                        border-radius: 8px;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                        position: relative;
                        overflow: hidden;
                        > img {
                            width: 100%;
                            height: 100%;
                        }
                        > .info {
                            width: 100%;
                            height: 100%;
                            background: rgba(40, 40, 40, 0.7);
                            position: absolute;
                            padding: 30px;
                            z-index: 999;
                            bottom: -160px;
                            color: #fff;
                            font-size: 14px;
                            border-radius: 8px;
                            text-align: left;
                            > h3 {
                                margin-bottom: 18px;
                                color: #fff;
                                font-size: 23px;
                                cursor: pointer;
                                text-indent: 0;
                            }
                            > p {
                                max-height: 100px;
                            }
                            > .btn {
                                margin-top: 40px;
                                display: inline-block;
                                border: 2px solid #fff;
                                color: #fff;
                                font-size: 16px;
                                padding: 9px 35px;
                                border-radius: 20px;
                                line-height: 20px;
                                text-decoration: none;
                            }
                            > .btn:hover {
                                background: #fff;
                                color: #000;
                            }
                        }
                    }
                    > .swiper-slide:after {
                        z-index: 1;
                        transition: opacity .4s ease-in-out;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        content: " ";
                        overflow: hidden;
                        display: block;
                        border-radius: 8px;
                    }
                    > .swiper-slide:hover:after {
                        display: none;
                    }
                    > .swiper-slide:hover .info {
                        bottom: 0px;
                    }
                }
            }
            button{
                margin: 50px 0 0 0;
                font-size: 16px;
                a{
                    color: #fff;
                }
            }
        }
    }
</style>
