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
      <NotFoundComponent message="There are no articles with selected tag..."></NotFoundComponent>
    </div>

    <div class="pageable-div">
      <span>
        <button type="button" class="btn btn-outline-primary fw-bold" @click="pageBefore">&lt;&lt;</button>
        <button type="button" class="btn btn-outline-primary fw-bold" @click="pageAfter">&gt;&gt;</button>
      </span>
    </div>

  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import ArticleComponent from "@/components/ArticleComponent";
import NotFoundComponent from "@/components/NotFoundComponent";

export default {
  name: "TagsView",
  components:{
    TitleComponent,
    ArticleComponent,
    NotFoundComponent,
  },
  data() {
    return {
      tag: Object,
      articles: [],
      page: 1
    }
  },
  created() {
    let tagId = this.$route.params.id;
    let tagName = this.$route.query.name;

    this.tag = {
      id: tagId,
      name: tagName
    }

    this.getArticles();
  },
  methods:{
    getArticles(){
      this.$axios.get('/api/articles/article/tag/' + this.tag.id, {params: {page: this.page}})
          .then(response => {
            this.articles = response.data;
          });
    },

    pageBefore(){
      if(this.page > 1) {
        this.page -= 1;
        this.getArticles();
      }
    },

    pageAfter(){
      this.page += 1;
      this.getArticles();
    }
  }
}
</script>

<style scoped>
  .tag-h{
    color: cadetblue;
  }

  .btn-outline-primary{
    color: cadetblue !important;
    border-color: cadetblue;
    margin: 10px;
  }

  .btn-outline-primary:hover{
    background-color: cadetblue !important;
    color: white !important;
    border-color: cadetblue !important;
  }

  .btn-outline-primary:focus{
    border-color: cadetblue;
    box-shadow: 0 0 0 0.2rem rgb(95, 158, 160, 0.25);
  }
</style>