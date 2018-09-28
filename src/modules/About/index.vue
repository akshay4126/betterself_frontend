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
@import "../../scss/var";
@import "../../scss/mixins";

    .about{
        min-height: calc(100vh - 140px);
        padding: 40px 0;

        &-content{

            max-width: 660px;
            margin: 0 auto;

        }
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