<template>
  <div id="app">
    <app-modal/>
    <main-layout/>
  </div>
</template>

<script>
  import MainLayout from './layout/Main.vue'
  import appModal from './shared/components/Modal.vue'

  export default {
      components:{
          MainLayout,
          appModal
      }
  }
</script>

<style lang="scss">
  @import "scss/index";

  #app{
    height: 100%;
  }

</style>