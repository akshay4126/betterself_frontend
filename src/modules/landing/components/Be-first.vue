<template>
    <section class="be-first" id="contact">

        <img class="cloud" src="/public/img/cloud.svg" alt="cloud">

        <be-first-form class="wow fadeInUp"/>

    </section>
</template>

<script>
    import BeFirstForm from '../../../shared/components/Be-first-form.vue'

    export default {
        props: {
            data: {
                type: Array
            }
        },
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
        background-size: 100%;
        background-repeat: no-repeat;
        padding: 56px 0;
        display: flex;
        justify-content: center;
        position: relative;

        .cloud{
            position: absolute;
            right: 0;
            top: -90px;
            display: none;

            @media #{$mobile} {
                display: block;
            }
        }

        @media #{$mobile} {
            background-image: url('/public/img/be-first-bcg-mobile.svg');
            background-size: contain;
        }
    }

</style>