<template>
    <div class="about">
        <div class="inner-wrapper">
            <div class="about-content" v-html="aboutPage"></div>
        </div>
        <be-first class="be-first"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import BeFirst from './../landing/components/Be-first.vue'

    export default {
        asyncData({store}) {
            return store.dispatch('initApp')
        },
        components: {
            BeFirst
        },
        metaInfo() {
            return {
                title: this.aboutPageTitle,
                meta: [
                    { name:"description", content: this.aboutPageDesc},
                    { property: "og:title", content: this.aboutPageTitle },
                    { name: "twitter:title", content: this.aboutPageTitle },
                    { property: "og:description", content: this.aboutPageDesc },
                    { name: "twitter:description", content: this.aboutPageDesc },
                ]
            }
        },
        computed: {
            ...mapGetters([
                'aboutPage',
                'aboutPageTitle',
                'aboutPageDesc'
            ])
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/var";
@import "../../scss/mixins";

    .about{
        min-height: calc(100vh - 140px);
        padding: 40px 0;
        position: relative;

        &-content{

            max-width: 660px;
            margin: 0 auto;

        }
    }

    .inner-wrapper{
        margin-bottom: 430px;
    }

    .be-first{
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    /deep/ {
        h1{
            @include font-source-sans(40px, $text_blue, 700, normal);
        }

        b, strong{
            font-weight: 700;
        }

        p{
            @include font-source-sans(18px, $text_blue, 400, 24px);
        }

        ul{
            @include font-source-sans(18px, $text_blue, 400, 24px);
        }


        img{
            width: 100%;
            height: auto;
        }
    }

</style>