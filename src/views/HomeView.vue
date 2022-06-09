<template>
  <div>
    <TitleComponent title="Home" description="Newest articles"></TitleComponent>

    <div v-if="articles.length !== 0">
      <div v-for="a in articles" :key="a.id" class="articles-div">
        <ArticleComponent :article="a"></ArticleComponent>
      </div>
    </div>
    <div v-else>
      <NotFoundComponent message="There are no articles..."></NotFoundComponent>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent";
import ArticleComponent from "@/components/ArticleComponent";
import NotFoundComponent from "@/components/NotFoundComponent";

export default {
  name: 'HomeView',
  components:{
    ArticleComponent,
    TitleComponent,
    NotFoundComponent
  },
  data() {
    return {
      articles: []
    }
  },
  mounted() {
   this.$axios.get('/api/articles/newest')
       .then(response => {
         this.articles = response.data;
       });
  }
}
</script>

<style>
  .articles-div{
    margin: auto;
    width: 50%;
  }
</style>
