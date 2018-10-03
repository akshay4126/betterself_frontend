<template>
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
</template>

<style lang="scss" scoped>
    .socials{
        margin-right: 24px;

        &__link{
            margin-right: 16px;

            &:last-of-type{
                margin-right: 0;

                img{
                    width: 19px;
                }
            }
        }
    }
</style>