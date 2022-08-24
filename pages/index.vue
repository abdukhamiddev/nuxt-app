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

        <section class="container section-spacing">
            <div class="flex items-center justify-between container-body mb-[50px] md:mb-[105px]  mt-12 ">
                <div class="pl-12 md:pl-0">
                    <h2 class="lg:text-[40px] font-semibold text-center font-gilroy sm:text-left md:px-3 text-3xl">Our
                        <br>
                        Services.
                    </h2>
                </div>

                <MoreLink text="View All Our Services" class="hidden w-32 sm:block under-line-right" />

            </div>
            <div
                class="grid content-center justify-center grid-cols-1 px-12 lg:grid-cols-4 md:px-12 sm:px-1 place-items-center md:grid-cols-2">
                <!--      <div class="flex-wrap px-4 container-body px-sm-0 d-flex align-items-center justify-content-between">-->
                <div class="flex flex-col md:px-4 sm:px-0 ">
                    <!--Column for design-->
                    <div v-for="(service, index) in designDataServices.services" v-bind:key="index">
                        <Services :serviceTit="service" :area="designDataServices.titleArea"
                            :urlIco="designDataServices.urlIco"></Services>
                    </div>
                </div>

                <div class="flex flex-col md:px-4 sm:px-0 ">
                    <!--Column for DT-->
                    <div v-for="(service, index) in devDataServices.services" v-bind:key="index">
                        <Services :serviceTit="service" :area="devDataServices.titleArea"
                            :urlIco="devDataServices.urlIco">
                        </Services>
                    </div>
                </div>
                <div class="flex flex-col md:px-4 sm:px-0 ">
                    <!--Column for MARKETING-->
                    <div v-for="(service, index) in mkDataServices.services" v-bind:key="index">
                        <Services :serviceTit="service" :area="mkDataServices.titleArea"
                            :urlIco="mkDataServices.urlIco">
                        </Services>
                    </div>
                </div>
                <div class="flex flex-col md:px-4 sm:px-0 ">
                    <!--Column for AUDIOVISUAL PRODUCTION-->
                    <div v-for="(service, index) in prodDataServices.services" v-bind:key="index">
                        <Services :serviceTit="service" :area="prodDataServices.titleArea"
                            :urlIco="prodDataServices.urlIco">
                        </Services>
                    </div>
                </div>
            </div>

        </section>
        <section class="section-spacing">

            <div class="px-0 container-body md:px-6">
                <h2 class="text-[40px] font-bold text-center font-gilroy section-spacing">Over
                    <span class="text-[#ff5a5f]">+100</span>
                    Projects Made by Our Services, Web Design and Professional Logo Design Areas.
                </h2>
                <div class="flex flex-wrap md:flex-nowrap ">
                    <Description
                        classBtn="bg-indigo-500 transition-all duration-[0.3s] hover:bg-white text-white hover:text-black  outline-none"
                        class="lg:max-w-[50%] md:max-w-[50%]  pr-12" title="Digital Agency, All In One Place."
                        description="
            Lyonn Agency as a digital agency can take care of covering all the aspects to boost your business. Starting
            from the logo design and a creative branding until share you brand on social media.
            Lyonn can create all content following a creative digital advertising campaigns. We can help with the design
            and development of your own website, using many technologies like WordPress. Also we can provide you design
            of digital banners for websites or social media according to you brand." />
                    <ServicesTable class="h-fit md:h-[350px]  mt-12    xl:max-w-[59%] md:max-w-[66%]  " />
                </div>
            </div>
        </section>

        <CallToAction mainTitle="Don´t Lose The Opportunity To Grow Your Business!"
            subTitle="Get a 10% discount if you mention that you visited our page" class="space-bottom-section">
        </CallToAction>
        <Footer class="mb-5"></Footer>
    </div>
</template>

<script>
import BlueCircle from '~~/components/icons/BlueCircle'
import RedCircle from '~~/components/icons/RedCircle'
import HeaderMenu from '~~/components/layout/HeaderMenu'
import HeroCard from '~~/components/pages/home/HeroCard'
import MoreLink from '~~/components/common/MoreLink.vue'
import Services from '~~/components/pages/home/Services.vue'
import Description from '~~/components/pages/home/Description.vue'
import ServicesTable from '~~/components/pages/home/ServicesTable.vue'
import CallToAction from '~~/components/layout/CallToAction.vue'
import Footer from '~~/components/layout/Footer.vue'
import designIcon from "@/assets/img/ico/area-desing-simple.svg"
import mkIcon from "@/assets/img/ico/area-mk-simple.svg"
import prodIcon from "@/assets/img/ico/area-prod-simple.svg"
import devIcon from "@/assets/img/ico/area-dev-simple.svg"



export default {
    components: {
        BlueCircle,
        RedCircle,
        HeaderMenu,
        HeroCard,
        MoreLink,
        Services,
        Description,
        ServicesTable,
        CallToAction,
        Footer
    },
    data: function () {

        return {
            designDataServices: {
                titleArea: 'design',
                urlIco: designIcon,
                services: [

                    'Brand Design',
                    'Logo Design',
                    'Advertising Design'
                ]
            },
            devDataServices: {
                titleArea: 'dev',
                urlIco: devIcon,
                services: [
                    'Websites Ecommerce',
                    'Web Systems ',
                    'Systems Management'
                ]
            },
            mkDataServices: {
                titleArea: 'mk',
                urlIco: mkIcon,
                services: [
                    'Marketing Strategies',
                    'Social Media',
                    'Trademark Registration'
                ]
            },
            prodDataServices: {
                titleArea: 'prod',
                urlIco: prodIcon,
                services: [
                    'Commercial Spots',
                    'Motion Graphics',
                    'Product Photography'
                ]
            }
        }
    },

    setup() {


        return {}
    }
}
</script>

