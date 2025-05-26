<script setup>
import 'vue3-carousel/carousel.css'
import BigArticle from '@/components/Article.vue'
import WhyUs from '@/components/WhyUs.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const carouselHomeConfig = {

    itemsToShow: 1,

    height: 500,
}
const carouselSplitConfig = {

    itemsToShow: 1,
}

const slidesHome = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    url: `../src/assets/images/artisan${index + 1}.jpg`,
}))
const slidesSplit = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    url: `../src/assets/images/meeting-${index + 1}.jpg`,
}))


</script>

<template>
    <div id="globalContainer">

        <Carousel v-bind="carouselHomeConfig" :pause-autoplay-on-hover="true" :mouse-drag="true" :touch-drag="true"
            :mouse-wheel="false" slide-effect="fade" :transition="1500" style="z-index: 0" :autoplay=2000
            wrap-around="">
            <Slide v-for="slide in slidesHome" :key="slide.id">
                <img :src="slide.url" alt="image" class="maxWidth">
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>


        <div id="subtitle">
            <h1 class="green">Regroupement d'artisans indépendants des métiers du bâtiment</h1>
        </div>

        <div class="littleText">
            <p class=" contentCentered grey eras-book italic">Besoin d'une prise ene charge ou d'accompagnement pour vos
                travaux
                ?</p>
        </div>
        <div class="bigText">
            <p class=" contentCentered green eras-bold">Devis pour vos travaux : pourquoi Savoie Isère Travaux ?</p>
        </div>
        <div class="littleText">
            <p class=" contentCentered grey eras-book italic">Nous nous engagons à vous rencontrer sous 48 heures suite
                à votre
                demande de devis</p>
        </div>


        <section id="homeArticle">

            <article class="bigArticle" id="firstSection">
                <BigArticle title="Pourquoi nous choisir ?" :direction="true">
                    <div style="display: flex; flex-wrap: wrap;">
                        <WhyUs title="Interlocuteur uniques">
                            <img src="../assets/images/answering-phone.png" alt="" class="icon b-radius">
                        </WhyUs>
                        <WhyUs title="Prestation de qualité">
                            <img src="../assets/images/hand-shake.png" alt="" class="icon b-radius">
                        </WhyUs>
                        <WhyUs title="À l'écoute">
                            <img src="../assets/images/headphone.png" alt="" class="icon b-radius">
                        </WhyUs>
                        <WhyUs title="Devis chiffré et précis">
                            <img src="../assets/images/papersheet.png" alt="" class="icon b-radius">
                        </WhyUs>
                    </div>
                    <div id="quotationButtonContainerWhyUs" class="contentRight ">
                        <RouterLink to="/quotation" id="quotationButton" class="autowidth  centerText hover ">
                            <div style="line-height: 10px;">
                                <h2 class="eras-bold" style="font-size: 25px;">Demande de devis</h2>
                                <h3 class="eras-book" style="font-size: 15px;">Présentez nous votre projet !</h3>
                            </div>
                        </RouterLink>
                    </div>
                </BigArticle>

            </article>

            <div class="littleText">
                <p class=" contentCentered grey eras-book italic">Nous sommes tous des artisans compétents et
                    éxperimentés,
                    passionnés par nos métiers. Nous nous impliquons avec vous autour de votre projet. </p>
            </div>

            <div id="splittedSection">

                <Carousel v-bind="carouselHomeConfig" :pause-autoplay-on-hover="true" :mouse-drag="false"
                    :touch-drag="false" :mouse-wheel="false" slide-effect="fade" :transition="1500" style="z-index: 0"
                    :autoplay=2000 wrap-around="">
                    <Slide v-for="slide in slidesSplit" :key="slide.id">
                        <img :src="slide.url" alt="image" class="halfWidth">
                    </Slide>

                    <template #addons>
                    </template>
                </Carousel>
                <div class="imgSlideSplit spaced">
                    <h1 class="green">Regroupement d'artisans</h1>
                    <p class="eras-book"> <span class="eras-bold">Nous sommes</span> des professionnels du bâtiments qui
                        s'impliquent avec vous : électricien, plombier,
                        maçon,
                        charpentier, carreleur, menuisier, cuisiniste ... unis autour de votre projet.
                    </p>
                    <p class="eras-book"> <span class="eras-bold">À vos côtés</span> pour vos envies, vos besoins, pour
                        vos
                        projets, pour vous.
                    </p>
                    <p class="eras-book"> <span class="eras-bold">Pour qui ?</span> Pour les particuliers, sociétés,
                        collectivités, commercants, artisans. <br> <strong>Aussi pour agence immobilières :</strong>
                        nous
                        intervenons : <br> - Soit pour la réalisation de devis tout corps de mérier en vu de
                        l'aquisition d'un
                        bien, <br>- Soit pour la remise en état d'un bien avant localisation, ou la remise en sécurité
                        électrique. <br><br>
                        Et pour toutes autres demandes.
                    </p>
                </div>

            </div>

            <article class="bigArticle" id="firstSection">
                <BigArticle title="Comment ça marche ? En 4 étapes :" :direction="false"
                    image-string="../assets/images/house">
                    <div style="font-size: 15px;">
                        <h2 class="eras-bold orange">1 - Contactez-nous</h2>
                        <p class="eras-book leftpadding">Vous aurez un interlocuteur unique, le responsable travaux :
                            Sylvain
                            Abela.</p>
                        <h2 class="eras-bold orange">2 - Prise de rendez-vous, évaluation de vos besoins</h2>
                        <p class="eras-book leftpadding">Nous prenons rendez vous sur place avec les corps de métier
                            concernés.
                        </p>
                        <h2 class="eras-bold orange">3 - Présentation de notre offre</h2>
                        <p class="eras-book leftpadding">Nous vous présentons notre offre chiffrée gratuitement et
                            rapidement.
                        </p>
                        <h2 class="eras-bold orange">4 - Commencement des travaux</h2>
                        <p class="eras-book leftpadding">Nous déterminerons ensemble une date des fins de travaux.</p>
                    </div>
                </BigArticle>

            </article>

            <div id="projetPresentationContainer">
                <RouterLink to="/quotation" id="projetPresentationButton" class="autowidth b-radius centerText hover">
                    <div style="line-height: 10px;">
                        <h2 class="eras-bold" style="font-size: 25px;">Demande de devis</h2>
                        <h3 class="eras-book" style="font-size: 15px;">Présentez nous votre projet !</h3>
                    </div>
                </RouterLink>
            </div>

            <article class="bigArticle" id="firstSection">
                <BigArticle title="Qui sommes nous ?" :direction="true" image-string="../assets/images/house">
                    <p style="font-size: 15px;">
                        Nous sommes un collectif d'artisans passionnés, unis par une même volonté : valoriser le
                        savoir-faire
                        local et proposer des prestations de qualité, authentiques et durables. Chacun d'entre nous est
                        spécialisé dans son métier — menuisier, électricien, plombier, peintre, maçon, carreleur, et
                        bien
                        d'autres encore — mais nous partageons tous la même exigence : le travail bien fait.<br /><br />
                        Nous garantissons des tarifs compétitifs, le respect des délais, tout en conservant une qualité
                        tenue au
                        maximum.
                        Notre regroupement est né de l'envie de travailler ensemble, en confiance, pour offrir à nos
                        clients un
                        service complet, réactif et humain. En mutualisant nos compétences et nos ressources, nous
                        pouvons
                        intervenir sur des projets variés, allant de la rénovation complète d'un logement à des
                        réalisations
                        plus ciblées, toujours avec le même engagement.

                    </p>
                </BigArticle>

            </article>
            <article class="bigArticle" id="firstSection">
                <BigArticle title="Nos engagements :" :direction="false">
                    <h2>Rapidité</h2>
                    <p>Nous nous engageons à traiter votre demande dans des délais clair et à partir du moment ou nous
                        la
                        recevons et celui ou vous ètes contacté.</p>
                    <h2>Expérience</h2>
                    <p>Nous travaillons avec de bons résultats depuis de nombreuses années, nous vous feront profiter de
                        notre
                        expérience. Nous collaborons avec tous les corps de métier présent sur le chantier.</p>
                    <h2>Compétence</h2>
                    <p>nous sommes tous des professionnels du bâtiment, nos formations, nos expériences, vous
                        garantiront le bon
                        déroulement du chantier jusqu'a sa réception.</p>
                    <h2>Tarifs</h2>
                    <p>nous vous proposons des prix étudiés et compétitfs. Nos devis sont clairs et détaillés.</p>
                    <h2>Disponibilité</h2>
                    <p>nous restons disponible, pour tout chantier ouvert. Nous sommes facilement joignable, nous vous
                        tenons
                        informé pendant la durée des travaux.</p>
                </BigArticle>

            </article>

            <article id="secteur"></article>

            <!-- <article class="contentCentered column" id="articleServices">
                <h2 class="white" style="font-size: 35px;">Nos services :</h2>

                <p class="white eras-book" style="font-size: 15px;">


                    Nous prenons vos devis et projet de construction, quel que soit le domaine de compétence requis.
                    Vous
                    serez mis
                    en relation rapidement avec un expert du bâtiment, Sylvain Abéla, qui sera là pour prendre en charge
                    toute vos
                    demandes.
                </p>

                <div id="quotationButtonContainer" class="contentCentered ">
                    <RouterLink to="/quotation" id="quotationButton" class="autowidth  centerText hover ">
                        <div style="line-height: 10px;">
                            <h2 class="eras-bold" style="font-size: 25px;">Demande de devis</h2>
                            <h3 class="eras-book" style="font-size: 15px;">Présentez nous votre projet !</h3>
                        </div>
                    </RouterLink>
                </div>


            </article> -->


        </section>
    </div>

</template>

<style>
:root {
    background-color: #242424;
}

.orange {
    color: orange;
}

.italic {
    font-style: italic;

}

.littleText * {
    font-size: 15px;

}

.contentRight {
    display: flex;
    justify-content: right;
}

.bigText * {
    font-size: 35px;

}

.spaced {
    padding: 25px;
}

.icon {
    background-color: orange;
    padding: 5px;
    width: 50px;
    height: 50px;
    margin: 10px;
}

.underline {
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

.maxWidth {
    width: 100%;
}

.halfWidth {
    width: 50vw;
}

#splittedSection {
    display: flex;
    flex-direction: row;
}

#articleServices {
    margin-left: 20vw;
    margin-right: 20vw;
    margin-top: 20vh;
    margin-bottom: 20vh;
    padding: 75px;
    background-color: #19897e;
    border-radius: 35px;
}

.grey {
    color: grey;
}

#littleText {

    justify-content: center;

}

#quotationButtonContainer {
    display: inline-flex;
}

#quotationButton {
    padding: 15px;
    border-radius: 200px;
    background-color: white;
}

#quotationButtonContainerWhyUs {
    margin-left: 0;
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
    margin-bottom: 130px;
}

#subtitle * {

    font-size: 25px;
}

#homeArticle {
    margin-top: 135px;
}

#projetPresentationContainer {
    width: 300px;
    z-index: 3;
    margin-left: 40vw;
}

#projetPresentationButton {

    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center  ;
    background-color: #19897e;
    color: white;
    padding: 15px;
    border-radius: 250;
}
</style>
