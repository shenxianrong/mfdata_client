<template>
    <section class="hotCity-box">
        <h5>热门城市</h5>
        <!--<Row type="flex" justify="center" align="middle">-->
            <!--<Col :xs="24" :sm="24" :md="24" :lg="22" style="text-align: center;">-->
                <!--<Row type="flex" justify="center" align="middle">-->
                    <!--<Col :xs="24" :sm="24" :md="16" :lg="16">-->
                        <!--<div class="inside">-->
                            <!--<router-link :to="{path: '/houseList', query: {city: 'New York'}}">-->
                                <!--<img v-lazy="'../../../static/img/NewYork.jpg'" />-->
                                <!--<div class="font">-->
                                    <!--<span>纽约</span>-->
                                    <!--<i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>-->
                                <!--</div>-->
                            <!--</router-link>-->
                        <!--</div>-->
                    <!--</Col>-->
                    <!--<Col :xs="24" :sm="24" :md="8" :lg="8">-->
                        <!--<div class="inside">-->
                            <!--<router-link :to="{path: '/houseList', query: {city: 'Los Angeles'}}">-->
                                <!--<img v-lazy="'../../../static/img/LosAngeles.jpg'" />-->
                                <!--<div class="font">-->
                                    <!--<span>洛杉矶</span>-->
                                    <!--<i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>-->
                                <!--</div>-->
                            <!--</router-link>-->
                        <!--</div>-->
                    <!--</Col>-->
                <!--</Row>-->
            <!--</Col>-->
        <!--</Row>-->

        <Row type="flex" justify="center" align="middle">
            <Col :xs="24" :sm="24" :md="16" :lg="16">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'New York'}}">
                        <img v-lazy="'../../../static/img/NewYork.jpg'" />
                        <div class="font">
                            <span>纽约</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="8" :lg="8">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'Los Angeles'}}">
                        <img v-lazy="'../../../static/img/LosAngeles.jpg'" />
                        <div class="font">
                            <span>洛杉矶</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="8" :lg="8">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'Atlanta'}}">
                        <img v-lazy="'../../../static/img/Atlanta.jpg'" />
                        <div class="font">
                            <span>亚特兰大</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="16" :lg="16">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'Seattle'}}">
                        <img v-lazy="'../../../static/img/Seattle.jpg'" />
                        <div class="font">
                            <span>西雅图</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'San Francisco'}}">
                        <img v-lazy="'../../../static/img/SanFrancisco.jpg'" />
                        <div class="font">
                            <span>旧金山</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'Houston'}}">
                        <img v-lazy="'../../../static/img/Houston.jpg'" />
                        <div class="font">
                            <span>休斯顿</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="16" :lg="16">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'Boston'}}">
                        <img v-lazy="'../../../static/img/Boston.jpg'" />
                        <div class="font">
                            <span>波士顿</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="8" :lg="8">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'San Diego'}}">
                        <img v-lazy="'../../../static/img/Santiago.jpg'" />
                        <div class="font">
                            <span>圣地亚哥</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="8" :lg="8">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'New Jersey'}}">
                        <img v-lazy="'../../../static/img/NewJersey.jpg'" />
                        <div class="font">
                            <span>新泽西</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="16" :lg="16">
                <div class="inside">
                    <router-link :to="{path: '/houseList', query: {city: 'Orlando'}}">
                        <img v-lazy="'../../../static/img/Orlando.jpg'" />
                        <div class="font">
                            <span>奥兰多</span>
                            <i class="iconfont icon-iconfontsousuo1" title="点击查看该城市房源"></i>
                        </div>
                    </router-link>
                </div>
            </Col>
        </Row>


    </section>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {},
        created() {
        },
        mounted() {

        },
        methods: {},
        components: {}
    }
</script>

<style scoped lang="less" type="text/less">
    body {
        .hotCity-box {
            padding: 60px 0;
            >h5 {
                text-align: center;
                font-size: 27px;
                color: #474747;
                font-weight: bold;
                margin-bottom: 30px;
            }
            >div {
                max-width: 1170px;
                margin-right: auto;
                margin-left: auto;
                > div {
                    cursor: pointer;
                    padding: 0 15px;
                    margin: 20px 0;
                    > .inside {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        position: relative;
                        background: #000;
                        > a {
                            display: block;
                            width: 100%;
                            height: 100%;
                            max-height: 350px;
                            position: relative;
                            -webkit-transition: .5s;
                            -moz-transition: .5s;
                            -ms-transition: .5s;
                            -o-transition: .5s;
                            transition: .5s;
                            > img {
                                width: 100%;
                                height: auto;
                                max-height: 350px;
                                -webkit-transition: .5s;
                                -moz-transition: .5s;
                                -ms-transition: .5s;
                                -o-transition: .5s;
                                transition: .5s;
                            }
                            > .font {
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                text-align: center;
                                > span {
                                    font-size: 30px;
                                    color: #fff;
                                    font-weight: bold;
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    -webkit-transform: translate(-50%, -50%);
                                    -moz-transform: translate(-50%, -50%);
                                    -ms-transform: translate(-50%, -50%);
                                    -o-transform: translate(-50%, -50%);
                                    transform: translate(-50%, -50%);
                                }
                                > i {
                                    font-size: 25px;
                                    color: #fff;
                                    position: absolute;
                                    top: 44%;
                                    left: 48%;
                                    z-index: 9;
                                    text-align: center;
                                    -webkit-border-radius: 50%;
                                    -moz-border-radius: 50%;
                                    border-radius: 50%;
                                    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                                    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                                    -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                                    display: inline-block;
                                    opacity: 0;
                                    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
                                    -moz-transition: -moz-transform 0.3s, opacity 0.3s;
                                    -o-transition: -o-transform 0.3s, opacity 0.3s;
                                    transition: transform 0.3s, opacity 0.3s;
                                }
                            }
                            > .font::before,
                            > .font::after {
                                position: absolute;
                                content: '';
                                opacity: 0;
                                transition: all 0.5s;
                            }
                            > .font::before {
                                top: 25px;
                                right: 15px;
                                bottom: 25px;
                                left: 15px;
                                border-top: 1px solid #fff;
                                border-bottom: 1px solid #fff;
                                transform: scale(0, 1);
                                -webkit-transform-origin: 0 0;
                                transform-origin: 0 0
                            }
                            > .font::after {
                                top: 15px;
                                right: 25px;
                                bottom: 15px;
                                left: 25px;
                                border-right: 1px solid #fff;
                                border-left: 1px solid #fff;
                                transform: scale(1, 0);
                                transform-origin: 100% 0;
                            }
                        }
                        > a:hover {
                            > img {
                                transform: scale(1.05, 1.05);
                                opacity: 0.5;
                                filter: alpha(opacity=50);
                            }
                            > .font {
                                > span {
                                    display: none;
                                }
                                > i {
                                    opacity: 1;
                                    -webkit-transform: scale(1);
                                    -moz-transform: scale(1);
                                    -ms-transform: scale(1);
                                    -o-transform: scale(1);
                                    transform: scale(1);
                                }
                            }
                            > .font::before,
                            > .font::after {
                                opacity: 1;
                                transform: scale(1);
                                transition: all 0.5s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
