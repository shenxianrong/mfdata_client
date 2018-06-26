<template>
    <section>
      <div v-if="myHouseReport.length">
        <div class="header clearfix">
          <span class="left">房产报告将在5分钟内为您生成</span>
          <p class="right">
            <span id="surplus-reports-number">剩余生成报告份数：{{restCount}}</span> |
            <span id="buyMore" @click="modalBuy = true">购买更多</span>
          </p>
        </div>
        <Table  :columns="columns" :data="myHouseReport"></Table>
        <br />
        <Page show-total :page-size="pageSize" :total="total"  @on-change="changePage"></Page>
      </div>
      <div class="no_data" v-else>
        <img src="http://beta-iusahome.oss-cn-shanghai.aliyuncs.com/img/order-noData.jpg" alt="没有数据" />
      </div>
      <!--请您选择购买份数 弹出框-->
      <Modal v-model="modalBuy" width="360">
        <p slot="header" style="color:rgb(99, 95, 95);text-align:center">
          <Icon type="home"></Icon>
          <span>优房数据提示您：</span>
        </p>
        <div style="text-align:left; line-height: 36px;">
          <p>请您选择购买份数：</p>
          <p>
            <RadioGroup v-model="selectCount" type="button" size="large" @on-change="totalCount">
              <Radio label="1">1份</Radio>
              <Radio label="2">10份</Radio>
              <Radio label="3">100份</Radio>
            </RadioGroup>
          </p>
          <p style="text-align:right; font-size: 16px;">总计：¥ {{grandTotal}}</p>
        </div>
        <div slot="footer" style="text-align: center">
          <P style="text-align: left;line-height: 36px;">在线支付</P>
          <Button type="primary" size="large" @click="createCode"><Icon type="social-yen"></Icon>&nbsp;&nbsp;支付宝扫码</Button>
          <Button type="success" size="large" @click="createCode"><Icon type="chatbubbles"></Icon>&nbsp;&nbsp;微信扫码</Button>
        </div>
      </Modal>
      <!--请尽快使用微信扫描二维码完成支付 弹出框-->
      <Modal v-model="modalCode" width="360">
        <p slot="header" style="color:rgb(99, 95, 95);text-align:center">
          <Icon type="home"></Icon>
          <span>请尽快使用微信扫描二维码完成支付：</span>
        </p>
        <div style="text-align:left; line-height: 36px;">
          <p style="text-align: center">
            <img src="data:image/png;base64,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"
                  alt="" />
          </p>
        </div>
        <div slot="footer">
          <Button type="primary" size="large" long  @click="modalCode=false">确定</Button>
        </div>
      </Modal>
    </section>
</template>


<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '房产报告名称',
          key: 'title',
          align: 'center',
          ellipsis:'ture'
        },
        {
          title: '生成状态',
          key: 'status',
          align: 'center'
        },
        {
          title: '生成日期',
          key: 'created',
          align: 'center'
        },
        {
          title: '报告类别',
          key: 'type',
          align: 'center'
        },
        {
          title: '下载',
          key: 'id',
          align: 'center',
          render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'arrow-down-a'
                  },
                  on: {
                    click: () => {
                      this.confirm(params.index)
                    }
                  }
                })
              ]);
            }
          }
      ],  // 房产报告表头
      myHouseReport: [], // 房产报告数据
      total: 0, // 数据总条数
      pageSize: 10, // 每条显示多少条
      arrayData: [], // 准备新数组存异步取回来数据
      restCount: '',  // 剩余生成报告份数
      modalBuy: false, //够买更多弹出框
      selectCount: '1', // 请您选择购买份数 --1/10/100
      grandTotal: '5.00', //请您选择购买份数 --总计
      modalCode:false //二维码弹出框

    }
  },
  computed: {},
  mounted() {
    this.getMyHouseReport()
    this.getSurplusTalk()
  },
  methods: {
    // 获取展示剩余房产报告生成份数
    getSurplusTalk () {
      this.$get('/basic').then(res => {  //要换接口
        let data = res.data
        if (res.code === 0) {
          this.restCount = data.qq   // 要改随便取的数
        } else {
          this.$Message.error(data.msg);
        }
      })
    },
    // 获取报告数据列表
    getMyHouseReport () {
      this.$get('/reportList').then(res => { //要换接口
        let data = res.data
        this.total  =   data.length
        if (res.code === 0) {
          //创建新数组，存需要的数据格式
          data.forEach((item, index) => {
            this.arrayData.push({
              title: item.title,
              status: this.statusReports(item.status),
              created: this.getDateDiff(item.created),
              type: this.isFreePay(item.type),
              id: item.id
            })
          })
          // 不够十条数据全部展示、超过十条先展示十条
          if ( data.length < this.pageSize) {
            this.myHouseReport = this.arrayData
          } else {
            this.myHouseReport = this.arrayData.slice(0,this.pageSize)
          }
        } else {
          this.$Message.error(data.msg);
        }

      })
    },
    // 购买更多
    buyMore () {
      this.modalBuy = true
    },
    // 提交订单 ----成生支付宝二维码、微信二维码
    createCode () {
      this.modalBuy = false
      this.modalCode = true
      // 请求借口
    },
    //请您选择购买份数--总计
    totalCount (){
      console.log(this.selectCount)
      const Count = this.selectCount
      if (Count == 1) {
        this.grandTotal = "5.00"
      }else if(Count == 2){
        this.grandTotal = "25.00"
      }else if(Count == 3){
        this.grandTotal = "199.00"
      }
    },
    // 下载
    confirm (index) {
     // console.log(this.myHouseReport[index].id)
      const  downloadID = this.myHouseReport[index].id  // 可能要传的ID
      this.$get('/basic').then(res => { //要换接口
        let data = res.data
        if (res.code === 0) {
          this.$Modal.confirm({
            title: '优房数据提示您：',
            content: '点击确定则下载此房源的房产报告（链接有效期30分钟）',
            onOk: () => {
              // 做跳转请求
              this.$router.push({path: '/myCollection', query: {data: data.weixin}});
            },
            onCancel: () => {
              this.$Message.info('取消下载');
            }
          });
        } else {
          this.$Message.error(data.msg);
        }

      })
    },
    // 分页数据
    changePage (index) {
      const start = ( index - 1 ) * this.pageSize
      const end = index * this.pageSize
      this.myHouseReport = this.arrayData.slice(start, end)
    },
    // 判断是否生成报告
    statusReports (data) {
      let val = ''
      if (data == 0) {
        val = '正在生成中'
      } else if (data == 1) {
        val = '生成成功'
      } else {
        val = '生成失败'
      }
      return val
    },
     //判断是否免费和收费报告
    isFreePay (data) {
      let val = ''
      if (data == 0) {
        val = '免费报告'
      } else {
        val = '付费报告'
      }
      return val
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
  body {
        section {
          .header {
            padding: 15px;
            background: #fff;
            p {
              span:last-of-type {
                color: #00b7ef;
                cursor: pointer;
              }
            }
          }
          .no_data {
            text-align: center;
          }
        }
    }
</style>
