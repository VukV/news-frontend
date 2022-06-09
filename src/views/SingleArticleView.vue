<template>
  <div class="single-article-view-div">
    <h2>{{ article.title }}</h2>
    <h5>{{ article.date | toDate}}</h5>

    <br>

    <p>{{ article.content }}</p>
    <h6>{{ author.name}} {{ author.surname}}</h6>

    <br>

    <h6>Tags:</h6>
    <span v-for="tag in tags" :key="tag.id">
      <span @click="openArticlesByTag(tag.id, tag.name)" class="tag-span">{{ tag.name }}</span>
    </span>

    <br>
    <br>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3">
          <input type="text" class="form-control" id="author" name="author" placeholder="Name...">
        </div>
      </div>
      <br>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <textarea class="form-control" rows="5" id="content" name="content" placeholder="Comment..."></textarea>
        </div>
      </div>
    </div>

    <br>
    <button type="button" class="btn btn-primary" @click="addComment">Add Comment</button>
    <br>
    <br>

    <div v-for="comment in comments" :key="comment.id">
      <h6>{{ comment.author}}, {{ comment.date | toDate}}</h6>
      <p>{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "SingleArticleView",
  data() {
    return {
      article: Object,
      author: Object,
      tags: [],
      comments: []
    }
  },
  created() {

    let articleId = this.$route.params.id
    this.$axios.get('/api/articles/article/' + articleId)
        .then(response => {
          this.article = response.data
        })
        .then(() => {
          this.$axios.get('/api/users/user-info/' + this.article.userId)
              .then(response => {
                this.author = response.data
              })

          this.$axios.get('/api/tags/' + this.article.id)
              .then(response => {
                this.tags = response.data
              })

          this.$axios.get('/api/comments/' + this.article.id)
              .then(response => {
                this.comments = response.data
              })
        })


  },
  filters:{
    toDate(value){
      let date = new Date(value);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      return day + "/" + month + "/" + year;
    }
  },
  methods:{
    openArticlesByTag(tagId, tagName){
      router.push({name: 'Tags', params: {id: tagId}, query: {name: tagName}})
    },

    addComment(){
      let author = document.getElementById('author').value;
      let content = document.getElementById('content').value;

      console.log(author);
      console.log(content);

      if(author && content){
        this.$axios.post('/api/comments', {
          articleId: this.article.id,
          author: author,
          content: content
        }).then(response => {
          let newComment = response.data
          this.comments.push(newComment);

          document.getElementById('author').value = '';
          document.getElementById('content').value = '';
        });
      }
      else {
        alert("Fields can't be empy")
      }
    }
  }
}
</script>

<style scoped>
  .single-article-view-div{
    margin-top: 2em;
  }

  .tag-span{
    padding: 10px;
    text-decoration: underline;
    color: cadetblue;
  }
  .tag-span:hover{
    cursor: pointer;
  }


  .btn-primary{
    background-color: cadetblue !important;
    border-color: cadetblue;
  }

  .form-control:focus, .btn-primary:focus{
    border-color: cadetblue;
    box-shadow: 0 0 0 0.2rem rgb(95, 158, 160, 0.25);
  }
</style>