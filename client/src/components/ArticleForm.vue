<template lang="html">
  <div class="ArticleForm">
    <div class="form-group">
      <label class="control-label" for="inputSuccess">Title</label>
      <input type="text" class="form-control" id="inputSuccess">
    </div>
    <div class="texteditor">
      <vue-editor/>
    </div>
    <div class="textcategory">
      <div class="form-group">
        <label class="control-label" for="inputSuccess">Category</label>
        <input type="text" class="form-control" id="inputSuccess">
      </div>
    </div>
    <div class="tombolsubmit">
      <a href="#" class="btn btn-success">Success</a>
    </div>
  </div>
</template>

<script>
export default {

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
