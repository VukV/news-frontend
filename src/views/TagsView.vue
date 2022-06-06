<template>
  <div>
    <TitleComponent title="Tags" description="Articles by selected tag"></TitleComponent>
  </div>
</template>

<script>
//todo prosledjivanje props kroz ruter
//https://stackoverflow.com/questions/45151810/passing-props-with-programmatic-navigation-vue-js
import TitleComponent from "@/components/TitleComponent";

export default {
  name: "TagsView",
  components:{
    TitleComponent
  },
  props:{
    tag: Object
  },
  created() {
    //todo fetch articles by tag
  }
}
</script>

<style scoped>

</style>