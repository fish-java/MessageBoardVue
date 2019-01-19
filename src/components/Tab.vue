<template>
  <ul class="container">
    <router-link v-for="label in labels" :key="label"
      tag="li" :to="`/list/${label}`"
      :class="{active: route_name === label}"
      >{{label}}</router-link>
  </ul>
</template>
<script>
export default {
  computed: {
    route_name: function () {
      return this.$route.params.type
    },
    labels: function () {
      return this.$store.state.labels
    }
  },
  created ()  {
    console.log(this.$route)
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  margin: 10px 0;
  color: gainsboro;
}
.active {
  color: black;
}
</style>

