<template>
    <section>
        <Form ref="formValidateInfor" :model="formValidateInfor" :rules="ruleValidateInfor" :label-width="80">
            <div class="clearfix topBar">
                <h6>基本资料</h6>
                <span>
                    <Button type="warning" v-show="isShowInformation" @click="basicInformation">取消</Button>
                    <Button type="primary" v-show="isShowInformation" @click="submitInformation()">保存</Button>
                    <Button type="primary" v-show="!isShowInformation" @click="basicInformation">修改</Button>
                </span>
            </div>
            <div v-show="!isShowInformation">
                <FormItem label="姓名">
                    {{personalData.name}}
                </FormItem>
                <FormItem label="称谓">
                    {{sex_FN(personalData.sex)}}
                </FormItem>
                <FormItem label="出生日期">
                    {{personalData.birthdate}}
                </FormItem>
                <FormItem label="QQ">
                    {{personalData.qq}}
                </FormItem>
                <FormItem label="微信">
                    {{personalData.weixin}}
                </FormItem>
                <FormItem label="邮箱">
                    {{personalData.email}}
                </FormItem>
            </div>
            <div v-show="isShowInformation">
                <FormItem label="姓名" prop="name">
                    <Input v-model="formValidateInfor.name" placeholder="请输入您的姓名"></Input>
                </FormItem>
                <FormItem label="称谓" prop="sex">
                    <RadioGroup v-model="formValidateInfor.sex">
                        <Radio label="1">先生</Radio>
                        <Radio label="0">女士</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="出生日期" prop="birthdate">
                    <DatePicker type="date" format="yyyy-MM-dd" placeholder="请输入您的出生日期" v-model="formValidateInfor.birthdate"></DatePicker>
                </FormItem>
                <FormItem label="QQ" prop="qq">
                    <Input v-model="formValidateInfor.qq" placeholder="请输入您的联系QQ"></Input>
                </FormItem>
                <FormItem label="微信" prop="weixin">
                    <Input v-model="formValidateInfor.weixin" placeholder="请输入您的微信"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input v-model="formValidateInfor.email" placeholder="请输入您的邮箱"></Input>
                </FormItem>
            </div>
            <p class="border_bottom"></p>
        </Form>
        <Form  ref="formValidatePref" :model="formValidatePref" :rules="ruleValidatePref" :label-width="200">
            <div class="clearfix topBar">
                <h6>投资偏好</h6>
                <span>
                    <Button type="primary" v-show="!isShowPreference" @click="investmentPreference">修改</Button>
                </span>
            </div>
            <div v-show="!isShowPreference">
                <FormItem label="您感兴趣的城市">
                    {{PreferenceData.tendencyCity}}
                </FormItem>
                <FormItem label="您感兴趣的房屋类型">
                    {{PreferenceData.tendencyHouseType}}
                </FormItem>
                <FormItem label="您的投资偏好">
                    {{PreferenceData.investmentObjective}}
                </FormItem>
                <FormItem label="您的资金来源">
                    {{PreferenceData.capitalSource}}
                </FormItem>
                <FormItem label="您的购房预算">
                    {{PreferenceData.tendencyPrice}}
                </FormItem>
                <FormItem label="您的居住面积">
                    {{PreferenceData.tendencySize}}
                </FormItem>
                <FormItem label="学校类型">
                    {{PreferenceData.tendencyGreatSchool}}
                </FormItem>
            </div>
            <div v-show="isShowPreference">
                <FormItem label="您感兴趣的城市（*必选）" prop="tendencyCity">
                    <CheckboxGroup v-model="formValidatePref.tendencyCity">
                        <Checkbox label="旧金山"></Checkbox>
                        <Checkbox label="洛杉矶"></Checkbox>
                        <Checkbox label="纽约"></Checkbox>
                        <Checkbox label="西雅图"></Checkbox>
                        <Checkbox label="亚特兰大"></Checkbox>
                        <Checkbox label="波士顿"></Checkbox>
                        <Checkbox label="新泽西"></Checkbox>
                        <Checkbox label="休斯顿"></Checkbox>
                        <Checkbox label="圣地亚哥"></Checkbox>
                        <Checkbox label="奥兰多"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="您感兴趣的房屋类型（*必选）" prop="tendencyHouseType">
                    <CheckboxGroup v-model="formValidatePref.tendencyHouseType">
                        <Checkbox label="独栋别墅"></Checkbox>
                        <Checkbox label="联排别墅"></Checkbox>
                        <Checkbox label="公寓"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="您的投资偏好（*必选）" prop="investmentObjective">
                    <CheckboxGroup v-model="formValidatePref.investmentObjective">
                        <Checkbox label="长期持有"></Checkbox>
                        <Checkbox label="自住"></Checkbox>
                        <Checkbox label="增值投资"></Checkbox>
                        <Checkbox label="租金收益"></Checkbox>
                        <Checkbox label="儿女留学居住"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="您的资金来源（*必选）"  prop="capitalSource">
                    <CheckboxGroup v-model="formValidatePref.capitalSource">
                        <Checkbox label="国内资金"></Checkbox>
                        <Checkbox label="海外资金"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="您的购房预算（*必选）" prop="tendencyPrice">
                    <CheckboxGroup v-model="formValidatePref.tendencyPrice">
                        <Checkbox label="100万人民币以内"></Checkbox>
                        <Checkbox label="100-200万人民币"></Checkbox>
                        <Checkbox label="200-400万人民币"></Checkbox>
                        <Checkbox label="400-700万人民币"></Checkbox>
                        <Checkbox label="700-1000万人民币"></Checkbox>
                        <Checkbox label="1000万人民币以上"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="您的居住面积（*必选）" prop="tendencySize">
                    <CheckboxGroup v-model="formValidatePref.tendencySize">
                        <Checkbox label="100平米以内"></Checkbox>
                        <Checkbox label="150平米以内"></Checkbox>
                        <Checkbox label="200平米以内"></Checkbox>
                        <Checkbox label="250平米以内"></Checkbox>
                        <Checkbox label="300平米以内"></Checkbox>
                        <Checkbox label="400平米以内"></Checkbox>
                        <Checkbox label="500平米以内"></Checkbox>
                        <Checkbox label="500平米以上"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="学校类型（*必选）"  prop="tendencyGreatSchool">
                    <CheckboxGroup v-model="formValidatePref.tendencyGreatSchool">
                        <Checkbox label="1~5">不理想：<i>1</i> ~ <i>5</i></Checkbox>
                        <Checkbox label="6~7">合格：<i>6</i> ~ <i>7</i></Checkbox>
                        <Checkbox label="8~10">优秀：<i>8</i> ~ <i>10</i></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem>
                    <Button type="warning" v-show="isShowPreference" @click="investmentPreference">取消</Button>
                    <Button type="primary" v-show="isShowPreference"
                            style="margin-left: 50px;" @click="submitPreference">保存</Button>
                </FormItem>
            </div>
        </Form>
    </section>
</template>

<script>
  export default {
    data () {
      return {
        formValidateInfor: {
          name: '', // 姓名
          sex: '1', // 称谓
          birthdate: '', // 出生日期
          qq: '', // QQ
          weixin: '', // 微信
          email: '', // 邮箱
        },
        formValidatePref: {
          tendencyCity: [], // 意向城市
          tendencyHouseType: [], // 房源类型
          investmentObjective: [], // 投资偏好
          capitalSource: [], // 资金来源
          tendencyPrice: [], //购房预算
          tendencySize: [], // 面积倾向
          tendencyGreatSchool: [] // 学校
        },
        ruleValidateInfor: { // 基本资料校验
          name: [
            { required: true, message: '姓名不可为空！', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请指定称谓！', trigger: 'change' }
          ],
          birthdate: [
            { required: true, type: 'date', message: '出生日期不可为空！', trigger: 'change' }
          ],
          qq: [
            { required: true, message: 'QQ不可为空！', trigger: 'blur' }
          ],
          weixin: [
            { required: true, message: '微信不可为空！', trigger: 'blur' }
          ],
          email: [
            { required: true, validator: this.email_validation, trigger: 'blur' }
          ]
        },
        ruleValidatePref: { // 投资偏好校验
          tendencyCity: [
            { required: true, type: 'array', min: 1, message: '您感兴趣的城市（必选）!', trigger: 'change' }
          ],
          tendencyHouseType: [
            { required: true, type: 'array', min: 1, message: '您感兴趣的房屋类型（必选）!', trigger: 'change' }
          ],
          investmentObjective: [
            { required: true, type: 'array', min: 1, message: '您的投资偏好（必选）!', trigger: 'change' }
          ],
          capitalSource: [
            { required: true, type: 'array', min: 1, message: '您的资金来源（必选）!', trigger: 'change' }
          ],
          tendencyPrice: [
            { required: true, type: 'array', min: 1, message: '您的购房预算（必选）！', trigger: 'change' }
          ],
          tendencySize: [
            { required: true, type: 'array', min: 1, message: '您的居住面积（必选）！', trigger: 'change' }
          ],
          tendencyGreatSchool: [
            { required: true, type: 'array', min: 1, message: '学校类型（必选）！', trigger: 'change' }
          ]
        },
        isShowInformation: false, // 基本资料显示/隐藏
        isShowPreference: false, // 投资偏好显示/隐藏
        personalData:{}, // 个人设置信息 --基本资料
        PreferenceData:{} // 个人设置信息 --投资偏好
      }
    },
    mounted() {
        this.getPersonalData()
        this.getPreferenceData()
    },
    computed:{
    },
    methods: {
      // 获取个人设置--基本资料信息
      getPersonalData() {
        this.$get('/basic').then(res => {
          let data = res.data;
          if (res.code ===0) {
            this.personalData = data
            this.formValidateInfor.name = data.name
            this.formValidateInfor.birthdate = data.birthdate
            this.formValidateInfor.qq = data.qq
            this.formValidateInfor.sex = `${data.sex}`
            this.formValidateInfor.weixin = data.weixin
            this.formValidateInfor.email = data.email
          }
        })
      },
      // 获取个人设置投资偏好--信息
      getPreferenceData() {
        this.$get('/preferences').then(res => {
          let data = res.data;
          if (res.code === 0) {
            this.PreferenceData = data
            this.formValidatePref.tendencyCity = data.tendencyCity ? data.tendencyCity.split(',') : []
            this.formValidatePref.tendencyHouseType = data.tendencyHouseType ? data.tendencyHouseType.split(',') : []
            this.formValidatePref.investmentObjective = data.investmentObjective ? data.investmentObjective.split(',') : []
            this.formValidatePref.capitalSource = data.capitalSource ? data.capitalSource.split(',') : []
            this.formValidatePref.tendencyPrice = data.tendencyPrice ? data.tendencyPrice.split(',') : []
            this.formValidatePref.tendencySize = data.tendencySize ? data.tendencySize.split(',') : []
            this.formValidatePref.tendencyGreatSchool = data.tendencyGreatSchool ? data.tendencyGreatSchool.split(',') : []
          }
        })
      },
      // 基本资料显示/隐藏
      basicInformation () {
        this.isShowInformation = !this.isShowInformation
      },
      // 投资偏好显示/隐藏
      investmentPreference () {
        this.isShowPreference = !this.isShowPreference
      },
      // 提交基本资料保存信息
      submitInformation () {
        this.$refs.formValidateInfor.validate((valid) => {
          if (valid) {
            this.$post('/user/update/basics',{
              name: this.formValidateInfor.name,
              sex: this.formValidateInfor.sex,
              birthdate: this.formValidateInfor.birthdate,
              qq: this.formValidateInfor.qq,
              weixin: this.formValidateInfor.weixin,
              email: this.formValidateInfor.email
            }).then(res => {
              let data = res.data;
              if (res.code === 0) {
                this.$Message.success('修改成功!');
                this.personalData = {
                  name: this.formValidateInfor.name,
                  sex: this.formValidateInfor.sex,
                  birthdate: this.formValidateInfor.birthdate,
                  qq: this.formValidateInfor.qq,
                  weixin: this.formValidateInfor.weixin,
                  email: this.formValidateInfor.email
                }
              } else {
                this.$Message.error(data.msg);
              }
            })

          } else {
            this.$Message.error("请正确填写！");
          }
        })
      },
      // 提交投资偏好保存信息
      submitPreference () {
        this.$refs.formValidatePref.validate((valid) => {
          if (valid) {
            // this.PreferenceData = {
            //   tendencyCity: this.formValidatePref.tendencyCity.toString(),
            //   tendencyHouseType: this.formValidatePref.tendencyHouseType.toString(),
            //   investmentObjective: this.formValidatePref.investmentObjective.toString(),
            //   capitalSource: this.formValidatePref.capitalSource.toString(),
            //   tendencyPrice: this.formValidatePref.tendencyPrice.toString(),
            //   tendencySize: this.formValidatePref.tendencySize.toString(),
            //   tendencyGreatSchool: this.formValidatePref.tendencyGreatSchool.toString()
            // }
            //console.log(this.PreferenceData)
            this.$post('/user/update/basics',{
              tendencyCity: this.formValidatePref.tendencyCity.toString(),
              tendencyHouseType: this.formValidatePref.tendencyHouseType.toString(),
              investmentObjective: this.formValidatePref.investmentObjective.toString(),
              capitalSource: this.formValidatePref.capitalSource.toString(),
              tendencyPrice: this.formValidatePref.tendencyPrice.toString(),
              tendencySize: this.formValidatePref.tendencySize.toString(),
              tendencyGreatSchool: this.formValidatePref.tendencyGreatSchool.toString()
            }).then(res => {
              let data = res.data;
              if (res.code === 0) {
                this.$Message.success('修改成功!');
                this.PreferenceData = {
                  tendencyCity: this.formValidatePref.tendencyCity.toString(),
                  tendencyHouseType: this.formValidatePref.tendencyHouseType.toString(),
                  investmentObjective: this.formValidatePref.investmentObjective.toString(),
                  capitalSource: this.formValidatePref.capitalSource.toString(),
                  tendencyPrice: this.formValidatePref.tendencyPrice.toString(),
                  tendencySize: this.formValidatePref.tendencySize.toString(),
                  tendencyGreatSchool: this.formValidatePref.tendencyGreatSchool.toString()
                }
              } else {
                this.$Message.error(data.msg);
              }
            })
          } else {
            this.$Message.error("请正确填写！");
          }
        })
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
    body {
        section {
            .topBar{
                display: flex;
                padding-bottom: 10px;
                h6{
                    font-size: 18px;
                    flex: 1;
                    text-align: left;
                }
                span{
                    flex: 1;
                    text-align: right;

                }
            }
            .border_bottom{
                border-bottom: 1px  solid #dee2e5;
                margin-bottom: 20px;
            }
        }
    }
</style>
