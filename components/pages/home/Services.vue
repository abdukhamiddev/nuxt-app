<template>
    <div class="rounded-[30px] justify-evenly py-6 my-4 cursor-pointer px-12" :class="'color-' + area + '-hover'">
        <div class="flex items-center justify-between">
            <div class="pr-6 ">
                <img class="w-5 h-5" :src="urlIco" alt="Services Icon">
            </div>
            <div class="w-[50%]">
                <h3 class="text-lg font-medium font-gilroy" v-html="splitService"></h3>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "home-services",
    props: {
        urlIco: {
        },
        serviceTit: {
            type: String,
            default: 'Diseño de marcas'
        },
        area: {
            type: String,
            default: 'design'
        }
    },

    computed: {
        splitService() {
            let newWord = ''
            let splited = this.serviceTit.split(' ')
            // console.log(splited)
            splited.forEach((word, index) => {
                newWord += ' '
                if (index > 0 & index < 2) {
                    newWord += '<br/>';
                }
                newWord += word;
            });
            return newWord
            console.log(newWord)
        }
    },
    data() {
        const baseUrl = '~/assets/img/ico/'
        return { baseUrl }
    },
    mounted() {
        //this.splitService()
    }
}
</script>

<style scoped>
</style>
