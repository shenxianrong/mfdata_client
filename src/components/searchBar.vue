<template>
    <article>
        <!--<Input v-model="value1">-->
            <!--<Button slot="append" icon="ios-search" style="" placeholder="请输入城市名 / 邮编 / 地址 / MLS"> 搜索</Button>-->
        <!--</Input>-->
        <AutoComplete
                v-model="searchKeyword"
                icon="ios-search"
                placeholder="请输入城市名 / 邮编 / 地址 / MLS"
                clearable
                @on-select="searchKeywordSelect"
                style="width:450px"
                transfer>
            <div class="demo-auto-complete-item">
                <Option v-for="(item, index) in houses" :value="item.address" :key="item.address">
                    <p :houseId="item.houseId" searchType="house" @click="getSearchType($event)">{{item.address}}</p>
                    <Tag color="#2196f3">地址</Tag>
                </Option>

                <Option v-for="(item, index) in citys" :value="item.city" :key="item.city">
                    <p searchType="city" @click="getSearchType($event)">{{item.city +' , '+ item.state}}</p>
                    <Tag color="#4caf50">城市</Tag>
                </Option>
                <Option v-for="(item, index) in zipcodes" :value="item.zip" :key="item.zip">
                    <p searchType="zip" @click="getSearchType($event)">{{item.zip +' , '+ item.city}}</p>
                    <Tag color="#9c27b0">邮编</Tag>
                </Option>
            </div>
        </AutoComplete>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                searchKeyword: '',//搜索框关键字
                searchKeywordType: '',//要按什么类型来搜索：房源地址/MLS、城市、邮编
                searchHouseId: '',//按房源地址搜索时，点击结果的房源的ID
                houses: [
                    {
                        "houseId": "2bb2d4a79c49b5f60bfa4614ba2760d7",
                        "address": "3682 Panthersville Road, Decatur, GA, 30034",
                    }, {
                        "houseId": "363a29d07d7774a2b155c15860a71497",
                        "address": "539,251 Maine Street,Ocoee,FL,34761",
                    }, {
                        "houseId": "04e410f7d23a44cb66a231382b9f3f69",
                        "address": "703, 1224 Blvd Of The Arts, Sarasota, FL, 34236",
                    }
                ],
                citys:[
                    {
                        "city": "West New York",
                        "state": "NJ",
                    }, {
                        "city": "West New York Town",
                        "state": "NJ",
                    }, {
                        "city": "New York",
                        "state": "NY",
                    }
                ],
                zipcodes:[
                    {
                        "city": "New York",
                        "zip": "10001",
                    }, {
                        "city": "New York",
                        "zip": "10002",
                    }, {
                        "city": "New York",
                        "zip": "10003",
                    }, {
                        "city": "New York",
                        "zip": "10004",
                    }, {
                        "city": "New York",
                        "zip": "10005",
                    }
                ],


            }
        },
        computed: {},
        created() {
        },
        mounted() {

        },
        methods: {
            getSearchType:function (e) {
                //点击搜索结果项时记录该项的搜索方法
                this.searchKeywordType =  e.target.getAttribute('searchType');
                //判断如果是房源地址搜索模式，点击房源地址结果项，则记录该房源的ID
                if(e.target.getAttribute('houseId')){
                    this.searchHouseId = e.target.getAttribute('houseId');
                }
                // console.log(e.target.getAttribute('houseId'), this.searchKeywordType, this.searchHouseId)
            },
            //搜索结果选择一项时
            searchKeywordSelect(value){
                // console.log(value)
                if (this.searchKeywordType == 'house') {//按地址/MLS搜索——跳转到房源详情页
                    this.$router.push({path: "/houseDetails", query: {houseId: this.searchHouseId}});
                } else if (this.searchKeywordType == 'city') {//按城市搜索——点击结果项前往对应城市的房源列表页
                    this.$router.push({path: "/houseList", query: {city: value}});
                } else {//按邮编搜索——点击结果项前往对应邮编的房源列表页
                    this.$router.push({path: "/houseList", query: {zip: value}});
                }
            },


        },
        components: {}
    }
</script>

<style lang="less" type="text/less">
    body {
        .demo-auto-complete-item{
            padding: 4px 0;
            border-bottom: 1px solid #F6F6F6;
            .ivu-select-item{
                padding: 0 20px;
                margin: 0;
                line-height: 34px;
                cursor: pointer;
                color: #606266;
                font-size: 14px;
                list-style: none;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                >p{
                    width: calc(100% - 40px);
                    float: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                    text-align: justify;
                    white-space: nowrap;
                    word-wrap: normal;
                    font-size: 13px;
                }
            }
        }
    }
</style>
