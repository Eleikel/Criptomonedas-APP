<template>
    <div>
        <div :class="'flex flex-col justify-center items-center'">
            <grid-loader :loading="isLoading" :color="'#68d391'" :size="85" />
        </div>

        <px-assets-table v-if="!isLoading" :assets="assets" />
    </div>
</template>


<script>
import Api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable.vue'


export default {
    name: 'Home',
    components: { PxAssetsTable },

    data() {
        return {
            assets: [], //esto se va a llenar de lo que venga del api
            isLoading: false,
            interval: null // Refrescar o Actualizar precios de Coins
        }
    },

    created() {
        this.isLoading = true;

        Api.getAssets()
            .then(assets => (this.assets = assets))
            .finally(() => this.isLoading = false);

        this.refreshFetch();
    },

    methods: {
        refreshFetch() {
            this.interval = setInterval(async () => {
                this.assets = await Api.getAssets();
            }, 10000)
        }
    },

    beforeDestroy() {
        clearInterval(this.interval); //Esto evita memory leaks
    }
}
</script>