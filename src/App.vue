<template>
  <div id="app">
    <app-modal/>
    <main-layout/>
  </div>
</template>

<script>
    if (process.browser) {
        const WOW = require('wowjs/dist/wow')
    }
  import MainLayout from './layout/Main.vue'
  import appModal from './shared/components/Modal.vue'



  export default {
      mounted() {
          new WOW({live: true}).init()
      },
      components:{
          MainLayout,
          appModal
      },
  }
</script>

<style lang="scss">
  @import "scss/index";

  #app{
    height: 100%;
  }

</style>