<template>
    <div class="fixed z-[11]  w-full">
        <nav class=" relative px-0 h-[110px] flex pt-2 px4 justify-between items-center flex-wrap">
            <div class="flex items-center justify-between w-full px-4 bg-transparent lg:px-12" ref="menuHeaderRef"
                v-scroll="handleScroll">

                <button ref=" toggler" @click="toggleHandler" class="bg-transparent cursor-pointer
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
                    <span class="font-gilroy font-700 text-[12px] under-line-right">Contact Us</span>
                    <img class="w-4 h-4 mb-1 ml-4 align-middle" src="~/assets/img/ico/wp-positive.svg"
                        alt="Whatsapp Lyonn Contact" />
                </div>
            </div>
            <div class="w-[100vw] fixed  bg-[#000000]  z-20  min-h-screen  inset-0 translate-y-[-100%] transition-transform duration-300  px-4 lg:px-12 overflow-y-scroll"
                :class="showMenu ? 'translate-y-[]' : ''">
                <div class="flex items-center justify-between h-32 ">
                    <div>
                        <button ref="toggler" @click="toggleHandler"
                            class="z-30 bg-transparent cursor-pointer border-[hsla(0,0%,100%,.1)] rounded-md border border-solid py-1 px-3"
                            :class="toggled ? 'focus:outline-[2px] focus:outline  focus:outline-slate-100' : 'focus:outline-black focus:outline-[1px] focus:outline'">
                            <HamburgerMenu class="w-5 h-5 transition-all duration-300 black-ico"
                                :class="toggled ? 'white-ico' : 'black-ico'" :x22="toggled ? '21' : '22'">
                            </HamburgerMenu>
                        </button>
                    </div>
                    <div>
                        <NuxtLink to="/" @click="toggleHandler">
                            <img src="~/assets/img/ico/lyonn-w.svg" alt="" class="w-8 h-8">
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex flex-wrap pt-6 h-fit">
                    <div class="flex-wrap items-center justify-between sm:flex container-body ">
                        <ul class="text-white ">
                            <li class="under-line nav-big-text">
                                <NuxtLink to="/areas/design"> Design.</NuxtLink>
                            </li>
                            <li class="under-line nav-big-text">
                                <NuxtLink to=" /areas/web">Web Development.</NuxtLink>
                            </li>
                            <li class="under-line nav-big-text">
                                <NuxtLink to="/areas/marketing">Marketing.</NuxtLink>
                            </li>
                            <li class="under-line nav-big-text">
                                <NuxtLink to="/areas/visual">Audiovisual.</NuxtLink>
                            </li>
                        </ul>
                        <ul
                            class="flex justify-between mt-4 text-lg text-white md:text-xl sm:block h-fit font-gilroy opacity-80">
                            <div>
                                <li class="under-line">
                                    <NuxtLink to="/areas/design">HOME.</NuxtLink>
                                </li>
                                <li class="under-line">
                                    <NuxtLink to="/areas/design">SERVICES.</NuxtLink>
                                </li>
                                <li class="under-line">
                                    <NuxtLink to="/areas/design">GALLERY.</NuxtLink>
                                </li>
                            </div>
                            <div>
                                <li class="under-line">
                                    <NuxtLink to="/areas/design">PORTFOLIO.</NuxtLink>
                                </li>
                                <li class="under-line">
                                    <NuxtLink to="/areas/design">ABOUT US.</NuxtLink>
                                </li>
                                <li class="under-line">
                                    <NuxtLink to="/areas/design">CONTACT.</NuxtLink>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-wrap pt-8 pb-6 text-white">
                    <div class="flex flex-col justify-between container-body sm:flex-row">
                        <div class="w-3/5 sm:w-auto">
                            <div
                                class="grid grid-cols-1 pb-4 text-xs leading-normal sm:flex gap-x-6 lg:text-base md:pb-0">
                                <div class="flex flex-col sm:flex-row gap-x-3">
                                    <a href="" class="line">Facebook</a>
                                    <a class="">Instagram</a>
                                </div>
                                <div class="flex flex-col sm:flex-row gap-x-3">
                                    <a class="">LinkedIn</a>
                                    <a class="">WhatsApp</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col text-xs sm:flex-row gap-x-5 lg:text-base">
                            <a href="#">Phone (443) 220 9267</a>
                            <a href="#">Office (443) 506
                                0575</a>
                            <a class="" href="#">Mail
                            </a>
                        </div>

                    </div>
                </div>
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