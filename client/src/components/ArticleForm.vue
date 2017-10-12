<template lang="html">
  <div class="ArticleForm">
    <div class="form-group">
      <label class="control-label" for="inputSuccess">Title</label>
      <input type="text" class="form-control" id="inputSuccess" v-model="artData.title">
    </div>
    <div class="texteditor">
      <vue-editor v-model="artData.content"/>
    </div>
    <div class="textcategory">
      <div class="form-group">
        <label class="control-label" for="inputSuccess">Category</label>
        <input type="text" class="form-control" id="inputSuccess" v-model="artData.category">
      </div>
    </div>
    <div class="tombolsubmit">
      <a href="" class="btn btn-success" @click.prevent="createUpload()">Success</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      artData: {
        title: '',
        content: '',
        category: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'createArticle'
    ]),
    createUpload () {
      this.createArticle(this.artData)
    }
  }
}
</script>

<style lang="css">
label {
  margin-top: 10px;
}

.tombolsubmit {
  margin-bottom: 20px;
}
</style>
