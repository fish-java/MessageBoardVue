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
import conf from '../conf.js'
var token = conf.token
var url = conf.url

export default {
  data () {
    return {
      open:[],
      closed:[]
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
    changeState: function(state, event){
      // put index which get from for-loop to html element dataset
      // and use this value in js code
      var number = event.target.dataset.number


      var _this = this
      var xhr = new XMLHttpRequest()
      xhr.onload = (res) => {
        console.log('result of change state')
        console.log(res)
      }
      xhr.open('PATCH', url + `/${number}`)
      xhr.setRequestHeader('Authorization', 'bearer ' + token)
      xhr.send(JSON.stringify({
        state: state
      }))
    }
  },
  created: function(){
    var _this = this
    console.log(_this)
    var xhr = new XMLHttpRequest()
    xhr.onload = (res) => {
      var result = JSON.parse(res.target.responseText)
      console.log('issues list')
      console.log(result)
      _this.open = result.filter( item => {
        return item.state === 'open'
      })
      _this.closed = result.filter( item => {
        return item.state === 'closed'
      })
      console.log('open issues list')
      console.log(_this.open)
    }
    xhr.open('GET', url + '?state=all')
    xhr.setRequestHeader('Authorization', 'bearer ' + token)
    xhr.send()
  }
}
</script>

<style scoped>
.strong{
  font-weight: 900;
}
</style>
