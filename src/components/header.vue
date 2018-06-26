<template>
    <Row class="header" type="flex" justify="center" align="middle">
        <Col :span="4" class="img-box">
        <router-link to="/index" class="active">
            <img v-lazy="'../../../static/img/logo.png'">
        </router-link>
        </Col>
        <Col :span="10">
            <search-bar></search-bar>
        </Col>
        <Col :span="10" class="text-right" v-show="isLoginShow">
            <router-link to="/" class="active">登录</router-link>
            |
            <router-link to="/register">注册</router-link>
        </Col>
        <Col :span="10" class="text-right" v-show="!isLoginShow">
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
</template>

<script>
    import searchBar from './searchBar.vue'    //公共房源搜索框

    export default {
        data() {
            return {
                userName: '',       // 用户名
                userHeadPhoto: '',  // 用户头像
                isLoginShow: true,      // 判断是否登录

            }
        },
        mounted() {
            this.isLogin();

        },
        computed: {
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
        },
        components:{
            'search-bar': searchBar,
        }
    }
</script>

<style scoped lang="less" type="text/less">
    body {
        .header {
            width: 100%;
            line-height: 70px;
            padding: 0 30px;
            background: #fff;
            position: relative;
            > .img-box {
                line-height: 60px;
                >a{
                    > img {
                        max-width: 150px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
            }
            > div {
                > span {
                    display: inline-block;
                    padding: 0 15px;
                    cursor: pointer;
                }
            }
        }
    }


</style>

