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
            :mouse-wheel="false" slide-effect="fade" :transition="1500" style="z-index: 0" :autoplay=5000
            wrap-around="">
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
                <BigArticle title="Qui sommes nous ?" message="Nous sommes un regroupement d'artisants, tous adhérents à notre charte qualité des artisans du Rhône Alpes. Cette charte vous garantie
entre autre, des prestations de qualité, des tarifs compétitifs,
le respect des délais" :direction="true"></BigArticle>

            </article>
            <article class="bigArticle" id="firstSection">
                <BigArticle title="Nos engagements :"
                    message="Nous nous engagons à founrir des services dans les plus court délai, dès récéption de la demande jusqu'à la fin de votre projet. Les prestations se doivent d'être de qualité, avec les meilleurs matériaux et des outils exclusivement professionnel."
                    :direction="false"></BigArticle>

            </article>

            <article class="contentCentered column" id="articleServices">
                <h2 class="white" style="font-size: 35px;">Nos services :</h2>

                <p class="white eras-book" style="font-size: 15px;">


                    Nous prenons vos devis et projet de construction, quel que soit le domaine de compétence requis. Vous
                    serez mis
                    en relation rapidement avec un expert du bâtiment, Sylvain Abéla, qui sera là pour prendre en charge
                    toute vos
                    demandes.
                </p>

                <div id="quotationButtonContainer" class="contentCentered">
                    <RouterLink to="/quotation" id="quotationButton"
                        class="autowidth  centerText hover">
                        <div style="line-height: 10px;">
                            <h2 class="eras-bold underline" style="font-size: 25px;">Demande de devis</h2>
                            <h3 class="eras-book" style="font-size: 15px;">Présentez nous votre projet !</h3>
                        </div>
                    </RouterLink>
                </div>


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

.underline{
    text-decoration: underline;
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

#articleServices{
    margin-left: 20vw;
    margin-right: 20vw;
    margin-top: 20vh;
    margin-bottom: 20vh;
padding: 75px;
    background-color: #19897e;
}

#quotationButtonContainer{
    display:inline-flex;
}

#quotationButton{
    width: 20vw;
    border-radius:20px ;
    background-color: #19897e;
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

#subtitle * {

    font-size: 25px;
}

#homeArticle {
    margin-top: 130px;
}

</style>
