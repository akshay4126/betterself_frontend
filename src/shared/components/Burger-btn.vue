<template>
    <div class="burger" @click="$root.$emit('openMobileMenu')">
        <img src="/public/img/burger-btn.png" alt="burger">
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .burger{
        position: fixed;
        bottom: 40px;
        right: 0;
        z-index: 9;
        width: 70px;

        img{
            width: 100%;
        }
    }

</style>