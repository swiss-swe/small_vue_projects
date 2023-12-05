<template>
    <div class="container mx-auto">
        <div>
            <router-link to="/">Home</router-link>
        </div>
        <div>{{ singleProduct }}</div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProduct } from '../composables';

import { useRoute, useRouter } from 'vue-router';

const route = useRoute()

const {
    fetchSingleProduct,
    singleProduct
} = useProduct()

onMounted(() => {
   fetchSingleProduct(route?.params?.id);
})
</script>
