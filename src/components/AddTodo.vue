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
      type="primary" block>submit task</a-button>
    <div style="margin: 12px 0" />
  </div>
</template>

<script>
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

      this.$store.dispatch('postIssue', {
        title: this.title,
        body: this.body
      })
      this.title = ''
      this.body = ''
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
