<template>
<div>
 <a-list
    class="comment-list"
    itemLayout="horizontal"
    :dataSource="messages"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-comment :author="item.username" >
        <p slot="content">{{item.content}}</p>
      </a-comment>
    </a-list-item>
  </a-list>
</div>
</template>
<script>
import axios from "../axios.js";
export default {
  name: "MessageList",
  data(){
    return {
      messages:[]
    }
  },
  created(){
    let that = this
    axios.get('/messages')
      .then(function (response) {
        response.data.forEach(element => {
          that.messages.push(element)
        });
    })
  }
}
</script>

<style scoped>
.strong{
  font-weight: 900;
}
</style>
