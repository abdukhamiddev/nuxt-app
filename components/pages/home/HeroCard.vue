<template>
    <div
        class="cursor-pointer  h-60 rounded-[30px] transition-shadow duration-[0.3s] ease-linear hover:shadow-[0_0_80px_3px_rgba(204,204,204,.3)]">
        <div class="flex flex-col items-center px-6 py-6 text-center">
            <img class="w-12 h-12 " :src="imageUrl" alt="">
            <h2 class="pr-6 mt-6 text-xl font-semibold font-gilroy">{{ text }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: {

        },
        text: {
            type: String
        }
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>