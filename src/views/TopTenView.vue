<template>
  <div>
    <TitleComponent title="Top" description="Top 10 articles"></TitleComponent>

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
import TitleComponent from "@/components/TitleComponent";
import ArticleComponent from "@/components/ArticleComponent";
import NotFoundComponent from "@/components/NotFoundComponent";

export default {
  name: "TopTenView",
  components:{
    TitleComponent,
    ArticleComponent,
    NotFoundComponent
  },
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.$axios.get('/api/articles/top')
        .then(response => {
          this.articles = response.data;
        })
  }
}
</script>

