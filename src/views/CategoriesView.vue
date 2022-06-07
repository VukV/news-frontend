<template>
  <div>
    <TitleComponent title="Categories" description="Search articles by category"></TitleComponent>
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
      clickedArticle: false,
      showArticles: true
    }
  },
  mounted: {
    //TODO fetch categories
  },
  methods:{
    //todo method za article on slick -> router.push single article
  }
}
</script>

<style scoped>

</style>