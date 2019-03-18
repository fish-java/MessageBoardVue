<template>
  <div>
    <div class="title">
      Welcome to Message Board
    </div>
    <post-message></post-message>
    <hr>
    <message-list></message-list>
  </div>
</template>

<script>
import PostMessage from '../components/PostMessage.vue'
import MessageList from '../components/MessageList.vue'

export default {
  name: 'home',
  components: {
    'post-message': PostMessage,
    'message-list': MessageList
  }
}
</script>
<style scoped>
  .title {
    display: flex;
    justify-content: space-around;
    font-size: 25px;
    margin: 10px 0;
    color: black;
  }
</style>
