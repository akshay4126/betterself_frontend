<template>
    <div class="burger" @click="$root.$emit('openMobileMenu')">
        <img src="/public/img/burger-btn.svg" alt="burger">
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .burger{
        position: fixed;
        bottom: 40px;
        right: 30px;
        z-index: 9;
        width: 40px;
    }

</style>