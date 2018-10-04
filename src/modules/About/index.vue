<template>
    <div class="about">
        <div class="inner-wrapper">
            <h1>{{aboutH1}}</h1>
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
                'aboutPageDesc',
                'aboutH1'
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

        .inner-wrapper{
            max-width: 690px;
            margin: 0 auto;
            margin-bottom: 350px;
        }

        .be-first{
            width: 100%;
            position: absolute;
            bottom: 0;
        }
    }

    .inner-wrapper{
        margin-bottom: 430px;

        h1{
            font-size: 40px;
            font-weight: 700;
            color: $text_blue;
        }
    }



    /deep/ {
        .about-content{
            h1{
                @include font-source-sans(40px, $text_blue, 700, normal);
            }

            h2{
                @include font-source-sans(24px, $text_blue, 700, normal);
            }

            h3{
                @include font-source-sans(22px, $text_blue, 700, normal);
            }

            h4{
                @include font-source-sans(20px, $text_blue, 700, normal);
            }

            h5, h6{
                @include font-source-sans(18px, $text_blue, 700, normal);
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

            pre{
                white-space: pre-line;
                line-height: normal;
                font-size: 18px;
            }

            a{
                color: $text_violet;
                font-weight: 700;
            }

            img{
                width: 100%;
                height: auto;
            }
        }
    }

</style>