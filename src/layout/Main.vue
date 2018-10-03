<template>
    <div class="main-wrapper">
        <burger-btn class="show-on-mobile"/>

        <app-header/>

        <main class="main">
            <router-view></router-view>
        </main>

        <app-footer/>
    </div>
</template>

<script>
    import appModal from './../shared/components/Modal.vue'
    import appHeader from '../modules/common/header/Header.vue'
    import appFooter from '../modules/common/footer/Footer.vue'
    import BurgerBtn from './../shared/components/Burger-btn.vue'

    export default {
        components: {
            appModal,
            appHeader,
            appFooter,
            BurgerBtn
        }
    }
</script>

<style lang="scss" scoped>

    .main-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

    }

    .main{
        margin-top: 70px;
    }



</style>