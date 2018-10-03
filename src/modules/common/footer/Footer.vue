<template>
    <footer class="footer">
        <div class="inner-wrapper">

            <div class="empty">

            </div>


            <div class="footer-center" @click="$router.push('/')">
                <img src="/public/img/logo.png" alt="logo">
                <img src="/public/img/better-self.svg" alt="better-self">
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
            cursor: pointer;
            display: flex;
            align-items: center;

            img:first-of-type{
                width: 32px;
            }
            img:last-of-type{
                width: 98px;
                margin-left: 8px;
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