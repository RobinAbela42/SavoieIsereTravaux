<script setup>
import 'vue3-carousel/carousel.css'
import { RouterLink, RouterView } from 'vue-router';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const carouselHomeConfig = {

  itemsToShow: 1,

  height: 500,
}

const slidesHome = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  url: `../src/assets/images/artisan${index + 1}.jpg`,
}))

function scrollToSection() {
  const section = document.getElementById('secteur')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<template>
  <header>
    <div id="headerContainer" class="littlePadding horizontal">
      <RouterLink to="/" id="logo1Container">
        <img src="./assets/images/SIT-1-without-text.svg" alt="SIT_logo" id="logo-1">
      </RouterLink>
      <div class="centerText">
        <h1>Savoie Isère travaux</h1>
      </div>
      <RouterLink to="/contact" id="contactButton" class="b-radius lightgreen hover"
        :class="($route.path === '/contact') ? 'hide' : 'show'">
        Contact
      </RouterLink>
    </div>
    <div id="afterHeader"></div>

    <div>
      <nav id="navigationHome" class="horizontal">
        <RouterLink to="/" class="centerText autowidth b-radius menu1">Home</RouterLink>
        <RouterLink to="/quotation" class="centerText autowidth b-radius menu2" v-if="!($route.path === '/quotation')">
          Demande de devis </RouterLink>
        <a @click.prevent="scrollToSection" class="centerText autowidth b-radius menu3 transition"
          v-if="$route.path === '/'">Notre
          secteur</a>
        <!-- <RouterLink to="#secteur" class="centerText autowidth b-radius menu3">Notre secteur</RouterLink> -->
        <RouterLink to="/contact" class="centerText autowidth b-radius menu4" v-if="!($route.path === '/contact')">
          Contactez-nous </RouterLink>
      </nav>
    </div>

    <div id="projetPresentationContainer" v-if="!($route.path === '/quotation')">
      <RouterLink to="/quotation" id="projetPresentationButton" class="autowidth b-radius centerText hover">
        <div style="line-height: 10px;">
          <h2 class="eras-bold" style="font-size: 25px;">Demande de devis</h2>
          <h3 class="eras-book" style="font-size: 15px;">Présentez nous votre projet !</h3>
        </div>
      </RouterLink>
    </div>
    <div class="carouselContainer">
      <Carousel v-bind="carouselHomeConfig" :pause-autoplay-on-hover="false" :mouse-drag="true" :touch-drag="true"
        :mouse-wheel="false" slide-effect="fade" :transition="1500" style="z-index: 0" :autoplay=2000 wrap-around="">
        <Slide v-for="slide in slidesHome" :key="slide.id">
          <img :src="slide.url" alt="image" class="maxWidth">
        </Slide>

        <template #addons>
          <Pagination />
          <!-- <Navigation /> -->
        </template>
      </Carousel>



    </div>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer>
    <table id="footerTable">
      <thead>
        <tr>
          <td colspan="9"> © Copyright
            <a href="https://www.flaticon.com/fr/icones-gratuites/centre-dappels" title="centre d'appels icônes">Centre
              d'appels
              icônes créées par Irfansusanto20 - Flaticon</a>
            <a href="https://www.flaticon.com/fr/icones-gratuites/equipe" title="équipe icônes">Équipe icônes créées par
              Freepik
              - Flaticon</a>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <RouterLink to="/">Home</RouterLink>
          </td>
          <td>
            <RouterLink to="/mentionslegales">Mentions légales</RouterLink>
          </td>
        </tr>
        <tr>
          <td>
            <RouterLink to="/quotation">Devis</RouterLink>
          </td>
          <td>
            <RouterLink to="/politiquedeconfidentialite">Politique de confidentialité</RouterLink>
          </td>

        </tr>
        <tr>

          <td>
            <RouterLink to="/contact">Contact</RouterLink>
          </td>
          <td>

          </td>
        </tr>

      </tbody>
    </table>

  </footer>
</template>

<style scoped>
#footerTable {
  width: 100%;
  color: white;
}

#footerTable tbody tr td * {

  color: white;
}

#footerTable tbody tr td {
  padding: 15px;
  color: white;
}




.carouselContainer {
  margin-top: -10px;
}

body {

  transition: ease 1s;
  font-family: 'Eras-bold';
  z-index: 2;
}

main {
  display: flex;
  flex-direction: column;

  padding: 50px;
}

.headerContainer {
  height: 15vh;
}

footer {
  color: white;
  text-align: center;
  background-color: black;
  height: 25vh;
}



.menu2 {
  transform: translateY(-5px);
}

.menu3 {
  transform: translateY(-9px);
}

.menu4 {
  transform: translateY(-13px);
}

.menu1:hover {
  transform: scale(1.2) translateY(5px);
}

.menu2:hover {
  transform: scale(1.2) translateY(5px);
}

.menu3:hover {
  transform: scale(1.2) translateY(5px);
}

.menu4:hover {
  transform: scale(1.2) translateY(5px);
}


.horizontal {
  display: flex;
  flex-direction: row;
}

.littlePadding {
  height: 100%;
  margin: 10px;
}

.lightgreen {
  background-color: #19897e;
}


footer table {
  border-collapse: collapse;
}

/* footer table td {
  border: 1px solid white;
}

footer table tr:first-child td {
  border-top: 0;
}

footer table tr:last-child td {
  border-bottom: 0;
}

footer table tr td:first-child,
footer table tr th:first-child {
  border-left: 0;
}

footer table tr td:last-child,
footer table tr th:last-child {
  border-right: 0;
} */


.autowidth {
  width: auto;
  height: auto;
}



.centerText {
  text-align: center;
}

#navigationHome {
  position: absolute;
  margin: 15px;
  z-index: 3;
}

#navigationHome * {
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #19897e;
  color: white;
  margin: 10px;
  height: 80px;
  width: 80px;
  border-radius: 250;
}

#headerContainer {
  height: 15vh;
  align-items: center;
  justify-content: center;
}

#headerContainer * {
  margin-left: auto;
  margin-right: auto;
}

#afterHeader {
  position: relative;
  width: 100%;
  height: 5vh;
  margin-top: -4vh;
  background-image: url(./assets/1x/header_backgroud.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 3;
}

#logo1Container {
  width: 80px;
  margin-left: 0;
  margin-top: -25px;

}



#contactButton {
  text-align: center;
  color: white;
  height: 20%;
  width: 100px;
  line-height: 150%;
  margin-right: 0;
}

#projetPresentationContainer {
  margin: 10px;
  position: absolute;
  right: 15px;
  z-index: 3;
}

#projetPresentationButton {

  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #19897e;
  color: white;
  padding: 15px;
  height: auto;
  width: auto;
  border-radius: 250;
}
</style>
