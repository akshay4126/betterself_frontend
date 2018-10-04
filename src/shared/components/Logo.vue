<template>
    <div class="logo">
        <img
            v-if="$route.name !== 'home'"
            class="desktop-logo"
            src="/public/img/logo.png"
            alt="logo"
            :style="{'height': height, 'width': width}"
            @click="$router.push('/')"
        >
        <a href="#home" v-smooth-scroll v-else>
            <img
                class="desktop-logo"
                src="/public/img/logo.png"
                alt="logo"
                :style="{'height': height, 'width': width}"
            >
        </a>
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

