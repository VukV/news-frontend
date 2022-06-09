<template>
  <div class="article-single-div" @click="openArticle(article)">
    <h3>{{ article.title }}</h3>
    <h6>{{ category.name }}, {{ article.date | toDate }}</h6>

    <p>{{ article.content.substring(0,50)+"..." }}</p>
  </div>
</template>

<script>
import router from "@/router";

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
  created() {
    this.$axios.get('/api/categories/article/' + this.article.id)
        .then(response => {
          this.category = response.data
        });
  },
  methods:{
    openArticle(article){
      let articleId = article.id;
      router.push({name: 'Single Article', params: {id: articleId}})
    }
  },
  filters:{
    toDate(value){
      let date = new Date(value);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      return day + "/" + month + "/" + year;
    }
  }
}
</script>

<style scoped>
  .article-single-div{
    text-align: center;
    max-width: 600px;
    padding: 1.1em;
    margin: 1.1em;
    background: rgba(95, 158, 160, 0.05);
    border-radius: 30px;
  }

  .article-single-div:hover{
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }
</style>