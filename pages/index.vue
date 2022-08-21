<template>
    <div class="overflow-hidden">
        <HeaderMenu></HeaderMenu>
        <section class="hero">
            <div class="hero-sub">
                <!-- <BlueCircle /> -->
            </div>
            <div>
                <div>

                    <h1 class='text-6xl font-baysoir'>Boysoir</h1>
                    <br>
                    <h2 class="pt-6 text-6xl font-gilroy">Gilroy</h2>
                    <h2 class="text-6xl">Simple</h2>
                    <br>
                    <h3 class="text-6xl font-boston">Boston</h3>
                </div>
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

