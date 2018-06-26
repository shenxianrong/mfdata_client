<template>
    <div>
        <app-header></app-header>
        <!--<el-row type="flex" class="row-bg main" justify="center">-->
        <!--<el-col :xs="23" :sm="23" :md="22" :lg="22" :xl="16" class="content">-->
        <!--<el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 30px 0;">-->
        <!--<el-breadcrumb-item :to="goBackHome()">返回账户主页</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>房源详情</el-breadcrumb-item>-->
        <!--</el-breadcrumb>-->
        <!--<photo></photo>-->
        <!--<basicInfo></basicInfo>-->
        <!--<characteristicsInfo></characteristicsInfo>-->
        <!--<houseIntroduction></houseIntroduction>-->
        <!--<school></school>-->
        <!--<zipcodeCharts></zipcodeCharts>-->
        <!--<InvestmentAnalysisCharts></InvestmentAnalysisCharts>-->
        <!--<houseTransactionHistory></houseTransactionHistory>-->
        <!--<loanCalculator></loanCalculator>-->
        <!--<surroundingSimilarHouse></surroundingSimilarHouse>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from '../../components/header.vue';
    import Footer from '../../components/footer.vue';

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
            'app-header': Header,
            'app-footer': Footer,
        }
    }
</script>

<style lang="less" type="text/less">
    body {
        .main {
            padding: 30px;
            .content {
            }
        }
    }
</style>
