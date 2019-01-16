<template>
  <div class="about">
    <h1>Login with github token</h1>
    <a-input-search placeholder="input github token" 
        v-model="token" @search="onSearch" size="large">
      <a-button @click.native="submitToken()" slot="enterButton">submit</a-button>
    </a-input-search>

    <div style="margin: 10px 0px"></div>

    <a href="https://github.com/settings/tokens" target="_blank">
      <a-button block>get token from github</a-button>
    </a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      token: ''
    }
  },
  methods: {
    submitToken () {
      if (this.token === '') return

      localStorage.token = this.token
      this.$store.commit('changeLoginState', true)
      this.$router.push('/')
    }
  }
}
</script>

<style>
#helloworld{
  border: 1px solid yellow
}
</style>