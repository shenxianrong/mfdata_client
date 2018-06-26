<template>
    <section>
        <app-header></app-header>
        <Row :gutter="30" class="content">
            <Col :xs="{ span: 24}" :md="{ span: 16}">
                <article>
                  <h3 id="news-title">{{leftNewsListData.title}}</h3>
                  <p>
                    <span id="release-time"><i class="iconfont icon-fabushijian"></i> 发布时间：{{getDateDiff(leftNewsListData.ctime)}}</span>
                    <span id="news-source"> <i class="iconfont icon-source"></i> 信息来源：{{isNull0(leftNewsListData.source)}}</span>
                  </p>
                  <h4>摘要：{{isNull0(leftNewsListData.summary)}}</h4>
                  <img v-lazy="leftNewsListData.photo" v-if="leftNewsListData.photo"/>
                  <div v-html="isNull0(leftNewsListData.content)"></div>
                </article>
            </Col>
            <Col :xs="{ span: 24 }" :md="{ span: 8}" >
            <div class="inside">
                <h3>推荐资讯</h3>
                <ul>
                    <router-link  tag="li" v-for="(item, index) in rightNewsListData" :key="index"
                                  v-if="rightNewsListData.length"
                                  :to="{path:'/newsDetails?id='+ item.id}">
                        <span>
                           <img  v-lazy="item.photo" alt="" />
                        </span>

                        <aside>
                            <h4>{{item.title}}</h4>
                            <p class="webkit-text-overflow-2lines">{{isNull0(item.summary)}}</p>
                        </aside>
                    </router-link >
                    <li v-else>

                    </li>
                </ul>
            </div>
            </Col>
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
        activeNumber: '6', // tab页标签
        leftNewsListData: {}, // 左侧数据
        rightNewsListData: [] // 右侧数据

      }
    },
    mounted() {
      this.getRightNewsList(this.activeNumber)
      this.getLeftNewsDetails();
    },
    methods: {
      // 初始化左侧数据
      getLeftNewsDetails() {
        let newsId = window.location.search.split('?id=')[1]
        console.log('newsId:'+ newsId)
        this.$get('/newsDetails').then(res => {  //要换接口
          let data = res.data.data
          if (res.code === 0) {
            this.leftNewsListData = data
             console.log(this.leftNewsListData)
          } else {
            this.$Message.error(data.msg);
          }
        })
      },
      // 初始化右侧数据
      getRightNewsList(activeNumber) {
        this.$get('/news/list/'+ activeNumber +'/1').then(res => {  //要换接口
          let data = res.data.data
          if (res.code === 0) {
            if(activeNumber === '6'){
              this.rightNewsListData = data.list.slice(2,7)
            }
          } else {
            this.$Message.error(data.msg);
          }
        })
      }

    },
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style scoped lang="less" type="text/less">
    body {
        section {
            .content{
                padding: 4% 9%;
                background: #f5f5f5;
                article{
                  padding: 40px;
                  background: #fff;
                  >h3{
                    font-size: 25px;
                    font-weight: bold;
                    margin: 10px 0;
                  }
                  >P{
                    margin: 10px 0;
                    color: #00aced;
                  }
                  >h4{
                    text-indent: 32px;
                    font-size: 16px;
                    margin: 10px 0;
                    line-height: 26px;
                  }
                  >img{
                    display: inline-block;
                    width: 100%;
                    height: auto;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    margin-left: auto;
                    margin-right: auto;
                  }
                  >div{
                    text-indent: 32px;
                    font-size: 16px;
                    text-align: justify;
                    line-height: 28px;
                    >p{
                      padding: 15px 0;
                    }
                  }

                }
                .inside {
                  background: #fff;
                  padding: 10px;
                    >h3{
                        font-size: 18px;
                        font-weight: bold;
                        border-bottom: 1px solid #e5e5e5;
                        padding: 0 0 15px 0;
                    }
                    >ul{
                        >li{
                            overflow: hidden;
                            padding: 10px 0;
                            display: flex;
                            cursor: pointer;
                            >span{
                                width: 100px;
                                >img{
                                    width: 100%;
                                }
                            }
                            >aside{
                                padding: 0 0 0 10px;
                                flex: 1;
                                >h4{
                                    font-size: 14px;
                                }
                                >p{
                                    width: 100%;
                                    max-height: 48px;
                                    font-size: 12px;
                                    color: #878787;
                                    margin: 5px 0 0 0;
                                    line-height: 18px;
                                }
                            }
                        }
                    }

                }
            }
        }
    }
</style>
