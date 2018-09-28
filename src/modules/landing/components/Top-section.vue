<template>
    <section class="top-section">
        <div class="inner-wrapper">

            <div class="top-section-left">
                <img src="/public/img/better-self.svg"
                     alt="title"
                     class="top-section-title"
                >
                <h1 class="top-section-subtitle">{{firstScreenSubheader}}</h1>

                <div class="top-section-buttons">
                    <img
                        @click="$modal.show('form-modal')"
                        src="/public/img/top-section/apple@2x.jpg"
                        alt="apple-store"
                    >
                    <img
                        @click="$modal.show('form-modal')"
                        src="/public/img/top-section/google@2x.jpg"
                        alt="google-play"
                    >
                </div>

                <p class="top-section-text">{{firstScreenDesription}}</p>

                <subscribe
                    class="top-section-subscribe"
                    :placeholder="'Enter email address'"
                    :theme="'light'"
                />
            </div>

            <div class="top-section-right">
                <img src="/public/img/top-section/phone@2x.png" alt="phone">
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
        overflow: hidden;

        @media #{$mobile} {
            min-height: 660px;
            height: 100%;
        }

        &-right{
            text-align: right;
            width: 50%;

            img{
                width: 450px;
                position: relative;
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
            max-width: 390px;

            @media #{$mobile} {
                order:1;
            }
        }

        &-buttons{
            img{
                cursor: pointer;
                width: 145px;
                height: 50px;

                &:first-of-type{
                    margin-right: 16px;
                }
            }

            @media #{$mobile} {
                order:3;
                margin-top: 20px;
                text-align: center;
            }
        }

        &-subscribe{
            @media #{$mobile} {
                order:2;
                margin: 0 auto;
            }
        }

        &-subtitle{
            margin: 24px 0;
            @include font-source-sans(24px, $text_blue, 700, 1.38);

            @media #{$mobile} {
                order:2;
                font-size: 18px;
                text-align: center;
            }
        }

        &-text{
            @include font-source-sans(18px, $text_blue, 400, 1.83);
            margin: 24px 0;

            @media #{$mobile} {
                order:4;
            }
        }
    }

</style>