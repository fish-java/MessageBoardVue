<template>
  <div>
    <a-textarea v-model="title"
      placeholder="title" autosize class="title" />
    <div style="margin: 24px 0" />

    <a-textarea v-model="body"
      placeholder="content" class="content"
      :autosize="{ minRows: 2, maxRows: 6 }" />
    <div style="margin: 12px 0" />

    <a-button @click="postIssue"
      type="primary" block>提交任务</a-button>
    <div style="margin: 12px 0" />
  </div>
</template>

<script>
import conf from '../conf.js'
var token = conf.token
var url = conf.url

export default {
  data () {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    postIssue(){
      if (this.title === '') return null

      this.title = ''
      this.body = ''
      
      this.$store.commit('postIssue', {
        title: this.title,
        body: this.body
      })
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 20px;
}
.content{
  font-size: 18px;
}
</style>
