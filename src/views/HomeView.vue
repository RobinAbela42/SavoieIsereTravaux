<script setup>
import 'vue3-carousel/carousel.css'
import BigArticle from '@/components/Article.vue'
import WhyUs from '@/components/WhyUs.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const carouselConfig = {

    itemsToShow: 1,

    height: 500,
}

const slides = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    url: `../src/assets/images/artisan${index + 1}.jpg`,
}))



</script>

<template>
    <div id="globalContainer">

        <Carousel v-bind="carouselConfig" :pause-autoplay-on-hover="true" :mouse-drag="true" :touch-drag="true"
            :mouse-wheel="{ threshold: 20 }" :transition="500" style="z-index: 0" :autoplay=5000 wrap-around="">
            <Slide v-for="slide in slides" :key="slide.id">
                <img :src="slide.url" alt="image">
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>


        <div id="subtitle">
            <h1 class="green">Regroupement d'artisans indépendants des métiers du bâtiment</h1>
        </div>


        <section id="homeArticle">
            <article class="bigArticle" id="firstSection">
                <BigArticle title="Qui sommes nous ?" message="Nous sommes un regroupement d'artisants, tous adhérents à notre ''charte qualité des artisans du Rhône Alpes''. Cette charte vous garantie
entre autre, des prestations de qualité, des tarifs compétitifs,
le respect des délais" :direction="true"></BigArticle>

            </article>
            <article class="contentCentered" id="firstSection">
                <BigArticle title="Nos engagements :"
                    message="Nous nous engagons à founrir des services dans les plus court délai, dès récéption de la demande jusqu'à la fin de votre projet. Les prestations se doivent d'être de qualité, avec les meilleurs matériaux et des outils exclusivement professionnel."
                    :direction="false"></BigArticle>

            </article>

            <article class="contentCentered">
                <WhyUs></WhyUs>

            </article>
        </section>
    </div>

</template>

<style>
:root {
    background-color: #242424;
}

.contentCentered {
    display: flex;
    justify-content: center;
    text-align: center;

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



#globalContainer {
    display: flex;
    flex-direction: column;
}

#subtitle {
    background-color: white;
    width: 40vw;
    margin: 5px;
    text-align: center;
    border-radius: 20px;
    z-index: 5;
    margin-top: -130px;
    margin-left: 50px;
}

#subtitle *{

    font-size: 25px;
}
</style>
