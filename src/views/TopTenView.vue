<template>
  <div>
    <TitleComponent title="Top" description="Top 10 articles"></TitleComponent>

    <ArticleComponent v-for="a in articles" :key="a.id" article="{{ a }}"></ArticleComponent>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";

export default {
  name: "TopTenView",
  components:{
    TitleComponent
  },
  data() {
    return {
      articles: [],
      clickedArticle: false,
      showArticles: true
    }
  },
  mounted: {
    //todo fetch articles
  }
}
</script>

<style scoped>

</style>