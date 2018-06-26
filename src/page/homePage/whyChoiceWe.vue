<template>
    <section>
        <Row type="flex" justify="center" align="middle" class="whyChoiceWe-box">
            <Col :xs="24" :sm="24" :md="24" :lg="16">
                <ul class="clearfix">
                    <li>
                        <img v-lazy="'../../../static/img/whyChoiceWe1.png'"/>
                        <h5>同步</h5>
                        <p>每天更新全美海量真实房源</p>
                    </li>
                    <li>
                        <img v-lazy="'../../../static/img/whyChoiceWe2.png'"/>
                        <h5>报告</h5>
                        <p>专业房产动态报告</p>
                    </li>
                    <li>
                        <img v-lazy="'../../../static/img/whyChoiceWe3.png'"/>
                        <h5>数据</h5>
                        <p>你想了解的</p>
                    </li>
                    <li>
                        <img v-lazy="'../../../static/img/whyChoiceWe4.png'"/>
                        <h5>唯一</h5>
                        <p>根据你的喜好制定你喜欢的房源</p>
                    </li>
                    <li>
                        <img v-lazy="'../../../static/img/whyChoiceWe5.png'"/>
                        <h5>智能</h5>
                        <p>大数据分析告诉你如何购买</p>
                    </li>
                </ul>
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
        section {
            .whyChoiceWe-box{
                background: #fff;
                padding: 60px 0;
                li{
                    width: 20% !important;
                    text-align: center;
                    float: left;
                    >img {
                        width: auto;
                        height: auto;
                        text-align: center;
                    }
                    > h5 {
                        font-size: 25px;
                        color: #000;
                        margin: 20px 0 0 0;
                        font-family: "黑体";
                        font-weight: bold;
                    }
                    >p {
                        max-width: 150px;
                        margin: 0 auto;
                        font-size: 18px;
                        color: #868686;
                        padding-top: 20px;
                    }
                }
            }
        }
    }
</style>
