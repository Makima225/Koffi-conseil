<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow">
            <slot />
        </main>
        <Footer />
    </div>
</template>
<script setup>
import Footer from '~/components/vitrine/Footer.vue';
import Header from '~/components/vitrine/Header.vue';

</script>