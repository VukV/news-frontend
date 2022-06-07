<template>
  <div>
    <TitleComponent title="Home" description="Newest articles"></TitleComponent>

    <ArticleComponent v-for="a in articles" :key="a.id" article="{{ a }}"></ArticleComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent";
import ArticleComponent from "@/components/ArticleComponent";

//todo v-if za prikaze
//todo v-for za svaku vest
//todo single article - props:article
export default {
  name: 'HomeView',
  components:{
    ArticleComponent,
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
