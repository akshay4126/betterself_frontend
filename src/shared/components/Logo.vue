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
                default: '45px'
            },
            width: {
                type: String,
                default: '45px'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/var";

</style>

