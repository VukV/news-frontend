<template>
  <div>
    <TitleComponent title="Home" description="Newest articles"></TitleComponent>
  </div>
</template>

<script>
// @ is an alias to /src


import TitleComponent from "@/components/TitleComponent";

export default {
  name: 'HomeView',
  components:{
    TitleComponent
  }
}
</script>
