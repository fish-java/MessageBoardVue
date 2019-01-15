import Vue from 'vue'
import Vuex from 'vuex'

import getIssues from './mutations/getIssues.js'
import patchIssue from './mutations/patchIssue.js'
import postIssue from './mutations/postIssue.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    issues: []
  },
  mutations: {
    getIssues, // 通过ajax获得issues数据
    patchIssue, // 修改issues
    postIssue
  },
  actions: {
  }
})
