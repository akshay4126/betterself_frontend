<template>
    <div class="be-first-form">
        <img src="/public/img/rainbow.svg" alt="rainbow">
        <h3 class="be-first-form-title">Be the first to try</h3>
        <img src="/public/img/better-self.png" alt="better-self">

        <subscribe
            :placeholder="'Enter email address'"
            :theme="'dark'"
        />
    </div>
</template>


<script>
    import Subscribe from '../../shared/components/Subscribe.vue'

    export default {
        components: {
            Subscribe
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/var";
@import "../../scss/mixins";

    .be-first-form{
        max-width: 370px;
        width: 100%;
        text-align: center;

        img:first-of-type{
            width: 64px;
        }

        img:last-of-type{
            width: 196px;
            margin-bottom: 40px;
        }

        &-title{
            @include font-source-sans(40px, $white, 700, normal);
            margin-top: 16px;
            margin-bottom: 8px;
        }

    }

</style>