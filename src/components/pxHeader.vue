<template>
    <header class="shadow w-screen">
        <nav>
            <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <px-icon />
                    <router-link class="font-semibold text-xl tracking-tight" :to="{name : 'home'}">Platzi Exchange
                    </router-link>
                </div>

                <div class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto">
                    <div class="text-sm lg:flex-grow">
                        <router-link v-for="l in links" :key="l.title" :to="l.to"
                            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            {{l.title}}
                        </router-link>
                    </div>
                </div>
            </nav>
        </nav>
    </header>
</template>


<script>

import pxIcon from '@/components/pxIcon.vue'

export default {
    components: { pxIcon },
    name: 'pxHeader',

    props: {
        links: {
            type: Array,
            default: () => [],
        }
    }

}
</script>