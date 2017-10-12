<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footers/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footers'
export default {
  components: {
    Navbar,
    Footers
  },
  name: 'app'
}
</script>

<style>
</style>
