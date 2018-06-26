<template>
    <section>
      <Carousel dots="none" arrow="never">
        <CarouselItem v-for="(item, index) in myCollectionData" :key="index"
                          class="companyRecommendHouse-box clearfix">
          <div class="inside" @click="goHouseDetails(item.houseId)">
            <div class="left">
              <img v-lazy="'http://youhome.oss-cn-zhangjiakou.aliyuncs.com/'+ item.heroImage">
              <p>
                <span>{{isNull0_USD(item.listPrice)}}</span>
                <span>{{isNull0_RMB(item.listPrice)}}</span>
              </p>
            </div>
            <div class="right">
              <h2><i></i> {{houseName(item)}}</h2>
              <div class="info">
                <div class="address">
                  <i class="iconfont icon-dingwei"></i>{{item.address}}
                </div>
                <p>占地：{{isNull0_sqft(item.livingArea) + '（' + isNull0_sqmt(item.livingArea) +'）'}}</p>
                <p>
                  <span class="left">卧室：{{isNull0(item.bedroomCount)}}间</span>
                  <span class="right">卫浴：{{isNull0(item.bathroomCount)}}间</span>
                </p>
                <p>
                  <span class="left">年份：{{isNull0(item.yearBuilt)}}</span>
                  <span class="right">状态：<span v-html="house_status(item.listingStatus)"></span></span>
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
    </section>
</template>

<script>
    export default {
        data() {
            return {
              myCollectionData: []
            }
        },
        computed: {},
        mounted() {
          this.getListData()
        },
        methods: {
          // 获取收藏信息数据列表
          getListData (){
            this.$get('/collectionHouseList').then(res => {
              let data = res.data;
              if (res.code === 0) {
                this.myCollectionData = data
                console.log(this.myCollectionData)
              }
            })
          }
        },
        components: {}
    }
</script>

<style scoped lang="less" type="text/less">
    body {
        section {
          .companyRecommendHouse-box {
            overflow: initial;
            padding: 0 20px;
            .inside {
              overflow: hidden;
              border-radius: 7px;
              box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
              -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
              -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
              -ms-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
              -o-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
              > .left,
              > .right {
                width: 100%;
                float: none;
              }
              > .left {
                cursor: pointer;
                text-align: center;
                position: relative;
                border-top-left-radius: 7px;
                border-top-right-radius: 7px;
                overflow: hidden;
                > img {
                  width: 100%;
                  height: 270px;
                  z-index: 1;
                  -webkit-transition: 1.5s ease;
                  -moz-transition: 1.5s ease;
                  -ms-transition: 1.5s ease;
                  -o-transition: 1.5s ease;
                  transition: 1.5s ease;
                }
                > p {
                  position: absolute;
                  left: 10px;
                  bottom: 10px;
                  z-index: 5;
                  font-size: 26px;
                  color: #89d3d9;
                  text-align: left;
                  > span {
                    display: block;
                  }
                  > span:last-of-type {
                    font-size: 23px;
                  }
                }
              }
              > .right {
                padding: 10px 10px 20px 0;
                background: #fff;
                border-bottom-left-radius: 7px;
                border-bottom-right-radius: 7px;
                text-align: left;
                > h2 {
                  display: block;
                  width: 100%;
                  line-height: 26px;
                  font-size: 19px;
                  color: #333;
                  font-weight: bold;
                  text-indent: 18px;
                  cursor: pointer;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  -o-text-overflow: ellipsis;
                  -webkit-text-overflow: ellipsis;
                  -moz-text-overflow: ellipsis;
                  white-space: nowrap;
                  > i {
                    float: left;
                    width: 5px;
                    height: 26px;
                    margin: 2px 0 0 0;
                    background: #00aeef;
                  }
                }
                > .info {
                  padding: 10px 0 0 20px;
                  > .address {
                    height: 35px;
                    line-height: 35px;
                    font-size: 15px;
                    color: #000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -o-text-overflow: ellipsis;
                    -webkit-text-overflow: ellipsis;
                    -moz-text-overflow: ellipsis;
                    white-space: nowrap;
                    > i {
                      font-size: 25px;
                      color: #2fa3f6;
                      float: left;
                    }
                  }
                  > p {
                    height: 14px;
                    line-height: 14px;
                    margin: 14px 0 0 0;
                    overflow: hidden;
                    font-size: 14px;
                    color: #000;
                    > span {
                      width: 50%;
                    }
                  }
                }
              }
            }
          }
        }
    }
</style>
