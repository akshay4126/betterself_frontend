<template>
    <section class="top-section" id="home" >
        <div class="inner-wrapper">

            <div class="top-section-left wow fadeIn" data-wow-delay="0.6s">
                <img src="/public/img/better-self.png"
                     alt="title"
                     class="top-section-title"
                >
                <h1 class="top-section-subtitle">{{firstScreenSubheader}}</h1>

                <p class="top-section-text">{{firstScreenDesription}}</p>

                <subscribe
                    class="top-section-subscribe"
                    :placeholder="'Enter email address'"
                    :theme="'light'"
                    :center="false"
                />
            </div>

            <div class="top-section-right">
                <img class="wow fadeIn" data-wow-delay="0.6s" src="/public/img/top-section/phone@2x.png" alt="phone">
            </div>

        </div>
    </section>
</template>

<script>
    import Subscribe from '../../../shared/components/Subscribe.vue'
    import {mapGetters} from 'vuex'

    export default {
        props: {
            data: {
                type: Array
            }
        },
        components:{
            Subscribe
        },
        computed: {
            ...mapGetters([
                'firstScreenSubheader',
                'firstScreenDesription'
            ])
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../scss/var";
@import "../../../scss/mixins";

    .top-section{
        height: 660px;
        background: $bcg_gradient;
        padding-top: 95px;
        position: relative;

        @media #{$mobile} {
            min-height: 660px;
            height: 100%;
            padding-top: 30px;
        }

        &-right{
            text-align: right;
            width: 50%;

            img{
                width: 390px;
                position: relative;
                z-index: 8;
                bottom: 55px;

                @media #{$tablet} {
                    width: 400px;
                    bottom: -10px;
                }

                @media #{$mobile} {
                    width: 300px;
                    bottom: -10px;
                }
            }

            @media #{$mobile} {
                width: 100%;
                text-align: center;
            }
        }

        &-left{
            display: flex;
            flex-direction: column;
            width: 50%;
            margin-top: 50px;

            @media #{$mobile} {
                width: 100%;
            }
        }

        .inner-wrapper{
            display: flex;
            justify-content: space-between;

            @media #{$mobile} {
                flex-direction: column;
            }
        }

        &-title{
            max-width: 460px;

            @media #{$mobile} {
                order:1;
                max-width: 250px;
                margin: 0 auto;
            }
        }

        &-buttons{
            img{
                cursor: pointer;
                width: 145px;
                height: 43px;

                &:first-of-type{
                    margin-right: 16px;
                }
            }

            @media #{$mobile} {
                order:3;
                text-align: center;
            }
        }

        &-subscribe{
            @media #{$mobile} {
                order:3;
                margin: 15px auto 0;
            }
        }

        &-subtitle{
            margin: 24px 0;
            margin-bottom: 0;
            @include font-source-sans(24px, $text_blue, 700, 1.38);

            @media #{$mobile} {
                order:2;
                font-size: 18px;
                text-align: center;
            }
        }

        &-text{
            @include font-source-sans(18px, $text_blue, 600, 1.83);
            margin: 24px 0;

            @media #{$mobile} {
                order:4;
                text-align: center;
            }
        }
    }

</style>