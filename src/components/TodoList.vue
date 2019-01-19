<template>
<div>
  <a-tabs defaultActiveKey="1">
    <a-tab-pane tab="open" key="1">
      <a-collapse>
        <a-collapse-panel v-for="item in open" 
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
        <a-collapse-panel v-for="item in closed" 
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
export default {
  computed: {
    open: function () {
      var state = 'open'
      var type = this.$route.params.type
      return this.getList(state, type)
      // 一个小，bug，如果结果为空数组，就不会再次渲染，
      // 会残留为之前的列表，只知道是vue还是antd-vue的原因
    },
    closed: function () {
      var state = 'closed'
      var type = this.$route.params.type
      console.log('ssss')
      console.log(type)
      return this.getList(state, type)
    }
  },
  methods: {
    changeState: function(targetState, event){
      // put index which get from for-loop to html element dataset
      // and use this value in js code
      var number = event.target.dataset.number
      var body = JSON.stringify({
        'state': targetState
      })
      // 嚓，原来只能传递一个参数
      this.$store.dispatch('patchIssue', {
        number,
        body
      })
    },
    getList (state, type) {
      var stateList = this.$store.getters[state]
      return stateList.filter(item => {
          var ok = false
          item.labels.forEach(element => {
            if (element.name === type) {
              ok = true
            }
          })
          return ok
        })
    }
  },
  created(){
    console.log('TodoList.vue has created, and getting issues.')
    console.log(this.open)
    console.log(this.closed)
    this.$store.dispatch('getIssues')
  }
}
</script>

<style scoped>
.strong{
  font-weight: 900;
}
</style>
