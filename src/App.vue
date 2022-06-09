<template>
  <div id="main-div">
    <NavbarComponent></NavbarComponent>

    <div class="container">
        <router-view/>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
export default {
  components:{
    NavbarComponent
  }
}
</script>

<style>
  #main-div{
    text-align: center;

  }
</style>
