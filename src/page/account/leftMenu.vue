<template>
    <nav>
        <Menu mode="vertical" theme="light" :active-name="$route.path" accordion @on-select="menuSelect" width="auto">
            <MenuItem name="/personalSettings">
                <i class="iconfont icon-shezhi"></i>
                个人设置
            </MenuItem>
            <MenuItem name="/myCollection">
                <i class="iconfont icon-xin1"></i>
                我的收藏
            </MenuItem>
            <MenuItem name="/myHouseReport">
                <i class="iconfont icon-xiazai"></i>
                我的房产报告
            </MenuItem>
            <MenuItem name="/orderManagement">
                <i class="iconfont icon-dingdanguanli"></i>
                订单管理
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
