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
        metaInfo() {
            return {
                title: this.mainPageTitle,
                meta: [
                    { name:"description", content: this.mainPageDesc},
                    { property: "og:title", content: this.mainPageTitle },
                    { name: "twitter:title", content: this.mainPageTitle },
                    { property: "og:description", content: this.mainPageDesc },
                    { name: "twitter:description", content: this.mainPageDesc },
                ]
            }
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
                'landingPage',
                'mainPageTitle',
                'mainPageDesc'

            ])
        }
    }
</script>

<style lang="scss" scoped>

</style>