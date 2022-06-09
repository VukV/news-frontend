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
      <p class="nothing-found">There are no articles with selected category...</p>
    </div>

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
    this.$axios.get('/api/categories')
        .then(response => {
          this.categories = response.data;

          this.selectCategory(true);
        });
  },
  methods:{
    selectCategory(onMount){
      let categoryId = document.getElementById('categories').value;

      if(onMount){
        categoryId = this.categories[0].id;
      }

      this.$axios.get('/api/articles/category/' + categoryId)
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

  .nothing-found{
    margin-top: 20px;
  }
</style>