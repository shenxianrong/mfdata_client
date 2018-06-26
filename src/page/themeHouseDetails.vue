<template>
    <section>
        <app-header></app-header>
        <div class="theme-introduce-box">
            <div class="inside">
                <h4 id="theme-name">洛杉矶100万美元以下优秀学区房推荐</h4>
                <p id="theme-description">洛杉矶不仅有很多知名的大学在美国排行前列，不少义务制的小学、初中、高中教育水平也在全美排行前列，美国知名的企业家，金融业的行家，影视明星的子女就在洛杉矶就读，在这儿完成自己的学业，很多学生在洛杉矶大学毕业后都走上了社会上重要的岗位。</p>
                <br /> <br /> <br /> <br />
                <router-link to="/themeHouseList">
                    <Button type="primary" >
                        <i class="iconfont icon-cencel"></i>返回主题列表
                    </Button>
                </router-link>
            </div>
        </div>
        <Row class="main" v-if="getListData.length">
            <Col :xs="{ span: 24}"  :md="{ span: 8}" v-for="(item, index) in getListData" :key="index">
                <div class="listBox">
                    <div class="inside">
                        <div class="left">
                            <img v-lazy="'http://youhome.oss-cn-zhangjiakou.aliyuncs.com/'+ item.heroImage" alt="" />
                            <p>
                                <span id="unit-dollor-show">{{isNull0_USD(item.listPrice)}}</span>
                                <span id="unit-rmb-show">{{isNull0_RMB(item.listPrice)}}</span>
                            </p>
                            <i class="iconfont icon-icon-test UNcollection-houselist-this"  title="收藏"></i>
                            <i class="iconfont icon-fenxiang list-share-house" title="分享房源" @click="shareThisDetails(item.houseId)"></i>
                        </div>
                        <div class="right">
                            <h2 class="transition webkit-text-overflow-1lines">
                                <i></i> {{houseName(item)}}
                            </h2>
                            <div class="info">
                                <div class="address webkit-text-overflow-1lines">
                                    <i class="iconfont icon-dingwei"></i>{{item.address}}
                                </div>
                                <p>
                                    <span class="left">年份：{{isNull0(item.yearBuilt)}}</span>
                                    <span class="right">占地：{{isNull0_sqmt(item.livingArea)}}</span>
                                </p>
                                <p>
                                    <span class="left">卧室：{{isNull0(item.bedroomCount)}}间</span>
                                    <span class="left">卫浴：{{isNull0(item.bathroomCount)}}间</span>
                                </p>
                                <p style="color: red;">
                                    状态：<span v-html="house_status(item.listingStatus)" style="color: red" ></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col style="text-align: center" span="24">
                <Page show-total :page-size="pageSize" :total="total"  @on-change="changePage"></Page>
            </Col>
        </Row>
        <Row class="no_data" v-else>
            <Col span="24">暂无数据</Col>
        </Row>
        <app-footer></app-footer>
        <Modal v-model="shareQRcode_dialog"  width="300">
          <br>
          <qrcode-vue :value="shareQRcode_value" size="250" level="H" class="shareGroupQRcode-img"></qrcode-vue>
        </Modal>
    </section>
</template>

<script>
  // 生成二维码插件
  import QrcodeVue from 'qrcode.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'

  export default {
    data() {
      return {
        getListData:[], // 数据存储
        arrayData:[], // 准备新数组存异步取回来数据
        total:0, // 共多少条数据
        pageSize: 9, // 每条显示多少条
        shareQRcode_dialog: false,//分享组的二维码的Dialog对话框
        shareQRcode_value: '',//分享组的二维码的链接
      }
    },
    mounted() {
      this.getThemeHouseDetail()
    },
    methods: {
     // 获取主题详情列表
      getThemeHouseDetail (){
        this.$get('/collectionHouseList').then(res => {
            let data = res.data;
            if (res.code === 0) {
                this.total = data.length
                this.arrayData = data
                if ( data.length < this.pageSize) {
                    this.getListData = this.arrayData
                } else {
                    this.getListData = this.arrayData.slice(0,this.pageSize)
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
    this.getListData = this.arrayData.slice(start, end)
  },
      shareThisDetails(houseId){
        console.log( houseId)
        this.shareQRcode_dialog = true
        this.shareQRcode_value = 'http://'+ window.location.host +'/houseDetails?houseId='+ houseId
      }
    },
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'qrcode-vue': QrcodeVue
    }
  }
</script>

<style scoped lang="less" type="text/less">
    body {
        background: #efeff1;
        .shareGroupQRcode-img {
          text-align: center;
        }
        header{
            width: 100%;
            padding: 15px 0;
            background: #fff;
            text-align: center;
            >img{
                max-width: 150px;
            }
        }
        .theme-introduce-box {
            width: 100%;
            min-height: 360px;
            background: url(http://beta-iusahome.oss-cn-shanghai.aliyuncs.com/img/footer-bg2.jpg) no-repeat center center;
            background-size: cover;
            overflow: hidden;
            position: relative;
            >.inside{
                width: 100%;
                min-height: 360px;
                background: rgba(15, 40, 54, 0.5);
                text-align: center;
                overflow: hidden;
                font-family: "Helvetica Neue", Helvetica, "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
                >h4 {
                    font-size: 20px;
                    color: #fff;
                    margin: 30px 0;
                }
                >p {
                    max-width: 700px;
                    font-size: 16px;
                    color: #fff;
                    margin: 30px auto;
                    text-align: left;
                }
                >.button {
                    margin-bottom: -220px;

                }
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
           .listBox {
               padding: 0 5% 9%;
               >.inside {
                   overflow: hidden;
                   border-radius: 7px;
                   box-shadow: 4px 4px 9px -3px #858383;
                   -webkit-box-shadow: 4px 4px 9px -3px #858383;
                   -moz-box-shadow: 4px 4px 9px -3px #858383;
                   -ms-box-shadow: 4px 4px 9px -3px #858383;
                   -o-box-shadow: 4px 4px 9px -3px #858383;
                   >.left {
                       width: 100%;
                       height: 240px;
                       cursor: pointer;
                       text-align: center;
                       position: relative;
                       border-top-left-radius: 7px;
                       border-top-right-radius: 7px;
                       overflow: hidden;
                        >img {
                            width: 100%;
                            height: 100%;
                            z-index: 1;
                            -webkit-transition: all linear 1s;
                            -moz-transition: all linear 1s;
                            transition: all linear 1s;
                        }
                        >p{
                            position: absolute;
                            left: 10px;
                            bottom: 10px;
                            z-index: 5;
                            color: #89d3d9;
                            >span{
                                display: block;
                                font-size: 22px;
                            }
                        }
                       >i{
                           display: block;
                           cursor: pointer;
                           font-size: 25px;
                           z-index: 5;
                           color: #29a3f9;
                           font-weight: bold;
                           -webkit-transition: .35s;
                           -moz-transition: .35s;
                           -ms-transition: .35s;
                           -o-transition: .35s;
                           transition: .35s;
                       }
                       > i.UNcollection-houselist-this{
                           position: absolute;
                           right: 10px;
                           top: 10px;
                       }
                       >i.UNcollection-houselist-this:active {
                           transform: scale(1.5, 1.5);
                       }
                       >i.UNcollection-houselist-this:hover{
                           color: red;
                           transform: scale(1.2);
                       }
                       > i.list-share-house{
                           position: absolute;
                           right: 10px;
                           bottom: 10px;
                           font-size: 26px;
                       }
                       >i.list-share-house:hover {
                           transform: scale(1.2, 1.2);
                       }
                   }
                   >.left:hover{
                       >img{
                           -webkit-transform: scale(1.1);
                           -moz-transform: scale(1.1);
                           transform: scale(1.1);
                       }
                   }
                   >.right {
                       float: left;
                       width: 100%;
                       padding: 10px 10px 20px 0;
                       background: #fff;
                       border-bottom-left-radius: 7px;
                       border-bottom-right-radius: 7px;
                       >h2 {
                           display: block;
                           width: 100%;
                           line-height: 26px;
                           font-size: 18px;
                           color: #333;
                           font-weight: bold;
                           text-indent: 18px;
                           >i{
                               float: left;
                               width: 5px;
                               height: 26px;
                               background: #00aeef;
                           }
                       }
                       >.info{
                           padding: 10px 0 0 15px;
                           >.address{
                               height: 35px;
                               line-height: 35px;
                               font-size: 15px;
                               color: #000;
                               >i{
                                   float: left;
                                   font-size: 25px;
                                   color: #2fa3f6;
                               }
                           }
                           >p {
                               height: 14px;
                               line-height: 14px;
                               font-size: 14px;
                               color: #000;
                               margin: 14px 0 0 0;
                               overflow: hidden;
                               display: flex;
                               >span{
                                   display: block;
                                   flex: 1;
                               }
                           }
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
