<template>
  <div>
    <TitleComponent title="Categories" description="All articles by categories"></TitleComponent>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";

export default {
  name: "CategoriesView",
  components: {
    TitleComponent
  },
  data() {
    return {
      articles: {}
    }
  },
  created() {
    //TODO fetch articles
  }
}
</script>

<style scoped>

</style>