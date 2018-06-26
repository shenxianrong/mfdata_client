<template>
    <div>
        <indexHeader></indexHeader>
        <whyChoiceWe></whyChoiceWe>
        <themeHouse></themeHouse>
        <hotCity></hotCity>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import Footer from '../../components/footer.vue'
    import indexHeader from '../../page/homePage/header.vue'//首页——头部
    import whyChoiceWe from '../../page/homePage/whyChoiceWe.vue'//首页——为什么选择我们
    import themeHouse from '../../page/homePage/themeHouse.vue'//首页——主题房源
    import hotCity from '../../page/homePage/hotCity.vue'//首页——热门城市

    export default {
        data() {
            return {}
        },
        mounted() {
        },
        computed: {},
        methods: {},
        components: {
            'indexHeader': indexHeader,
            'whyChoiceWe': whyChoiceWe,
            'themeHouse': themeHouse,
            'hotCity': hotCity,


            'app-footer': Footer,
        }
    }
</script>

<style scoped lang="less" type="text/less">
    .main {
        padding: 30px;
        .NavMenu {
            > div {
                background: #fff;
            }
        }
        .content-box {
            > div {
                background: #fff;
                padding: 40px 30px;
                min-height: 740px;
            }
        }
    }
</style>
