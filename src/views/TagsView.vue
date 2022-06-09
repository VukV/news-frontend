<template>
  <div>
    <TitleComponent title="Tags" description="Articles by selected tag"></TitleComponent>

    <h6 class="tag-h">{{ tag.name }}</h6>
    <br>

    <div v-if="articles.length !== 0">
      <div v-for="a in articles" :key="a.id" class="articles-div">
        <ArticleComponent :article="a"></ArticleComponent>
      </div>
    </div>
    <div v-else>
      <p class="nothing-found">There are no articles with selected tag ...</p>
    </div>

  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import ArticleComponent from "@/components/ArticleComponent";

export default {
  name: "TagsView",
  components:{
    TitleComponent,
    ArticleComponent
  },
  data() {
    return {
      tag: Object,
      articles: []
    }
  },
  created() {
    let tagId = this.$route.params.id;
    let tagName = this.$route.query.name;

    this.tag = {
      id: tagId,
      name: tagName
    }

    this.$axios.get('/api/articles/article/tag/' + tagId)
        .then(response => {
          this.articles = response.data;
        });
  }
}
</script>

<style scoped>
  .tag-h{
    color: cadetblue;
  }
</style>