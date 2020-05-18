<template>
  <div class="pt-40 md:pt-24">
    <h1>Private Page</h1>

  </div>
</template>

<script>
import {mapState }from 'vuex'
  export default {
    middleware: ['check-auth','auth'],
    computed:{
      ...mapState(['user'])
    }
  }
</script>

<style scoped>

</style>