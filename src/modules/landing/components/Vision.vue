<template>
    <section class="vision" id="vision">
        <img class="star" src="/public/img/star.svg" alt="star">
        <div class="inner-wrapper">

            <div class="vision-left">
                <h3 class="vision-title">
                    {{visionHeader}}
                </h3>

                <p class="vision-text">
                    {{visionDesc}}
                </p>
            </div>

            <div class="vision-right">
                <img src="/public/img/vision/cloud.svg" alt="cloud">
            </div>

        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: {
            data: {
                type: Array
            }
        },
        computed: {
            ...mapGetters([
                'visionHeader',
                'visionDesc'
            ])
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../scss/var";
@import "../../../scss/mixins";

    .vision{
        min-height: 777px;
        padding: 64px 0 112px 0;
        background: $bcg_gradient;
        position: relative;

        .inner-wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            @media #{$mobile} {
                flex-direction: column-reverse;
            }
        }

        &-left{
            width: 46%;

            @media #{$mobile} {
                width: 100%;
            }
        }

        &-right{
            width: 46%;
            position: relative;

            @media #{$mobile} {
                width: 100%;
            }

            img{
                width: 100%;
            }
        }

        &-title{
            @include font-source-sans(18px, $text_pink, 700, 1.83);
            margin-bottom: 8px;
        }

        &-text{
            @include font-source-sans(54px, $text_pink, 700, normal);

            @media #{$mobile} {
                font-size: 32px;
            }

            @media #{$tablet} {
                font-size: 40px;
            }
        }
    }

    .star{
        position: absolute;
        top: 50px;
        right: 0;
    }

</style>