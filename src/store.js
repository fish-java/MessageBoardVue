import Vue from 'vue'
import Vuex from 'vuex'

import getIssues from './actions/getIssues.js'
import patchIssue from './actions/patchIssue.js'
import postIssue from './actions/postIssue.js'

import addIssue from './mutations/addIssue.js'
import editIssue from './mutations/editIssue.js'
import initIssues from './mutations/initIssues.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    issues: []
  },
  getters: {
    open (state, getters) {
      return state.issues.filter(item => item.state === 'open')
    },
    closed (state, getters) {
      return state.issues.filter(item => item.state === 'closed')
    }
  },
  mutations: {
    addIssue,
    editIssue,
    initIssues
  },
  actions: {
    getIssues, // 通过ajax获得issues数据
    patchIssue, // 修改issues
    postIssue
  }
})
