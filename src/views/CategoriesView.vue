<template>
  <div>
    <TitleComponent title="Categories" description="Search articles by category"></TitleComponent>

    <ArticleComponent v-for="a in articles" :key="a.id" article="{{ a }}"></ArticleComponent>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";

//todo v-if za prikaze
//todo v-for za svaku vest
//todo single article - props:article
export default {
  name: "CategoriesView",
  components: {
    TitleComponent
  },
  data() {
    return {
      categories: [],
      articles: [],
      clickedArticle: false,
      showArticles: true
    }
  },
  mounted: {
    //TODO fetch categories
  },
  methods:{
    //todo method za klik na select category - fetch za articles
    //todo method za article on slick -> router.push single article
  }
}
</script>

<style scoped>

</style>