<template>
    <header class="header">
        <div class="inner-wrapper">

            <div class="header-left">
                <logo/>

                <div class="header-nav">
                    <router-link :to="{ name: 'home', hash: '#about' }"  class="header-nav__item">About</router-link>
                    <router-link :to="{ name: 'home', hash: '#vision'}" class="header-nav__item">Vision</router-link>
                    <router-link :to="{ name: 'home', hash: '#info'}" class="header-nav__item">Features</router-link>
                    <router-link :to="{ name: 'home', hash: '#contact'}" class="header-nav__item">Contact Us</router-link>
                </div>

                <div class="header-nav-mobile" v-if="showMobileMenu">

                    <div class="close" @click="closeMobileMenu">x</div>

                    <router-link to="/" class="logo-link"><img @click="closeMobileMenu" src="/public/img/logo.png" alt="logo"></router-link>

                    <div class="links" @click="closeMobileMenu">
                        <router-link :to="{ name: 'home', hash: '#about' }" class="header-nav-mobile__item">About</router-link>
                        <router-link :to="{ name: 'home', hash: '#vision' }" class="header-nav-mobile__item">Vision</router-link>
                        <router-link :to="{ name: 'home', hash: '#info' }" class="header-nav-mobile__item">Features</router-link>
                        <router-link :to="{ name: 'home', hash: '#contact' }" class="header-nav-mobile__item">Contact Us</router-link>
                    </div>

                   <social-links/>
                </div>

            </div>

            <div class="header-right">
                <social-links/>
                <custom-btn
                    :text="'Subscribe'"
                    :btnType="'gradient'"
                    :width="'140px'"
                    @click="$modal.show('form-modal')"
                    :showArrow="true"
                />
            </div>

        </div>
    </header>
</template>

<script>
    import Logo from '../../../shared/components/Logo.vue'
    import CustomBtn from '../../../shared/components/Custom-btn.vue'
    import SocialLinks from '../../../shared/components/Social-links.vue'

    export default {
        components: {
            Logo,
            CustomBtn,
            SocialLinks
        },
        data() {
          return {
              showMobileMenu: false
          }
        },
        mounted() {
            this.$root.$on('openMobileMenu', () => {
                this.openMobileMenu();
            })
        },
        methods:{
            closeMobileMenu() {
                this.showMobileMenu = false
            },
            openMobileMenu() {
                this.showMobileMenu = true
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../scss/var";
@import "../../../scss/mixins";

    .header{
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 999;
        height: $header-height;
        background-color: $bcg_violet;

        .inner-wrapper{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-left{
            display: flex;
            align-items: center;
        }

        &-nav{

            &-mobile{
                position: fixed;
                height: 100vh;
                width: 100vw;
                background: $text_blue;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                z-index: 10;
                top: 0;
                left: 0;
                padding: 20px 0;

                .close{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    color: white;
                    font-size: 24px;
                }

                .links{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .socials{
                    text-align: center;
                    img{
                        height: 20px;
                        width: 20px;
                        margin: 0 10px;
                    }
                }

                img{
                    width: 70px;
                }

                &__item{
                    color: $white;
                    font-size: 18px;
                    margin-top: 40px;
                    transition: .2s;
                    font-weight: 700;

                    &:first-of-type{
                        margin-top: -30px;
                    }
                }
            }

            @media #{$mobile} {
                display: none;
            }

            &__item{
                margin-left: 40px;
                @include font-source-sans(14px, $white, 700)

                &:hover{
                    color: $text_yellow;
                }
            }
        }

        &-right{
            display: flex;
            align-items: center;
        }
    }

    .socials{
        margin-right: 24px;

        &__link{
            margin-right: 16px;

            &:last-of-type{
                margin-right: 0;
            }
        }
    }

</style>