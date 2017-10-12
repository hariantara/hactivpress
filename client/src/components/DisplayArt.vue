<template lang="html">
  <div class="superman">
    <div class="col-md-12">
      <div class="list-group">
        <a href="#" class="list-group-item">
          <h4 class="list-group-item-heading">{{ artData }}</h4>
          <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
        <a href="#" class="list-group-item">
          <h4 class="list-group-item-heading">List group item heading</h4>
          <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getArticle'
    ])
  },
  mounted () {
    this.getArticle
  },
  computed: {
    ...mapState([
      'artData'
    ])
  }
}
</script>

<style lang="css">
</style>
