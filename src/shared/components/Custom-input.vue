<template>
    <div class="input-wrapper">
        <span
                class="input-label"
                v-if="label"
        >
            {{label}}
        </span>
        <div class="input">
            <slot name="input_before"></slot>
            <input
                class="input-field"
                :type="type"
                :class="{'error-field': fieldError}"
                :style="{'height': height, 'width': width}"
                :value="value"
                :placeholder="placeholder"
                @input="$emit('input', $event.target.value)"
                @keyup="touched($event)"
                @keyup.enter="$emit('enterPress')"
                @blur="onBlur"
                :maxLength="maxLength"
            >
            <slot name="input_after"></slot>
        </div>
    </div>
</template>



<script>
    export default {
        props: {
            width: {
                type: String,
            },
            height: {
                type: String,
                default: '40px'
            },
            label: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            value: {
                require: true
            },
            fieldError: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
            },
            maxLength: {
                type: Number
            },
        },
        methods: {
            touched (e) {
                if (e.target.value.length > 0) {
                    this.$emit('onTouched')
                } else if (e.target.value.length === 0) {
                    this.$emit('onEmptyField')
                }
            },
            onBlur () {
                this.$emit('onBlur')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/var";
    @import "../../scss/mixins";

    $errorColor: #c835a9;

    .input-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media #{$mobile} {
            width: 100%;
        }
    }

    .input{
        display: flex;
        align-self: flex-start;
        width: 100%;
        @include font-source-sans(14px, $text_black, 500);
    }

    .input-field{
        font-size: 16px;
        outline: none;
        border-radius: 24px;
        width: 100%;
        padding: 0 16px;
        color: $text_black;
        @include bcg-color-with-opacity($text_blue, 0.05);
        border: none;

        @media #{$mobile} {
            width: 100% !important;
        }
    }

    .input-label{
        font-weight: 700;
        font-size: 12px;
        text-align: left;
        font-family: 'AvenirBold';
        margin-bottom: 4px;
    }

    .error-field{
        border:2px solid $errorColor !important;
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #000000;
        opacity: 0.5;
        font-size: 14px;
        font-family: 'AvenirThin', sans-serif;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: #000000;
        opacity: 0.5;
        font-size: 14px;
        font-family: 'AvenirThin', sans-serif;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: #000000;
        opacity: 0.5;
        font-size: 14px;
        font-family: 'AvenirThin', sans-serif;
    }
    :-moz-placeholder { /* Firefox 18- */
        color: #000000;
        opacity: 0.5;
        font-size: 14px;
        font-family: 'AvenirThin', sans-serif;
    }


    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
    }

</style>
