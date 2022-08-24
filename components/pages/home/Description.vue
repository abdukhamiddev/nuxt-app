<template>
    <div class="text-center sm:text-left ">
        <h3 :class="classColor" class="pb-12 text-3xl font-bold text-indigo-600 font-gilroy">{{ title }}</h3>
        <p class="md:text-sm lg:text-base font-boston ">{{ description }}</p>
        <button :class="classBtn"></button>
    </div>
</template>

<script>


export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        btnText: {
            type: String,
            default: ''
        },
        classColor: {
            type: String,
            default: ''
        },
        classBtn: {
            type: String,
            default: ''
        }
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>