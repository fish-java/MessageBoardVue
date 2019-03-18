<template>
<div>

<div style="margin: 42px 0" />

      <a-input  placeholder="Username" v-model="username">
        <a-icon  slot="prefix" type="user"
          style="color: rgba(0,0,0,.25)" />
      </a-input>

      <div style="margin: 8px 0" />

      <a-input  type="password" placeholder="Password"
        v-model="password" >
        <a-icon slot="prefix" type="lock"
          style="color: rgba(0,0,0,.25)" />
      </a-input>

      <div style="margin: 8px 0" />

      <a-input type="password" placeholder="Repeat Password"
       v-model="password2">
        <a-icon slot="prefix" type="lock"
          style="color: rgba(0,0,0,.25)" />
      </a-input>

      <div style="margin: 8px 0" />

    <a-button type="primary" block @click="submitSign">submit</a-button>
</div>
</template>

<script>
import axios from '../axios.js'
export default {
  data () {
    return {
      username:"",
      password: "",
      password2:""
    }
  },
  methods: {
    submitSign () {
      if(this.username == '') return null;
      if(this.username.length > 10) {
        return alert("length of name should less than 10")
      }
      if(this.password !== this.password2) {
        alert('passwords should be same')
        this.password2 = ""
      }
      let self = this
      axios.post("/users",{}, {
        headers: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        localStorage.token = res.data.token
        self.$router.push("/messages")
      }).catch(err => {
        alert("error, please change you username")
      })
    }
  }
}
</script>
