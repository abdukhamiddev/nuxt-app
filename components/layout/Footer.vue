<template>
    <footer>
        <div class="grid grid-cols-1 px-6 lg:grid-cols-4 container-body md:grid-cols-3">
            <div class="max-w-full h-fit sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                <h3 class="mb-0 font-semibold font-gilroy font-base title-area-footer "
                    @click="expandMenuFooter('services')">

                    Services
                </h3>
                <ul ref="services" class="font-semibold font-gilroy list-footer under-line">
                    <li>
                        <nuxt-link to="#">Logo Design In Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Brand Design In Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Websites In Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">E-commerce In Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Digital Platforms in Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Digital Businesses in Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Trademark Registration in Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">(E.R.P.) In Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Mobile Applications In Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Digital Marketing In Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Social Media In Morelia</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Videos & Spots In Morelia</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="h-fit">
                <h3 class="mb-0 font-semibold font-gilroy font-base title-area-footer"
                    @click="expandMenuFooter('support')">
                    <!--          support-->
                    Support
                </h3>
                <ul ref="support" class="font-semibold font-gilroy list-footer under-line">
                    <li>
                        <nuxt-link to="#">License</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Consultancy</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Sales</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Resources</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Blog</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">FAQ</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Conferences & Courses</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Support</nuxt-link>
                    </li>
                </ul>
                <h3 class="mb-0 font-semibold font-gilroy font-base title-area-footer"
                    @click="expandMenuFooter('terms')">

                    Terms & Conditions
                </h3>
                <ul ref="terms" class="font-semibold font-gilroy list-footer under-line">
                    <li>
                        <nuxt-link to="#">Terms of Service</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Data Privacy</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-4 col-lg-2 h-fit">
                <h3 class="mb-0 text-base font-semibold font-gilroy title-area-footer"
                    @click="expandMenuFooter('agency')">

                    Agency
                </h3>
                <ul ref="agency" class="font-semibold font-gilroy list-footer under-line">
                    <li>
                        <nuxt-link to="#">

                            About Us
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to=" #">Work</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Contact</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">Alliances</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">

                            Lyonn Shareholder
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">

                            Lyonn for you
                        </nuxt-link>
                    </li>
                    <li>
                        <a href="https://lyonnagency.com" target="_blank">Digital Agency - Lyonn Agency</a>
                    </li>
                </ul>
                <h3 class="mb-0 text-base font-semibold font-gilroy title-area-footer"
                    @click="expandMenuFooter('areas')">

                    Areas
                </h3>
                <ul ref="areas" class="font-semibold font-gilroy list-footer under-line ">
                    <li>
                        <nuxt-link to="#">

                            Graphic Design
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">

                            Web Development
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">

                            Digital Marketing
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#">

                            Audiovisual Production
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="mt-6 w-max-full lg:mt-0 h-fit md:mx-auto">
                <div>
                    <h3 class="text-base font-semibold font-gilroy md:text-lg text-sm-center lg:text-left">

                        Sign Up To Our Newsletter
                    </h3>
                    <p class="text-sm font-light font-gilroy sm:text-center lg:text-left">

                        The latest news, promotions, articles and resources from Lyonn,
                        delivered directly to y#ox each month.
                    </p>
                </div>
                <div class="mt-4 mt-sm-5">
                    <div class="flex flex-wrap align-items-center">
                        <div class="flex px-0 w-max-full align-items-center sm:justify-center lg:justify-start">

                            <input v-model="singleEmail" type="text"
                                class="border-[1px] border-black rounded-[20px] px-4 mr-4" placeholder="Your Email" />


                            <button class="btn-round"></button>
                        </div>
                        <br />
                        <span class="px-0 font-gilroy fw-300 fs-14 w-max-full">{{ messageStatus }}</span>
                    </div>
                </div>

                <div class="flex mt-5 sm:justify-center lg:justify-start gap-x-4 ">
                    <a href="#">
                        <img class="w-6 h-6 transition-opacity duration-75 opacity-50 hover:opacity-90"
                            src="~/assets/img/ico/social-facebook.svg" alt="Facebook Lyonn Agency" />
                    </a>
                    <a href="#">
                        <img class="w-6 h-6 transition-opacity duration-75 opacity-50 hover:opacity-90"
                            src="~/assets/img/ico/social-instagram.svg" alt="Instagram Lyonn Agency" />
                    </a>
                    <a href="#">
                        <img class="w-6 h-6 transition-opacity duration-75 opacity-50 hover:opacity-90"
                            src="~/assets/img/ico/social-twitter.svg" alt="Twitter Lyonn Agency" />
                    </a>
                    <a href="#">
                        <img class="w-6 h-6 transition-opacity duration-75 opacity-50 hover:opacity-90"
                            src="~/assets/img/ico/social-behance.svg" alt="Behance Lyonn Agency" />
                    </a>
                    <a href="#">
                        <img class="w-6 h-6 transition-opacity duration-75 opacity-50 hover:opacity-90"
                            src="~/assets/img/ico/social-dribbble.svg" alt="Facebook Lyonn Agency" />
                    </a>
                </div>
                <div class="mt-4 lg:hidden">
                    <p class="text-center font-semisemibold mt-8text-base font-gilroy lg:text-left ">
                        Lyonn Agency © {{ year }} All Rights Reserved
                    </p>
                </div>
            </div>
            <div class="justify-center hidden col-start-1 col-end-5 lg:flex">
                <div class="flex justify-center px-auto">
                    <p class="mt-5 text-center font-semisemibold font-gilroy font-lg ">
                        Lyonn Agency © {{ year }} All Rights Reserved. Lyonn Agency ® <br> is a brand own by Lyonn
                        Company
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    created() {
        var d = new Date();
        this.year = d.getFullYear();
    },

    methods: {


        expandMenuFooter(refList) {
            console.log(this.$refs);
            if (this.$refs[refList].style.maxHeight) {
                this.$refs[refList].style.maxHeight = null;
                this.$refs[refList].previousElementSibling.classList.remove('expanded');
            } else {
                this.$refs[refList].style.maxHeight = this.$refs[refList].scrollHeight + 'px';
                this.$refs[refList].previousElementSibling.classList.add('expanded');
            }
        },
    },

    data() {
        return {
            singleEmail: '',
            mailStatus: 'invalid-input',
            emailSent: false,
            messageStatus: '',
            year: ''
        }
    }
}
</script>

<style>
</style>
