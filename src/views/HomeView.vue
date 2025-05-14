<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
    
    itemsToShow: 1,
    
    height: 500,
}

const slides = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  url: `../src/assets/images/artisan${index+1}.jpg`,
}))
</script>

<template>

    <Carousel v-bind="carouselConfig" :pause-autoplay-on-hover="true" :mouse-drag="true"
        :touch-drag="true" :mouse-wheel="{ threshold: 20 }" :transition="500" style="z-index: 0">
        <Slide v-for="slide in slides" :key="slide.id">
            <img :src="slide.url" alt="image">
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>

</template>

<style>


:root {
  background-color: #242424;
}

.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  width: 100%;
}
</style>
