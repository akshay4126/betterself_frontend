<template>
    <section class="contact" >

        <h3 class="contact-title">Contact Us</h3>

        <form class="contact-form" @submit.prevent="sendForm">

            <custom-input
                class="contact-form-field wow fadeInUp"
                :placeholder="'Name'"
                :width="'100%'"
                :height="'48px'"
                v-model="form.name"
                :fieldError="$v.form.name.$invalid && $v.form.name.$dirty"
            />

            <custom-input
                class="contact-form-field wow fadeInUp"
                :placeholder="'Email'"
                :width="'100%'"
                :height="'48px'"
                v-model="form.email"
                :fieldError="$v.form.email.$invalid && $v.form.email.$dirty"
            />

            <custom-textarea
                class="contact-form-field wow fadeInUp"
                :placeholder="'Message'"
                :width="'100%'"
                :height="'112px'"
                v-model="form.message"
                :fieldError="$v.form.message.$invalid && $v.form.message.$dirty"
            />

            <custom-btn
                class="wow fadeInUp"
                :text="'Send Message'"
                :btnType="'gradient'"
                :width="'100%'"
                :height="'48px'"
                :showArrow="true"
            />

        </form>

    </section>
</template>

<script>
    import CustomInput from '../../../shared/components/Custom-input.vue'
    import CustomTextarea from '../../../shared/components/Custom-textarea.vue'
    import CustomBtn from '../../../shared/components/Custom-btn.vue'
    import { required, email } from 'vuelidate/lib/validators'
    import dataService from '../../../shared/services/data'

    export default {
        components: {
            CustomInput,
            CustomTextarea,
            CustomBtn
        },
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    message: ''
                }
            }
        },
        validations: {
            form: {
                name: {required},
                email: {required, email},
                message: {required}
            }
        },
        methods: {
            sendForm() {
                this.$v.form.$touch();

                if (!this.$v.form.$invalid) {
                    dataService.sendForm(this.form).then(() => {
                        this.clearForm();
                    }, err => {
                        console.log(err)
                    })
                }
            },
            clearForm() {
                this.$v.form.$reset();
                this.form = {
                    name: '',
                    email: '',
                    message: ''
                };
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../scss/var";
@import "../../../scss/mixins";

    .contact{
        background-image: url("/public/img/contact-us-bcg.svg"), $bcg_gradient;
        background-repeat: no-repeat;
        background-size: 100%;
        min-height: 505px;
        padding-top: 37px;
        padding-bottom: 88px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media #{$mobile} {
            background: $bcg_gradient;
        }


        &-title{
            @include font-source-sans(40px, $text_blue, 700, 0.83);
            margin-bottom: 43px;
        }

        &-form{
            max-width: 324px;
            width: 100%;

            &-field{
                margin-bottom: 16px;

            }
        }
    }



</style>