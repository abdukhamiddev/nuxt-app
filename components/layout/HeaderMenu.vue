<template>
    <div class="fixed z-[11] bg-transparent w-full" ref="menuHeaderRef" v-scroll="handleScroll">
        <nav class="relative px-0 h-[110px] flex pt-2 px4 justify-between items-center flex-wrap">
            <div class="flex items-center justify-between w-full px-4 lg:px-12">

                <button ref="toggler" @click="toggleHandler" class="bg-transparent cursor-pointer
                    border-[hsla(0,0%,100%,.1)] rounded-md border border-solid py-1 px-3
                    focus:outline-black focus:outline-[2px] focus:outline">
                    <HamburgerMenu class="w-5 h-5 transition-all duration-300 black-ico">
                    </HamburgerMenu>
                </button>



                <div class="flex justify-center absolute left-[50%] translate-x-[-50%]">
                    <nuxt-link to="/">
                        <img src="~/assets/img/ico/lyonn-positive.svg" alt="Agency Logo" class="w-8 h-8" />
                    </nuxt-link>
                </div>
                <div class="flex items-center cursor-pointer text-dark underline-hover" href="#">
                    <span class="font-gilroy font-700 text-[12px] ">Contact Us</span>
                    <img class="w-4 h-4 mb-1 ml-4 align-middle" src="~/assets/img/ico/wp-positive.svg"
                        alt="Whatsapp Lyonn Contact" />
                </div>
            </div>
            <div class="w-[100vw] fixed  bg-[#000000]  z-20  min-h-screen  inset-0 translate-y-[-100%] transition-transform duration-300"
                :class="showMenu ? 'translate-y-[]' : ''">
                <button ref="toggler" @click="toggleHandler"
                    class="z-30 bg-transparent cursor-pointer border-[hsla(0,0%,100%,.1)] rounded-md border border-solid py-1 px-3"
                    :class="toggled ? 'focus:outline-[2px] focus:outline  focus:outline-slate-100' : 'focus:outline-black focus:outline-[1px] focus:outline'">
                    <HamburgerMenu class="w-5 h-5 transition-all duration-300 black-ico"
                        :class="toggled ? 'white-ico' : 'black-ico'" :x22="toggled ? '21' : '22'">
                    </HamburgerMenu>
                </button>
            </div>
        </nav>

    </div>
</template>

<script>
import HamburgerMenu from '../icons/HamburgerMenu.vue';


export default {


    setup() {

    },
    components: { HamburgerMenu },
    data() {
        return {
            headerHeight: 80,
            showMenu: false,
            headerElement: null,
            toggled: false
        };
    },
    directives: {
        scroll: {
            mounted(el, binding) {
                let f = function (evt) {
                    if (binding.value(evt, el)) {
                        window.removeEventListener('scroll', f)
                    }
                    console.log(el);
                }
                window.addEventListener('scroll', f)
            }

        }
    },
    mounted() {
        this.headerElement = this.$refs.menuHeaderRef
    },
    methods: {
        handleScroll(evt, el) {
            if (
                window.scrollY > this.headerHeight &&
                !this.headerElement.classList.contains('menu-white')
            ) {
                this.headerElement.classList.add('menu-white')
            } else if (
                window.scrollY < this.headerHeight &&
                this.headerElement.classList.contains('menu-white')
            ) {
                this.headerElement.classList.remove('menu-white')
            }
        },
        toggleHandler(evt) {
            this.showMenu = !this.showMenu;
            this.toggled = !this.toggled
        }
    },


}


</script>

<style lang="scss" scoped>
</style>