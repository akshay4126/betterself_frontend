<template>
    <footer class="footer">
        <div class="inner-wrapper">

            <div class="empty">

            </div>


            <div class="footer-center">
                <img src="/public/img/logo.png" alt="logo">
                <img src="/public/img/better-self.svg" alt="better-self">
            </div>


            <div class="socials">
                <a href="https://www.facebook.com/betterself.today/" target="_blank" class="socials__link">
                    <img src="/public/img/socials/facebook.svg" alt="facebook">
                </a>
                <a href="https://www.instagram.com/betterself.today/" target="_blank" class="socials__link">
                    <img src="/public/img/socials/instagram.svg" alt="instagram">
                </a>
                <a href="https://twitter.com/I83423721" target="_blank" class="socials__link">
                    <img src="/public/img/socials/twitter.svg" alt="twitter">
                </a>
            </div>

        </div>
    </footer>
</template>

<script>
    export default {}
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