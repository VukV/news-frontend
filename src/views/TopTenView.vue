<template>
  <div>
    <TitleComponent title="Top" description="Top 10 articles"></TitleComponent>
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