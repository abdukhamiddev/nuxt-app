<template>
    <div class="overflow-hidden">
        <HeaderMenu></HeaderMenu>
        <section class="hero">
            <div class="hero-sub">
                <BlueCircle />
            </div>
            <div>
                <div></div>
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

