<template>
    <div class="overflow-hidden">
        <HeaderMenu></HeaderMenu>
        <section class="flex-wrap">
            <div class="relative flex overflow-hidden   lg:h-[calc(100vh_-_10px)] h-screen">
                <BlueCircle
                    class="absolute w-[300px] h-[300px] z-[-1] bg-contain bg-no-repeat bg-center translate-y-[50%] translate-x-[70%] overflow-in right-0  md:w-[400px] md:h-[400px] md:translate-x-[70%] md:translate-y-[30%]  lg:w-[533px] lg:h-[533px] lg:translate-x-[50%] lg:translate-y-[20%]" />
                <div class="container flex flex-wrap items-center justify-center h-full mx-auto">
                    <div class="flex items-center justify-center w-11/12 pt-20 text-center ">
                        <h1
                            class="text-center font-gilroy lg:text-[78px] lg:leading-[93.5px] font-[500] md:text-[60px] text-[35px] ">
                            We are Lyonn, Your Digital Agency
                        </h1>
                    </div>
                    <div class="flex items-center justify-center mt-2 pb-14">
                        <button class="mx-5 my-2 text-xs btn-default btn-black sm:mx-2 md:mx-2 md:text-sm">Start
                            Now</button>
                        <NuxtLink class="mx-5 my-2 text-xs btn-default btn-white sm:mx-2 md:mx-2 md:text-sm" href="#">
                            View
                            Portfolio
                        </NuxtLink>
                    </div>

                </div>
                <RedCircle class="absolute w-[300px] h-[300px] z-[-1] bg-contain bg-no-repeat bg-center translate-y-[40%]
                        translate-x-[-80%] md:w-[400px] md:h-[400px] md:translate-x-[-75%] md:translate-y-[15%]
                        lg:w-[533px] lg:h-[533px] lg:translate-x-[-50%] lg:translate-y-[15%]" />
            </div>
        </section>
    </div>
</template>

<script>
import BlueCircle from '~~/components/icons/BlueCircle.vue'
import RedCircle from '~~/components/icons/RedCircle'
import HeaderMenu from '~~/components/layout/HeaderMenu'



export default {
    components: {
        BlueCircle,
        RedCircle,
        HeaderMenu,

    },
    setup() {


        return {}
    }
}
</script>

