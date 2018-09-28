<template>
    <div class="about">
        <div class="inner-wrapper">
            <div class="about-content" v-html="aboutPage"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        asyncData({store}) {
            return store.dispatch('getAbout')
        },
        computed: {
            ...mapGetters([
                'aboutPage'
            ])
        }
    }
</script>

<style lang="scss" scoped>


    .about{
        min-height: calc(100vh - 140px);
        padding: 40px 0;

        &-content{

        }
    }

</style>