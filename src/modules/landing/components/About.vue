<template>
    <section class="about" id="about">
        <img class="cloud" src="/public/img/cloud_2.svg" alt="cloud">

        <div class="inner-wrapper">

            <h3 class="about-title">{{aboutHeader}}</h3>

            <p class="about-subtitle">{{aboutSubHeader}}</p>

            <p class="about-text">{{aboutDesc}}</p>
            <custom-btn
                class="about-btn"
                :btnType="'simple'"
                :text="'Learn More'"
                :width="'140px'"
                @click="$router.push({name: 'about'})"
            />

        </div>
    </section>
</template>

<script>
    import CustomBtn from '../../../shared/components/Custom-btn.vue'
    import {mapGetters} from 'vuex'

    export default {
        props: {
            data: {
                type: Array
            }
        },
        components:{
            CustomBtn
        },
        computed: {
            ...mapGetters([
                'aboutHeader',
                'aboutSubHeader',
                'aboutDesc'
            ])
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../scss/var";
@import "../../../scss/mixins";

    .about{
        min-height: 725px;
        padding: 80px 0;
        background-color: $bcg_violet;
        background-image: url('/public/img/about-bcg.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;

        .cloud{
            position: absolute;
            left: 0;
            top: 20px;
            display: none;

            @media #{$mobile} {
                display: block;
            }
        }

        @media #{$mobile} {
            background-image: none;
            background-size: contain;
        }

        .inner-wrapper{
            max-width: 970px;
            text-align: center;
        }

        &-title{
            @include font-source-sans(18px, $white, 700, 1.83);
        }

        &-subtitle{
            @include font-source-sans(54px, $white, 700, normal);

            @media #{$mobile} {
                font-size: 32px;
            }

            margin-top: 24px;
            margin-bottom: 32px;

            @media #{$tablet} {
                font-size: 40px;
            }
        }

        &-text{
            @include font-source-sans(24px, $white, 700, normal);
            margin-bottom: 40px;
        }

        &-btn{
            margin-left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
        }

    }

</style>