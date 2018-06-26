<template>
    <nav>
        <Menu mode="vertical" theme="light" :active-name="$route.path" accordion @on-select="menuSelect" width="auto">
            <MenuItem name="/companyIntroduce">
                <i class="iconfont icon-fangzi-copy"></i>
                公司介绍
            </MenuItem>
            <MenuItem name="/businessIntroduce">
                <i class="iconfont icon-business"></i>
                业务介绍
            </MenuItem>
            <MenuItem name="/useTerms">
                <i class="iconfont icon-chanpintiaokuan"></i>
                使用条款
            </MenuItem>
            <MenuItem name="/privacyAgreement">
                <i class="iconfont icon-xieyi"></i>
                隐私协议
            </MenuItem>
            <MenuItem name="/contactUS">
                <i class="iconfont icon-lianxiwomen"></i>
                联系我们
            </MenuItem>
        </Menu>
    </nav>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {
        },
        mounted() {
        },
        computed: {},
        methods: {
            //选择菜单（MenuItem）时触发
            menuSelect(name){
                this.$router.push(name);
            },
        },
        components: {}
    }
</script>

<style scoped lang="less" type="text/less">
    body{
        nav{

        }
    }
</style>
