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
  created() {
    //TODO fetch categories
  }
}
</script>

<style scoped>

</style>