<template>
    <footer class="footer">
        <div class="inner-wrapper">

            <div class="empty">

            </div>


            <div class="footer-center" @click="$router.push('/')">
                <img src="/public/img/better-self.png" alt="better-self">
            </div>


            <social-links/>

        </div>
    </footer>
</template>

<script>
    import SocialLinks from '../../../shared/components/Social-links.vue'

    export default {
        components: {
            SocialLinks
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../scss/var";
@import "../../../scss/mixins";

    .footer{
        background-color: $text_blue;
        height: $footer-height;
        position: relative;
        line-height: $footer-height;

        .inner-wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &-center{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;

            @media #{$mobile} {
                position: relative;
                left: 0;
            }


            img{
                width: 136px;
            }
        }
    }

    .socials{
        &__link{
            margin-right: 16px;

            &:last-of-type{
                margin-right: 0;
            }
        }
    }

</style>