<template>
  <div class="Home">
    <div class="container">
      <div class="isidata">
        <ArticleForm/>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm'
export default {
  components: {
    ArticleForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.isidata {
  margin-top: 73px;
}
</style>
