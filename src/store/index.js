// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

// 先写个假数据
const state = {
  totalTime: 6,
  list: [{
    name : '瓶子',
    avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbYloXW61HpZRpr2YtgK3C6_1qf0hj3CKvO-YDzEx5HyUQzZeyw',
    date : '2016-12-25',
    totalTime : '6',
    comment : '12月25日晚上，陪女朋友一起过圣诞节需要6个小时',
    progress : '未完成'
  }]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})