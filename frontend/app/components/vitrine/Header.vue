<template>
    <div class="mt-3 flex items-center justify-between border-b-2 border-gray-300">
        <div class="flex gap-5 justify-start items-center">
            <div>
                <NuxtLink to="/">
                    <img src="/logoKoffiCOnseil.png" alt="logo" class="h-[200px] w-[200px]" />
                </NuxtLink>
            </div>
            <div>
                <nav>
                    <ul class="flex gap-5 text-3xl font-playfair font-normal">
                        <li>
                            <NuxtLink to="/">Accueil</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services">Services</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/equipes">Equipes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/publications">Publications</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="mr-[100px]">
            <button class="bg-[#0B132B] text-white px-6 py-2 rounded-lg text-lg font-playfair font-semibold">
                <nuxt-link to="/contact">Contact</nuxt-link>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts"></script>