<template>
    <button
        class="btn"
        :class="{'simple_btn': btnType === 'simple', 'gradient_btn': btnType === 'gradient'}"
        :style="{'width': width, 'height': height}"
        @click="$emit('click')"
    >
        <span v-if="!isSubmit">{{text}}</span>
        <img v-if="showArrow && !isSubmit" class="btn-image" src="/public/img/arrow.svg" alt="arrow">
        <p v-if="isSubmit">Done <img src="/public/img/check_white.svg" alt="check"></p>
    </button>
</template>

<script>
    export default {
        props: {
            isSubmit: {
                type: Boolean,
                default: false
            },
            btnType: {
                type: String,
                validator: value => {return value === 'simple' || value === 'gradient'},
                required: true
            },
            width: {
                type: String,
                default: 'auto'
            },
            height: {
                type: String,
                default: '40px'
            },
            text: {
                type: String,
                required: true
            },
            showArrow: {
                type: Boolean,
                default: false
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import "../../scss/var";
    @import "../../scss/mixins";



    .btn{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        @include font-source-sans(14px, $white, 700);


        &-image{
            width: 20px;
            margin-left: 8px;
        }

        p{
            width: 100%;
            text-align: center;

            img{
                margin-left: 6px;
            }
        }
    }


    .gradient_btn{
        background: $btn_gradient;
        border-radius: 24px;
        box-shadow: $btn_shadow;
        transition: 0.2s;
        position: relative;
        overflow: hidden;

        &:after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            background: rgba(255,255,255,0);
            transition: 0.2s;
        }

        &:hover{

            &:after{
                background: rgba(255,255,255,0.15);
            }
        }
    }

    .simple_btn{
        border: 1px solid $white;
        border-radius: 24px;

        &:hover{
            font-size: 12px;
        }
    }



</style>