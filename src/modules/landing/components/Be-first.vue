<template>
    <section class="be-first" id="contact">

        <be-first-form/>

    </section>
</template>

<script>
    import BeFirstForm from '../../../shared/components/Be-first-form.vue'

    export default {
        components: {
            BeFirstForm
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../scss/var";
@import "../../../scss/mixins";


    .be-first{
        min-height: 340px;
        background-color: $bcg_violet;
        background-image: url('/public/img/befirst-bcg.svg');
        background-size: cover;
        background-repeat: no-repeat;
        padding: 56px 0;
        display: flex;
        justify-content: center;

        @media #{$mobile} {
            background-repeat: no-repeat;
            background-size: contain;
        }
    }

</style>