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
      if(this.title === '') return null
      
      var _this = this
      var xhr = new XMLHttpRequest()
      xhr.onload = (res) => {
        console.log('recieve submit response')
        console.log(res)
      }
      xhr.open('POST', url)
      xhr.setRequestHeader('Authorization', 'bearer ' + token)
      xhr.send(JSON.stringify({
        title: _this.title,
        body: _this.body
      }))
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
