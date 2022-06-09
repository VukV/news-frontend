<template>
  <div>
    <TitleComponent title="Top" description="Top 10 articles"></TitleComponent>

    <div v-for="a in articles" :key="a.id" class="articles-div">
      <ArticleComponent :article="a"></ArticleComponent>
    </div>

  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import ArticleComponent from "@/components/ArticleComponent";

export default {
  name: "TopTenView",
  components:{
    TitleComponent,
    ArticleComponent
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

