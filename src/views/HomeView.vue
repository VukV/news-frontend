<template>
  <div>
    <TitleComponent title="Home" description="Newest articles"></TitleComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent";

//todo v-if za prikaze
//todo v-for za svaku vest
//todo single article - props:article
export default {
  name: 'HomeView',
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
  created() {
    //todo fetch articles
  }
}
</script>
