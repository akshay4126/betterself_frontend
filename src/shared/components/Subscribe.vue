<template>
    <div
        class="subscribe"
        :class="{'subscribe-dark': theme === 'dark',
                 'subscribe-light': theme === 'light',
                 'subscribe-center': center,
                 'subscribe-focus': focus,
                 'subscribe-error': this.$v.email.$dirty && this.$v.email.$invalid
                }"
        :style="{'background-color': bcgColor, 'max-width': maxWidth}"
    >

        <input class="subscribe-input"
               type="text"
               ref="email"
               v-model="email"
               :placeholder="placeholder"
               @focus="focus = true"
               @blur="focus = false"
               @input="$emit('input', $event.target.value)"
               @keyup.enter="subscribe"
        >


        <div class="subscribe-right">
            <button
                class="subscribe-button"
                v-if="!isSend"
                @click="subscribe"
            >
                Subscribe
                <img src="/public/img/arrow-yellow.svg" alt="arrow">
            </button>

            <div v-if="isSend" class="done">
                Done
                <img src="/public/img/check.svg" alt="checkmark" v-if="theme === 'dark'">
                <img src="/public/img/check_blue.svg" alt="checkmark" v-else>
            </div>

        </div>

    </div>
</template>

<script>
    import dataService from '../../shared/services/data'
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        props: {
            theme: {
                type: String,
                validator: value => {return value === 'dark' || value === 'light'}
            },
            placeholder: {
                type: String
            },
            value: {
                type: String
            },
            bcgColor: {
                type: String
            },
            maxWidth: {
                type: String,
                default: '324px'
            },
            center: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                focus: false,
                isSend: false,
                email: ''
            }
        },
        methods:{
            subscribe() {
                this.$v.email.$touch();

                if (!this.$v.email.$invalid){
                    dataService.subscribe(this.email).then(() => {
                        this.isSend = true;
                        this.email = '';
                        this.$v.email.$reset();
                    })
                }
            }
        },
        validations: {
            email: {required, email}
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/var";
@import "../../scss/mixins";
$lightBcg: rgba(65, 25, 102, 0.37);
$lightBcgFocus: rgba(65, 25, 102, 0.17);
$errorColor: #ff0000;

    .subscribe{
        padding: 0 24px;
        height: 48px;
        background: $white;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        &-center{
            margin: 0 auto;
        }

        &-input{
            border:none;
            outline: none;
            font-size: 14px;
        }

        &-error{
            border:2px solid $errorColor;
        }

        &-button{
            border: none;
            background: transparent;
            cursor: pointer;
            font-weight: 700;
            display: flex;
            align-items: center;
            outline: none;

            img{
                width: 18px;
                margin-left: 8px;
            }
        }

        &-light{
            @include bcg-color-with-opacity($lightBcg, 0.05);

            input{
                background: transparent;
                color: $text_blue;
            }

            button{
                color: $text_blue;
            }

            &.subscribe-focus{
                @include bcg-color-with-opacity($lightBcgFocus, 0.02);
            }

            ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                color: rgba(39, 12, 72, 0.8);
                font-weight: 600;
                font-size: 14px;
                font-family: 'Source Sans Pro', sans-serif;
            }
            ::-moz-placeholder { /* Firefox 19+ */
                color: rgba(39, 12, 72, 0.8);
                font-weight: 600;
                font-size: 14px;
                font-family: 'Source Sans Pro', sans-serif;
            }
            :-ms-input-placeholder { /* IE 10+ */
                color: rgba(39, 12, 72, 0.8);
                font-weight: 600;
                font-size: 14px;
                font-family: 'Source Sans Pro', sans-serif;
            }
            :-moz-placeholder { /* Firefox 18- */
                color: rgba(39, 12, 72, 0.8);
                font-weight: 600;
                font-size: 14px;
                font-family: 'Source Sans Pro', sans-serif;
            }

            .done{
                color: $text_blue;
            }
        }

        &-dark{
            @include bcg-color-with-opacity(black, 0.2);

            input{
               background: transparent;
               color: $white;
            }

            button{
                color: $white;
            }

            &.subscribe-focus{
                background-color: rgba(65, 25, 102, 0.37) !important;
            }

            ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                color: rgba(255, 255, 255, 0.8);
                font-weight: 600;
                font-size: 14px;
                font-family: 'Source Sans Pro', sans-serif;
            }
            ::-moz-placeholder { /* Firefox 19+ */
                color: rgba(255, 255, 255, 0.8);
                font-weight: 600;
                font-size: 14px;
                font-family: 'Source Sans Pro', sans-serif;
            }
            :-ms-input-placeholder { /* IE 10+ */
                color: rgba(255, 255, 255, 0.8);
                font-weight: 600;
                font-size: 14px;
                font-family: 'Source Sans Pro', sans-serif;
            }
            :-moz-placeholder { /* Firefox 18- */
                color: rgba(255, 255, 255, 0.8);
                font-weight: 600;
                font-size: 14px;
                font-family: 'Source Sans Pro', sans-serif;
            }
        }
    }

    .done{
        color: $text_green;
        font-size: 14px;
        font-weight: 700;

        img{
            margin-left: 8px;
        }
    }

</style>