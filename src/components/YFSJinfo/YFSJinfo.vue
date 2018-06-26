<template>
    <div>
        <header>
            <img v-lazy="'../../../static/img/logo.png'">
        </header>
        <Row class="main" :gutter="30">
            <Breadcrumb style="margin: 0 0 30px 0; padding: 0 15px;">
                <BreadcrumbItem to="/index">返回主页</BreadcrumbItem>
                <BreadcrumbItem>优房数据公司介绍</BreadcrumbItem>
            </Breadcrumb>
            <Col :span="4" class="NavMenu">
                <app-menu></app-menu>
            </Col>
            <Col :span="20" class="right-content">
                <router-view></router-view>
            </Col>
        </Row>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Footer from '../../components/footer.vue';
    import Menu from '../../components/YFSJinfo/leftMenu.vue'

    export default {
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
        },
        computed: {},
        components: {
            'app-footer': Footer,
            'app-menu': Menu,
        }
    }
</script>

<style scoped lang="less" type="text/less">
    body {
        background: #efeff1;
        header{
            width: 100%;
            padding: 15px 0;
            background: #fff;
            text-align: center;
            >img{
                max-width: 150px;
            }
        }
        .main {
            padding: 30px;
            .NavMenu {
                > div {
                    background: #fff;
                }
            }
            .right-content {
                > section {
                    background: #fff;
                    padding: 40px 30px;
                    min-height: 740px;
                }
            }
        }
    }
</style>
