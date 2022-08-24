<template>
    <section class="relative block section-spacing">

        <div class="curved-background"></div>
        <div class="absolute flex content-center w-full h-full pt-6 z-[1] top-0">
            <div class="flex items-center justify-center container-body">
                <div class="flex flex-wrap items-center justify-center mt-6 md:flex-nowrap">
                    <LyonnIcoPositive class="mb-12 mr-8"></LyonnIcoPositive>
                    <div
                        class="flex flex-wrap max-w-full md:max-w-[50%] lg:max-w-[50%]  justify-center lg:justify-start sm:px-12 md:px-4">
                        <h2
                            class="py-1 text-base text-center text-white lg:text-3xl font-gilroy md:text-left sm:font-bold">
                            {{ mainTitle }}

                        </h2>
                        <h3
                            class="py-1 text-xs font-light text-center text-white lg:text-lg font-gilroy opacity-60 md:text-left">
                            {{ subTitle }}
                        </h3>
                    </div>

                    <div
                        class="flex flex-wrap items-center justify-center mx-6 mt-4 md:max-w-[50%] lg:max-w-[33%] flex-col text-xs md:text-base">
                        <a
                            class="mx-2 my-2 text-white border-white cursor-pointer btn-default btn-black border-[1px] border-solid ">
                            <!--              Contáctanos-->
                            Contact Us
                        </a>
                        <a href="https://wa.me/5214435060575" target="_blank "
                            class="mx-2 my-2 text-white cursor-pointer btn-default btn-black">
                            <!--              Comenzar-->
                            Start Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CurvedBackground from '~/components/layout/background'
import LyonnIcoPositive from '~/components/icons/LogoIcon.vue'
export default {
    name: 'CurvedCallToAction',
    components: {
        CurvedBackground,
        LyonnIcoPositive
    },
    props: {
        mainTitle: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
</style>
