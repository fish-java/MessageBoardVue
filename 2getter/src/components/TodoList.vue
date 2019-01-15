<template>
<div>
  <a-tabs defaultActiveKey="1">
    <a-tab-pane tab="open" key="1">
      <a-collapse>
        <a-collapse-panel v-for="item in $store.getters.open" 
            :header="item.title" :key="item.number">
          <p>{{item.body}}</p>
          <a-button block :data-number='item.number'
                @click="changeState('closed', $event)">
            close this issue</a-button>
        </a-collapse-panel>
      </a-collapse>
    </a-tab-pane>

    <a-tab-pane tab="closed" key="2">  
      <a-collapse>
        <a-collapse-panel v-for="item in $store.getters.closed" 
            :header="item.title" :key="item.number">
          <p>{{item.body}}</p>
          <a-button block :data-number='item.number'
            @click="changeState('open', $event)">reopen this issue</a-button>
        </a-collapse-panel>
      </a-collapse>
    </a-tab-pane>
  </a-tabs>
</div>
</template>
<script>
import conf from '../conf.js'
var token = conf.token
var url = conf.url

export default {
  methods: {
    callback (key) {
      console.log(key)
    },
    changeState: function(targetState, event){
      // put index which get from for-loop to html element dataset
      // and use this value in js code
      var number = event.target.dataset.number
      var body = JSON.stringify({
        'state': targetState
      })
      // 嚓，原来只能传递一个参数
      this.$store.commit('patchIssue', {
        number,
        body
      })
    }
  },
  created(){
    console.log('TodoList.vue has created, and getting issues.')
    this.$store.commit('getIssues')
  }
}
</script>

<style scoped>
.strong{
  font-weight: 900;
}
</style>
