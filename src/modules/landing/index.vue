<template>
    <main class="main">

        <top-section :data="landingPage"/>
        <vision :data="landingPage"/>
        <about :data="landingPage"/>
        <info :data="landingPage"/>
        <be-first :data="landingPage"/>
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
    import {mapGetters} from 'vuex'

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
        },
        computed: {
            ...mapGetters([
                'landingPage'
            ])
        }
    }
</script>

<style lang="scss" scoped>

</style>