<template>
    <section>
        <app-header></app-header>
        <Row class="main" v-if="themeHouseListData.length" >
            <Col :xs="{ span: 24}" :md="{ span: 8}" class="content" v-for="(item, index) in themeHouseListData" :key="index">
            <router-link  tag="article"  class="article"
                          :to="{path:'/themeHouseDetails?action='+return_empty(item.action)+'&city='+return_empty(item.city)+'&zipCode='+return_empty(item.postalCode)+'&houseType='+ return_empty(item.houseType) +'&maxPrice='+ return_empty(item.maxPrice) +'&themeId='+ item.themeId}">
                <aside class="aside">
                    <img  v-lazy="item.themePhoto" alt="" />
                </aside>
                <div class="text">
                    <h4 class="webkit-text-overflow-2lines">{{isNull0(item.themeName)}}</h4>
                    <p class="webkit-text-overflow-3lines">{{isNull0(item.description)}} </p>
                </div>
            </router-link>
            </Col>
            <Col style="text-align: center"  span="24">
                <Page show-total :page-size="pageSize" :total="total"  @on-change="changePage"></Page>
            </Col>
        </Row>
        <Row class="no_data" v-else>
            <Col span="24" class="content">暂无数据</Col>
        </Row>
        <app-footer></app-footer>
    </section>
</template>

<script>
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'

    export default {
        data() {
            return {
              themeHouseListData:[], // 数据存储
              arrayData:[], // 准备新数组存异步取回来数据
              total:0, // 共多少条数据
              pageSize: 9 // 每条显示多少条
            }
        },
        mounted() {
          this.getThemeHouseList()
        },
        methods: {
          // 获取所有主题
          getThemeHouseList () {
            this.$get('/themeHouseList').then(res => {  //要换接口
              let data = res.data
              if (res.code === 0) {
                this.total = data.length
                this.arrayData = data
                if ( data.length < this.pageSize) {
                  this.themeHouseListData = this.arrayData
                } else {
                  this.themeHouseListData = this.arrayData.slice(0,this.pageSize)
                }
              } else {
                this.$Message.error(data.msg);
              }
            })
          },
          // 分页数据
          changePage (index) {
            const start = ( index - 1 ) * this.pageSize
            const end = index * this.pageSize
            this.themeHouseListData = this.arrayData.slice(start, end)
          },
            //判断是否为0或null，返回空
            return_empty(data) {
                let  val = ''
                if (data == 0 || data == null || data == '' || data == 'null') {
                val = ''
                } else {
                val = data
                }
                return val
        }

    },
        components: {
            'app-header': Header,
            'app-footer': Footer,
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
            padding:4% 8%;
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
            .content {
                >.article{
                    padding: 0 5% 9%;
                    cursor: pointer;
                    >.aside {
                        overflow: hidden;
                        width: 100%;
                        > img{
                            width: 100%;
                            height: 200px;
                            vertical-align: top;
                            -webkit-transition: all linear 1s;
                            -moz-transition: all linear 1s;
                            transition: all linear 1s;
                        }
                    }
                    > .text{
                        min-height: 179px;
                        background: #fff;
                        padding: 20px;
                        -webkit-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        -moz-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        -ms-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        -o-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        >h4 {
                            font-size: 20px;
                            margin: 0;
                            text-indent: 0;
                            line-height: 30px;
                        }
                        >p {
                            margin: 10px 0 0 0;
                            height: 72px;
                            line-height: 24px;
                            overflow: hidden;
                        }
                    }
                }
                >.article:hover{
                    >.aside{
                        >img{
                            -webkit-transform: scale(1.1, 1.1);
                            -moz-transform: scale(1.1, 1.1);
                            transform: scale(1.1, 1.1);
                        }
                    }
                }
            }
        }
        .no_data{
            text-align: center;
        }
    }
</style>
