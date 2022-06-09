<template>
  <div>
    <TitleComponent title="Categories" description="Search articles by category"></TitleComponent>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-2">
            <select class="form-select" name="categories" id="categories">
              <option v-for="c in categories" :key="c.id" :value=c.id>{{ c.name }}</option>
            </select>
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-primary" @click="selectCategory(false)">Select Category</button>
        </div>
      </div>
    </div>

    <div v-if="articles.length !== 0">
      <div v-for="a in articles" :key="a.id" class="articles-div">
        <ArticleComponent :article="a"></ArticleComponent>
      </div>
    </div>
    <div v-else>
      <NotFoundComponent message="There are no articles with selected category..."></NotFoundComponent>
    </div>

    <div class="pageable-div">
      <span>
        <button type="button" class="btn btn-outline-primary" @click="pageBefore">&lt;&lt;</button>
        <button type="button" class="btn btn-outline-primary" @click="pageAfter">&gt;&gt;</button>
      </span>
    </div>

  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import ArticleComponent from "@/components/ArticleComponent";
import NotFoundComponent from "@/components/NotFoundComponent";

export default {
  name: "CategoriesView",
  components: {
    TitleComponent,
    ArticleComponent,
    NotFoundComponent,
  },
  data() {
    return {
      categories: [],
      selectedCategory: Number,
      articles: [],
      page: 1
    }
  },
  mounted() {
    this.$axios.get('/api/categories')
        .then(response => {
          this.categories = response.data;

          this.selectCategory(true);
        });
  },
  methods:{
    selectCategory(onMount){
      if(onMount){
        this.selectedCategory = this.categories[0].id;
      }
      else {
        this.selectedCategory = document.getElementById('categories').value;
      }

      this.$axios.get('/api/articles/category/' + this.selectedCategory, { params: {page: this.page}})
          .then(response => {
            this.articles = response.data;
          });
    },

    pageBefore(){
      if(this.page > 1){
        this.page -= 1;
        this.$axios.get('/api/articles/category/' + this.selectedCategory, { params: {page: this.page}})
            .then(response => {
              this.articles = response.data;
            });
      }
    },

    pageAfter(){
      this.page += 1;
      this.$axios.get('/api/articles/category/' + this.selectedCategory, { params: {page: this.page}})
          .then(response => {
            this.articles = response.data;
          });
    }
  }
}
</script>

<style>
  .form-select{
    border-color: cadetblue;
  }
  .form-select:focus{
    border-color: cadetblue;
    box-shadow: 0 0 0 0.2rem rgb(95, 158, 160, 0.25);
  }

  .btn-primary{
    background-color: cadetblue !important;
    border-color: cadetblue;
  }

  .btn-primary:focus, .btn-outline-primary:focus{
    border-color: cadetblue;
    box-shadow: 0 0 0 0.2rem rgb(95, 158, 160, 0.25);
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
</style>