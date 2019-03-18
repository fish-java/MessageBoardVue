<template>
  <div>

    <a-textarea v-model="body"
                placeholder="content" class="content"
                :autosize="{ minRows: 2, maxRows: 16 }" />
    <div style="margin: 12px 0" />

    <a-button @click="postMessage" block
       :disabled='isBtnDisabled' type="primary"
    >submit a message</a-button>

    <div style="margin: 12px 0" />
  </div>
</template>

<script>
import axios from '../axios.js'
export default {
  name: "post_message",
  data () {
    return {
      body: '',
      isBtnDisabled: false
    }
  },
  methods: {
    postMessage () {
      if(this.body == '') return null;

      let self = this
      self.isBtnDisabled = true

      axios.post("/messages",this.body, {
        headers: {
          Authorization : "bearer " + localStorage.token
        }
      }).then(res => {
        let MessageList = this.findBrothersComponents(self, 'MessageList')
        MessageList.messages.unshift({
          content: self.body,
          username: 'You'
        })
        self.body = ''
        self.isBtnDisabled = false
      }).catch(err => {
        self.isBtnDisabled = false
        self.$router.push('/login')
        console.log(err)
      })
    },
    findBrothersComponents (context, componentName, exceptMe = true) {
      let children = context.$parent.$children
      for(let i = 0 ; i < children.length; i++){
        if(children[i].$options.name === componentName){
          return children[i]
        }
      }
    }
  }
}
</script>

<style scoped>
.content{
  font-size: 18px;
}
</style>
