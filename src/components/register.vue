<template>
    <section>
        <!--轮播背景图-->
        <div class="document-bg">
            <div class="swiper-container" id="document-bg-swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img data-src="/static/img/header-bg1.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="/static/img/header-bg2.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="/static/img/header-bg3.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="/static/img/header-bg4.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="/static/img/header-bg5.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="/static/img/header-bg6.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="/static/img/header-bg7.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                    <div class="swiper-slide">
                        <img data-src="/static/img/header-bg8.jpg" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content clearfix">
            <div class="header clearfix">
                <a><img v-lazy="'../../../static/img/logo.png'"/></a>
                <p class="no-login-box">
                    <router-link to="/">登录</router-link>
                    |
                    <router-link to="/register" class="active">注册</router-link>
                </p>
            </div>

            <article class="clientRegister-box">
                <div class="header">
                    <img v-lazy="'../../../static/img/logo-reigster.png'"/>
                </div>
                <div class="inside">
                    <div class="swiper-container swiper-container-clientRegister">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <Form :model="ruleForm" :rules="rules" ref="ruleForm">
                                    <FormItem prop="name">
                                        <Input v-model="ruleForm.name" autocomplete="on"
                                               placeholder="姓名"
                                               icon="person"></Input>
                                    </FormItem>
                                    <FormItem prop="phone">
                                        <Input v-model.number="ruleForm.phone" :maxlength=11
                                               autocomplete="on"
                                               placeholder="电话" icon="android-call"></Input>
                                    </FormItem>
                                    <FormItem prop="email">
                                        <Input v-model="ruleForm.email" autocomplete="on"
                                               placeholder="邮箱"
                                               icon="ios-email"></Input>
                                    </FormItem>
                                    <FormItem prop="code">
                                        <Input v-model.number="ruleForm.code" :maxlength=6
                                               placeholder="验证码"></Input>
                                        <Button type="primary" class="register-verification-code" @click="sendCode"
                                                :disabled="code_disabled">{{ codeText }}
                                        </Button>
                                    </FormItem>
                                    <FormItem style="text-align: center">
                                        <Button type="primary" @click.stop="continueRegister"
                                                style="padding: 6px 30px">继续
                                            <Icon type="arrow-right-c"></Icon>
                                        </Button>
                                        <p>已有账号？
                                            <router-link to="/">点此登录</router-link>
                                        </p>
                                    </FormItem>
                                </Form>
                            </div>
                            <div class="swiper-slide">
                                <article class="find-house-preferences">
                                    <CheckboxGroup v-model="tendencyCity" class="clearfix tendencyCity-box">
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
                                    <aside>
                                        <Button type="primary" class="prev-step" @click.stop="stepShow = false"
                                                icon="arrow-left-c">
                                            上一步
                                        </Button>
                                        <Button type="success" class="next-step" :checkBtnDisabled="checkBtnDisabled"
                                                :disabled="cityDisabled" @click.stop="slideNext(2)">下一步 <Icon type="arrow-right-c"></Icon>
                                        </Button>
                                    </aside>
                                    <h6 class="next-step" @click.stop="slideNext(2)">跳过</h6>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="find-house-preferences">
                                    <CheckboxGroup v-model="tendencyHouseType" class="clearfix">
                                        <Checkbox label="独栋别墅"></Checkbox>
                                        <Checkbox label="联排别墅"></Checkbox>
                                        <Checkbox label="公寓"></Checkbox>
                                    </CheckboxGroup>
                                    <aside>
                                        <Button type="primary" class="prev-step" @click.stop="prevStepFN"
                                                icon="arrow-left-c"> 上一步
                                        </Button>
                                        <Button type="success" class="next-step" :disabled="typeDisabled"
                                                :checkBtnDisabled="checkBtnDisabled" @click.stop="slideNext(3)">下一步 <Icon type="arrow-right-c"></Icon>
                                        </Button>
                                    </aside>
                                    <h6 class="next-step" @click.stop="slideNext(3)">跳过</h6>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="find-house-preferences">
                                    <CheckboxGroup v-model="investmentObjective" class="clearfix">
                                        <Checkbox label="长期持有"></Checkbox>
                                        <Checkbox label="自住"></Checkbox>
                                        <Checkbox label="增值投资"></Checkbox>
                                        <Checkbox label="租金收益"></Checkbox>
                                        <Checkbox label="儿女留学居住"></Checkbox>
                                    </CheckboxGroup>
                                    <aside>
                                        <Button type="primary" class="prev-step" @click.stop="prevStepFN"
                                                icon="arrow-left-c"> 上一步
                                        </Button>
                                        <Button type="success" class="next-step" :disabled="investmentDisabled"
                                                :checkBtnDisabled="checkBtnDisabled" @click.stop="slideNext(4)">下一步 <Icon type="arrow-right-c"></Icon>
                                        </Button>
                                    </aside>
                                    <h6 class="next-step" @click.stop="slideNext(4)">跳过</h6>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="find-house-preferences">
                                    <CheckboxGroup v-model="tendencyPrice" class="clearfix">
                                        <Checkbox label="100万人民币以内"></Checkbox>
                                        <Checkbox label="100-200万人民币"></Checkbox>
                                        <Checkbox label="200-400万人民币"></Checkbox>
                                        <Checkbox label="400-700万人民币"></Checkbox>
                                        <Checkbox label="700-1000万人民币"></Checkbox>
                                        <Checkbox label="1000万人民币以上"></Checkbox>
                                    </CheckboxGroup>
                                    <aside>
                                        <Button type="primary" class="prev-step" @click="prevStepFN"
                                                icon="arrow-left-c"> 上一步
                                        </Button>
                                        <Button type="success" class="next-step" :disabled="intentionPriceDisabled"
                                                :checkBtnDisabled="checkBtnDisabled" @click.stop="slideNext(5)">下一步 <Icon type="arrow-right-c"></Icon>
                                        </Button>
                                    </aside>
                                    <h6 class="next-step" @click.stop="slideNext(5)">跳过</h6>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="find-house-preferences">
                                    <CheckboxGroup v-model="tendencySize" class="clearfix">
                                        <Checkbox label="100平米以内"></Checkbox>
                                        <Checkbox label="150平米以内"></Checkbox>
                                        <Checkbox label="200平米以内"></Checkbox>
                                        <Checkbox label="250平米以内"></Checkbox>
                                        <Checkbox label="300平米以内"></Checkbox>
                                        <Checkbox label="400平米以内"></Checkbox>
                                        <Checkbox label="500平米以内"></Checkbox>
                                        <Checkbox label="500平米以上"></Checkbox>
                                    </CheckboxGroup>
                                    <aside>
                                        <Button type="primary" class="prev-step" @click.stop="prevStepFN"
                                                icon="arrow-left-c"> 上一步
                                        </Button>
                                        <Button type="success" class="next-step" :disabled="areaDisabled"
                                                :checkBtnDisabled="checkBtnDisabled" @click.stop="slideNext(6)">下一步 <Icon type="arrow-right-c"></Icon>
                                        </Button>
                                    </aside>
                                    <h6 class="next-step" @click.stop="slideNext(6)"> 跳过</h6>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="find-house-preferences">
                                    <CheckboxGroup v-model="tendencyGreatSchool"
                                                   class="clearfix checkBox-greatSchool">
                                        <Checkbox label="1~5" class="Not-ideal">不理想：
                                            <i>1</i> ~
                                            <i>5</i>
                                        </Checkbox>
                                        <Checkbox label="6~7" class="qualified">合格：
                                            <i>6</i> ~
                                            <i>7</i>
                                        </Checkbox>
                                        <Checkbox label="8~10" class="good">优秀：
                                            <i>8</i> ~
                                            <i>10</i>
                                        </Checkbox>
                                    </CheckboxGroup>
                                    <aside>
                                        <Button type="primary" class="prev-step" @click.stop="prevStepFN"
                                                icon="arrow-left-c"> 上一步
                                        </Button>
                                        <Button type="success"
                                                :disabled="greatSchoolDisabled"
                                                :checkBtnDisabled="checkBtnDisabled" @click.stop="submitRegister"><i class="iconfont icon-submit"></i> 确认提交
                                        </Button>
                                    </aside>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="step-box" v-show="stepShow">
                        <h3>选房偏好</h3>
                        <Steps :current="setpActive">
                            <Step title="意向城市"></Step>
                            <Step title="房屋类型"></Step>
                            <Step title="投资偏好"></Step>
                            <Step title="购房预算"></Step>
                            <Step title="面积倾向"></Step>
                            <Step title="学区评分"></Step>
                        </Steps>
                    </div>
                </div>
            </article>

        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    let phoneReg = /^(1)[3|4|5|6|7|8|9](\d){9}$/
    export default {
        data() {
            return {
                setpActive: 0, //选房偏好步骤条当前index
                ruleForm: {
                    name: '', //姓名
                    phone: '', //手机号
                    email: '', //邮箱
                    code: '' //6位数验证码
                },
                tendencyCity: [], //意向城市
                tendencyHouseType: [], //房屋类型
                investmentObjective: [], // 投资偏好
                tendencyPrice: [], // 购房预算
                tendencySize: [], // 面积倾向
                tendencyGreatSchool: [], // 学区评分
                cityDisabled: true, //判断意向城市下一步按钮状态
                typeDisabled: true, //判断房屋类型下一步按钮状态
                investmentDisabled: true, //判断投资偏好下一步按钮状态
                intentionPriceDisabled: true, //判断购房预算下一步按钮状态
                areaDisabled: true, //判断面积倾向下一步按钮状态
                greatSchoolDisabled: true, //判断学区评分的确认提交按钮状态
                Transform: '',
                rules: {
                    //表单验证规则
                    name: [
                        {
                            required: true,
                            message: '请输入姓名',
                            trigger: 'blur'
                        }
                    ],
                    phone: [
                        {
                            required: true,
                            message: '请输入联系电话'
                        },
                        {
                            required: true,
                            type: 'number',
                            message: '电话号码必须是数字'
                        },
                        {
                            required: true,
                            validator: this.phone_validation,
                            trigger: 'blur'
                        }
                    ],
                    email: [
                        {
                            required: true,
                            message: '请输入邮箱'
                        },
                        {
                            required: true,
                            validator: this.email_validation,
                            trigger: 'blur'
                        }
                    ],
                    code: [
                        {
                            required: true,
                            validator: this.code_validation,
                            trigger: 'blur'
                        }
                    ]
                },
                verificationCode: '', //验证码的验证串
                codeTime: 0, //获取验证码倒计时
                codeText: '获取验证码', //获取验证码按钮的提示文本
                code_disabled: false, //获取验证码按钮的状态
                stepShow: false, //显示隐藏步骤条
                bgSwiper: null,//背景轮播图swiper配置
                registerSwiper: null,//注册框的swiper配置
            }
        },
        computed: {
            //判断选房偏好每个下一步按钮的状态
            checkBtnDisabled() {
                // 判断意向城市下一步按钮状态
                if (this.tendencyCity.length > 0) {
                    this.cityDisabled = false
                } else {
                    this.cityDisabled = true
                }
                // 判断房屋类型下一步按钮状态
                if (this.tendencyHouseType.length > 0) {
                    this.typeDisabled = false
                } else {
                    this.typeDisabled = true
                }
                // 判断投资偏好下一步按钮状态
                if (this.investmentObjective.length > 0) {
                    this.investmentDisabled = false
                } else {
                    this.investmentDisabled = true
                }
                // 判断购房预算下一步按钮状态
                if (this.tendencyPrice.length > 0) {
                    this.intentionPriceDisabled = false
                } else {
                    this.intentionPriceDisabled = true
                }
                // 判断面积倾向下一步按钮状态
                if (this.tendencySize.length > 0) {
                    this.areaDisabled = false
                } else {
                    this.areaDisabled = true
                }
                // 判断学区评分的确认提交按钮状态
                if (this.tendencyGreatSchool.length > 0) {
                    this.greatSchoolDisabled = false
                } else {
                    this.greatSchoolDisabled = true
                }
            }
        },
        mounted() {
            //背景轮播图swiper配置
            this.bgSwiper = new Swiper('#document-bg-swiper-container', {
                autoplay: {
                    delay: 5000,//自动切换的时间间隔，单位ms
                    stopOnLastSlide: false,//如果设置为true，当切换到最后一个slide时停止自动切换
                    disableOnInteraction: true,//用户操作swiper之后，是否禁止autoplay。默认为true,如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
                },
                effect: 'fade',//slide的切换效果：淡入淡出
                spaceBetween: 0,//slide之间的距离（单位px）
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 1,
                },
            });

            //注册框的swiper配置
            this.registerSwiper = new Swiper('.swiper-container-clientRegister', {
                noSwiping: true, //禁止鼠标拖动
                noSwipingClass: 'swiper-slide',
                navigation: {
                    prevEl: '.prev-step',
                    nextEl: '.next-step'
                }
            });

            this.isCodeTime()
        },
        methods: {
            //发送验证码
            sendCode() {
                let phone = this.ruleForm.phone;
                // 手机号正则验证
                if (phoneReg.test(phone)) {
                    // 手机号符合验证
                    this.$get('/sms/code/client/' + phone).then(res => {
                        if (res.status == 0) {
                            this.codeTime = 60;
                            this.code_disabled = true;
                            this.codeCountdown();
                            this.verificationCode = res.data;
                            this.$Message.success( '发送成功，请您耐心等待短信通知。' )
                        } else {
                            this.$Message.warning(res.msg)
                        }
                    })
                } else {
                    this.$Message.warning('手机号格式错误。')
                }
            },
            // 防刷新：检测是否存在倒计时计算localStorage.codeTime
            isCodeTime() {
                if (localStorage.codeTime) {
                    this.codeTime = parseInt(localStorage.codeTime);
                    this.codeText = this.codeTime + 's后重新获取';
                    this.code_disabled = true;
                    let resend = setInterval(function () {
                        this.codeTime--;
                        if (this.codeTime > 0) {
                            this.codeText = this.codeTime + 's后重新获取';
                            localStorage.codeTime = this.codeTime;
                        } else {
                            localStorage.removeItem('codeTime');
                            clearInterval(resend);
                            this.codeText = '获取验证码';
                            this.code_disabled = true;
                        }
                    }, 1000)
                }
            },
            //验证码倒计时计算
            codeCountdown() {
                if (this.codeTime > 0) {
                    this.codeTime--;
                    this.codeText = this.codeTime + 's后重新获取';
                    setTimeout(this.codeCountdown, 1000);
                    localStorage.codeTime = this.codeTime;
                } else {
                    this.codeTime = 0;
                    this.codeText = '获取验证码';
                    this.code_disabled = false;
                    localStorage.removeItem('codeTime')
                }
            },
            // 点击继续注册按钮
            continueRegister() {
                this.$refs.ruleForm.validate(valid => {
                    if (valid) {
                        this.registerSwiper.slideNext(500);
                        this.stepShow = true
                    } else {
                        this.$Message.warning('输入有误，请检查并重新输入！')
                    }
                })
            },
            //步骤条点击上一步
            prevStepFN() {
                this.setpActive = this.setpActive - 1
            },
            //步骤条点击下一步
            slideNext(index) {
                this.setpActive = index - 1
            },
            //确认提交注册
            submitRegister() {
                this.$post('/client/signin', {
                    source: '3',
                    id: localStorage.companyUUID,
                    name: this.ruleForm.name, //客户姓名
                    phone: this.ruleForm.phone, //客户电话
                    email: this.ruleForm.email, //客户邮箱
                    msg: this.ruleForm.code, //验证码
                    msgId: '123',
                    tendencySite: this.tendencyCity.join(), //选取的意向城市
                    tendencyRoom: this.tendencyHouseType.join(), //选取的房源类型
                    investmentObjective: this.investmentObjective.join(), //选取的投资偏好
                    tendencyPrice: this.tendencyPrice.join(), //选取的购房预算
                    tendencySize: this.tendencySize.join(), //选取的面积倾向
                    tendencySchool: this.tendencyGreatSchool.join() //选取的学区评分
                }).then(res => {
                    if (res.status == 0) {
                        this.$Message.success('注册成功!')
                        //后续操作——要跳转到公司配置的二级主页
                    } else {
                        this.$Message.warning(res.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less" type="text/less">
    body {
        section {
            /*---------------------轮播背景图---------------------*/
            .document-bg {
                position: fixed;
                z-index: 1;
                left: 0;
                right: 0;
                top: 0;
                width: 100%;
                height: 100%;
                .swiper-container {
                    width: 100%;
                    height: 100%;
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: #fff;
                    }
                }
                .swiper-slide {
                    width: 100%;
                    height: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    @media (max-width: 1400px) {
                        img {
                            width: auto;
                            height: 100%;
                        }
                    }
                }
            }

            /*---------------------登录框内容---------------------*/
            .content {
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 2;
                > .header {
                    position: relative;
                    line-height: 40px;
                    margin: 20px 0 0 0;
                    padding: 0 30px;
                    > a {
                        float: left;
                        display: inline-block;
                        width: auto;
                        height: auto;
                        cursor: pointer;
                        > img {
                            width: auto;
                            height: auto;
                            max-width: 150px;
                        }
                    }
                    > p {
                        float: right;
                        color: #d5d7d8;
                        > a {
                            font-size: 15px;
                            color: #d5d7d8;
                            font-weight: bold;
                            cursor: pointer;
                            -webkit-transition: .35s;
                            -moz-transition: .35s;
                            -ms-transition: .35s;
                            -o-transition: .35s;
                            transition: .35s;
                            text-decoration: none;
                        }
                        > a.active {
                            color: #2196f3;
                            font-weight: bold;
                        }
                        > a:hover {
                            color: #2196f3;
                            font-weight: bold;
                        }
                    }
                    > p.no-login-box {
                        text-align: right;
                    }
                }
                .clientRegister-box {
                    width: 400px;
                    background: rgba(40, 40, 40, 0.7);
                    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
                    -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
                    -o-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
                    padding: 20px;
                    margin: 0 auto;
                    margin-top: 150px;
                    > .header {
                        text-align: center;
                        img {
                            width: auto;
                            height: auto;
                            max-width: 120px;
                        }
                    }
                    > .inside {
                        width: 100%;
                        /*height: 10rem;*/
                        overflow: hidden;
                        position: relative;
                        margin: 10px 0 0 0;
                        > .swiper-container {
                            > .swiper-wrapper {
                                > .swiper-slide {
                                    > form {
                                        > div {
                                            position: relative;
                                            button.register-verification-code {
                                                position: absolute;
                                                right: 0;
                                                top: 1px;
                                            }
                                        }
                                        p {
                                            font-size: 14px;
                                            color: #fff;
                                            text-align: center;
                                            margin: 10px 0 0 0;
                                            > a {
                                                color: #27aee5;
                                                font-weight: bold;
                                            }
                                        }
                                    }
                                    > .find-house-preferences {
                                        padding-top: 7rem;
                                        label.ivu-checkbox-group-item {
                                            float: left;
                                            width: 50%;
                                            margin: 0.5rem 0;
                                            text-align: left;
                                            color: #fff;
                                            font-weight: 100;
                                        }
                                        > .tendencyCity-box {
                                            > label {
                                                width: 33.3%;
                                            }
                                        }
                                        .checkBox-greatSchool {
                                            > label {
                                                > span {
                                                    > i {
                                                        display: inline-block;
                                                        width: 22px;
                                                        height: 22px;
                                                        line-height: 22px;
                                                        text-align: center;
                                                        font-size: 12px;
                                                        color: #fff;
                                                        border-radius: 50%;
                                                    }
                                                }
                                            }
                                            label.Not-ideal {
                                                > span {
                                                    > i {
                                                        background: #f75355;
                                                    }
                                                }
                                            }
                                            label.qualified {
                                                > span {
                                                    > i {
                                                        background: #fbaa60;
                                                    }
                                                }
                                            }
                                            label.good {
                                                > span {
                                                    > i {
                                                        background: #83bb71;
                                                    }
                                                }
                                            }
                                        }
                                        > aside {
                                            text-align: center;
                                            > button {
                                                margin: 15px;
                                            }
                                        }
                                        > h6 {
                                            text-align: center;
                                            font-weight: bold;
                                            margin: 0.5rem 0 0 0;
                                            font-size: 12px;
                                            color: #999;
                                            cursor: pointer;
                                        }
                                    }
                                }
                            }
                        }
                        > .step-box {
                            position: absolute;
                            top: 0.5rem;
                            left: 0px;
                            z-index: 9999;
                            width: 100%;
                            padding: 0 10px;
                            > h3 {
                                font-size: 1.5rem;
                                text-align: center;
                                color: #fff;
                                padding-bottom: 0.4rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
