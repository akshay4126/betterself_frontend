<template>
    <section class="info" id="info">

        <div class="info-block">
            <img src="/public/img/info/icon_1.svg" alt="icon">
            <div>
                <h4 class="info-block-title">Manage your attention</h4>
                <p class="info-block-text">Manage your attention towards thoughts, desires and actions that matter to you. </p>
            </div>
        </div>

        <div class="info-block">
            <img src="/public/img/info/icon_2.svg" alt="icon">
            <div>
                <h4 class="info-block-title">Explore and exploit</h4>
                <p class="info-block-text">Explore the path personalised to your unique self that vibes with you, and exploit it to maximise your dream experience.</p>
            </div>
        </div>

        <div class="info-block">
            <img src="/public/img/info/icon_3.svg" alt="icon">
            <div>
                <h4 class="info-block-title">Co-create and Co-experience</h4>
                <p class="info-block-text">Pleasure or pain, we are meant to experience the world as a community. Challenge yourself and inspire others towards their personal best.</p>
            </div>
        </div>

    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
@import "../../../scss/var";
@import "../../../scss/mixins";

    .info{
        background-image: url("/public/img/info-bcg.svg"), $bcg_gradient;
        background-size: contain;
        background-repeat: no-repeat;
        min-height: 635px;
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        align-items: center;


        @media #{$mobile} {
            padding: 100px 20px;
        }

        &-block{
            display: flex;
            align-items: flex-start;
            max-width: 510px;
            width: 100%;
            margin-top: 64px;

            img{
                width: 80px;
                margin-right: 20px;
            }

            &:first-of-type{
                margin-top: 0;
            }

            &-title{
                @include font-source-sans(40px, $text_blue, 700, normal);

                @media #{$mobile} {
                    font-size: 24px;
                }
            }

            &-text{
                @include font-source-sans(16px, $text_blue, 600, normal);
            }
        }
    }

</style>