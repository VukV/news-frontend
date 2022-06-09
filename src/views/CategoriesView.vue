<template>
  <div>
    <TitleComponent title="Categories" description="Search articles by category"></TitleComponent>

    <ArticleComponent v-for="a in articles" :key="a.id" article=a></ArticleComponent>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import ArticleComponent from "@/components/ArticleComponent";

export default {
  name: "CategoriesView",
  components: {
    TitleComponent,
    ArticleComponent
  },
  data() {
    return {
      categories: [],
      articles: []
    }
  },
  mounted() {
    //TODO fetch categories
  },
  methods:{
    //todo method za klik na select category - fetch za articles
    //todo method za article on click -> router.push single article
  }
}
</script>

<style scoped>

</style>