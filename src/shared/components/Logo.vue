<template>
    <div class="logo" @click="$router.push('/')">
        <img
            class="desktop-logo"
            src="/public/img/logo.png"
            alt="logo"
            :style="{'height': height, 'width': width}"
        >
    </div>
</template>

<script>
    export default {
        props: {
            height: {
                type: String,
                default: 'auto'
            },
            width: {
                type: String,
                default: '70px'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/var";

    .logo{
        cursor: pointer;
        margin-right: -20px;
    }

</style>

