<template>
    <div>
        <modal
            :height="490"
            :maxWidth="'100%'"
            :width="'650px'"
            name="form-modal"
        >
            <div class="form-content">
                <div class="close" @click="$modal.hide('form-modal')">
                    <img src="/public/img/close.svg" alt="close">
                </div>

                <be-first-form/>
            </div>

        </modal>
    </div>
</template>

<script>
    import CustomInput from './Custom-input.vue'
    import BeFirstForm from '../../shared/components/Be-first-form.vue'

    export default {
        components: {
            CustomInput,
            BeFirstForm
        },
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    message: ''
                },
                isSend: false
            }
        },
        methods: {},
    }
</script>


<style lang="scss" scoped>
    @import "../../scss/var";
    @import "../../scss/mixins";

    /deep/ .v--modal {
        background-color: $bcg_violet;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .close{
        position: absolute;
        top: 32px;
        right: 32px;
        cursor: pointer;
    }


</style>
