<template>
  <div class="article-single-div">
    <h3>{{ article.title }}</h3>
    <h6>{{ category.name }}, {{ article.date }}</h6>

    <p>{{ article.content.substring(0,50)+"..." }}</p>
  </div>
</template>

<script>
export default {
  name: "ArticleComponent",
  props:{
    article: Object
  },
  data() {
    return {
      category: Object
    }
  },
  mounted() {
    //todo fetch category
  }
}
</script>

<style scoped>
  .article-single-div{

  }
</style>