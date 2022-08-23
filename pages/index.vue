<template>
    <div class="overflow-hidden">
        <HeaderMenu></HeaderMenu>
        <section class="flex-wrap">
            <div class="relative flex lg:h-[calc(100vh_-_10px)] h-screen">
                <BlueCircle
                    class="absolute w-[300px] h-[300px] z-[-1] bg-contain bg-no-repeat bg-center translate-y-[50%] translate-x-[70%] overflow-in right-0  md:w-[400px] md:h-[400px] md:translate-x-[70%] md:translate-y-[30%]  lg:w-[533px] lg:h-[533px] lg:translate-x-[50%] lg:translate-y-[20%]" />
                <div class="container flex flex-wrap items-center justify-center h-full mx-auto">
                    <div class="flex items-center justify-center w-11/12 pt-20 text-center ">
                        <h1
                            class="text-center font-gilroy lg:text-[78px] lg:leading-[93.5px] font-[500] md:text-[60px] text-[35px] ">
                            We are Lyonn, Your Digital Agency
                        </h1>
                    </div>
                    <div class="flex items-center justify-center mt-6 ">
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
            <div
                class="flex md:max-w-[85%] lg:max-w-[70%] items-center justify-center mx-auto max-w-[90%] flex-col md:flex-row mt-12">
                <div>
                    <HeroCard imageUrl="/assets/img/ico/area-design.svg" text="Graphic Design." />
                </div>
                <div>
                    <HeroCard imageUrl="/assets/img/ico/area-d.t.svg" text="Web Development." />
                </div>
                <div>
                    <HeroCard imageUrl="/assets/img/ico/area-m.k.svg" text="Digital Marketing." />
                </div>
                <div>
                    <HeroCard imageUrl="/assets/img/ico/area-p.a.svg" text="Audiovisual production." />
                </div>
            </div>
        </section>

        <section>
            <div class="flex items-center justify-between container-body">
                <div class="">
                    <h2 class="text-[40px] font-semibold text-center font-gilroy sm:text-left">Our
                        <br>
                        Services.
                    </h2>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BlueCircle from '~~/components/icons/BlueCircle'
import RedCircle from '~~/components/icons/RedCircle'
import HeaderMenu from '~~/components/layout/HeaderMenu'
import HeroCard from '~~/components/pages/HeroCard'



export default {
    components: {
        BlueCircle,
        RedCircle,
        HeaderMenu,
        HeroCard
    },
    setup() {


        return {}
    }
}
</script>

