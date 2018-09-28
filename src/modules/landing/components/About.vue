<template>
    <section class="about">
        <div class="inner-wrapper">

            <h3 class="about-title">About App</h3>

            <p class="about-subtitle">This story began when we realized the problem faced by most of today's people…</p>

            <p class="about-text">In modern world actions are building blocks of the physical world experience, or any desired dream state our users dream of. These days, due to overflow of information, attention seekers and people being addicted to phone/tech - they end up creating lot of dreams, waste lot of time on tech (due to algorithms / companies optimized to keep them addicted). </p>

            <custom-btn
                class="about-btn"
                :btnType="'simple'"
                :text="'Learn More'"
                :width="'140px'"
            />

        </div>
    </section>
</template>

<script>
    import CustomBtn from '../../../shared/components/Custom-btn.vue'

    export default {
        components:{
            CustomBtn
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

        .inner-wrapper{
            max-width: 970px;
            text-align: center;
        }

        &-title{
            @include font-source-sans(18px, $white, 700, 1.83);
        }

        &-subtitle{
            @include font-source-sans(64px, $white, 700, normal);

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
        }

    }

</style>