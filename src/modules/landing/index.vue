<template>
    <main class="main">

        <top-section/>
        <vision/>
        <about/>
        <info/>
        <be-first/>
        <contact/>

    </main>
</template>

<script>
    import TopSection from './components/Top-section.vue'
    import Vision from './components/Vision.vue'
    import About from './components/About.vue'
    import Info from './components/Info.vue'
    import BeFirst from './components/Be-first.vue'
    import Contact from './components/Contact.vue'

    export default {
        asyncData({store}) {
          return store.dispatch('getLanding')
        },
        components: {
            TopSection,
            Vision,
            About,
            Info,
            BeFirst,
            Contact
        }
    }
</script>

<style lang="scss" scoped>

</style>