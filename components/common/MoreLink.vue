<template>
    <div>
        <a href="#" class="text-xl font-normal font-gilroy ">
            <p>{{ text }}</p>
        </a>
    </div>
</template>

<script>
export default {
    props: {
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