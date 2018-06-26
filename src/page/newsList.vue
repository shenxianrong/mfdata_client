<template>
  <section>
    <app-header></app-header>
    <Row :gutter="30" class="content">
      <Col :xs="{ span: 24}" :md="{ span: 16}">
        <Tabs :animated="false" :value="activeNumber" @on-click="getTabsData">
          <TabPane label="美国房产" name="6">
            <ul class="article">
              <router-link tag="li"  v-for="(item, index) in leftNewsListData" :key="index"
                           v-if="leftNewsListData.length"
                           :to="{path:'/newsDetails?id='+ item.id}">
                <span>
                  <img  v-lazy="item.photo" alt="" />
                </span>
                <div>
                  <h3 class="webkit-text-overflow-2lines">{{isNull0(item.title)}}</h3>
                  <aside class="webkit-text-overflow-3lines">{{isNull0(item.summary)}}</aside>
                  <p class="clearfix">
                    <span class="left">
                      <i class="iconfont icon-fabushijian"></i> {{getDateDiff(item.ctime)}}
                    </span>
                    <span class="right">
                      <i class="iconfont icon-source"></i> {{isNull0(item.source)}}
                    </span>
                  </p>
                </div>
              </router-link>
              <li v-if="leftNewsListData.length">
                <Page show-total :page-size="pageSize" :total="total"  @on-change="changePage"></Page>
              </li>
              <li v-else>
                暂无数据
              </li>
            </ul>
          </TabPane>
          <TabPane label="财经" name="7">
            <ul class="article">
              <router-link tag="li" v-for="(item, index) in leftNewsListData" :key="index"
                  v-if="leftNewsListData.length"
                  :to="{path:'/newsDetails?id='+ item.id}">
                <span>
                  <img  v-lazy="item.photo" alt="" />
                </span>
                <div>
                  <h3 class="webkit-text-overflow-2lines">{{isNull0(item.title)}}</h3>
                  <aside class="webkit-text-overflow-3lines">{{isNull0(item.summary)}}</aside>
                  <p class="clearfix">
                    <span class="left">
                      <i class="iconfont icon-fabushijian"></i> {{getDateDiff(item.ctime)}}
                    </span>
                    <span class="right">
                      <i class="iconfont icon-source"></i> {{isNull0(item.source)}}
                    </span>
                  </p>
                </div>
              </router-link>
              <li v-if="leftNewsListData.length">
                <Page show-total :page-size="pageSize" :total="total"  @on-change="changePage"></Page>
              </li>
              <li v-else>
                暂无数据
              </li>
            </ul>
          </TabPane>
          <TabPane label="移民" name="8">
            <ul class="article">
              <router-link tag="li"  v-for="(item, index) in leftNewsListData" :key="index"
                           v-if="leftNewsListData.length"
                           :to="{path:'/newsDetails?id='+ item.id}">
                <span>
                  <img  v-lazy="item.photo" alt="" />
                </span>
                <div>
                  <h3 class="webkit-text-overflow-2lines">{{isNull0(item.title)}}</h3>
                  <aside class="webkit-text-overflow-3lines">{{isNull0(item.summary)}}</aside>
                  <p class="clearfix">
                    <span class="left">
                      <i class="iconfont icon-fabushijian"></i> {{getDateDiff(item.ctime)}}
                    </span>
                    <span class="right">
                      <i class="iconfont icon-source"></i> {{isNull0(item.source)}}
                    </span>
                  </p>
                </div>
              </router-link>
              <li v-if="leftNewsListData.length">
                <Page show-total :page-size="pageSize" :total="total"  @on-change="changePage"></Page>
              </li>
              <li v-else>
                暂无数据
              </li>
            </ul>
          </TabPane>
          <TabPane label="生活" name="9">
            <ul class="article">
              <router-link tag="li" v-for="(item, index) in leftNewsListData" :key="index"
                           v-if="leftNewsListData.length"
                           :to="{path:'/newsDetails?id='+ item.id}">
                <span>
                  <img  v-lazy="item.photo" alt="" />
                </span>
                <div>
                  <h3 class="webkit-text-overflow-2lines">{{isNull0(item.title)}}</h3>
                  <aside class="webkit-text-overflow-3lines">{{isNull0(item.summary)}}</aside>
                  <p class="clearfix">
                    <span class="left">
                      <i class="iconfont icon-fabushijian"></i> {{getDateDiff(item.ctime)}}
                    </span>
                    <span class="right">
                      <i class="iconfont icon-source"></i> {{isNull0(item.source)}}
                    </span>
                  </p>
                </div>
              </router-link>
              <li v-if="leftNewsListData.length">
                <Page show-total :page-size="pageSize" :total="total"  @on-change="changePage"></Page>
              </li>
              <li v-else>
                暂无数据
              </li>
            </ul>
          </TabPane>
        </Tabs>
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
              暂无数据
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
        leftNewsListData: [], // 左侧数据
        rightNewsListData: [], // 右侧数据
        arrayData: [], // 准备新数组存异步取回来数据
        total: 0, // 数据总条数
        pageSize: 10, // 每条显示多少条
      }
    },
    mounted() {
      this.getRightNewsList(this.activeNumber);
    },
    methods: {
      getTabsData(tab) {
        console.log(tab)
        this.getRightNewsList(tab);
      },
      // 初始化数据
      getRightNewsList(activeNumber) {
        this.total = 0
        this.$get('/news/list/'+ activeNumber +'/1').then(res => {  //要换接口
          let data = res.data.data
          if(activeNumber === '6'){
            this.rightNewsListData = data.list.slice(2,7)
          }
          if (res.code === 0) {
            this.total = data.list.length
            this.arrayData =  data.list

            if ( data.length < this.pageSize) {
              this.leftNewsListData = this.arrayData
            } else {
              this.leftNewsListData = this.arrayData.slice(0,this.pageSize)
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
        this.leftNewsListData = this.arrayData.slice(start, end)
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
        .article{
          padding: 20px 0px;
          >li{
            display: flex;
            padding: 30px 0;
            border-bottom: 1px solid #e5e5e5;
            cursor: pointer;
            >span{
              display: block;
              width: 30%;
              padding:0px 10px;
              text-align: center;
              >img{
                width: 100%;
              }
            }
            >div{
              flex: 1;
              padding: 0 0 0 10px;
              >h3{
                padding: 5px 0;
                font-size: 18px;
                font-weight: bold;
                color: #38485a;
                cursor: pointer;
                -webkit-transition: .35s;
                -moz-transition: .35s;
                -ms-transition: .35s;
                -o-transition: .35s;
                transition: .35s;
                text-indent: 0;
              }
              >aside{
                padding: 5px 0;
                overflow: hidden;
                max-height: 82px;
                font-size: 16px;
              }
              >p{
                margin: 0;
                color: #999;
                font-size: 14px;
                overflow: hidden;
              }

            }
          }
        }
        .inside {
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
