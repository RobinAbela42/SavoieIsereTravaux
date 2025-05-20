<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
    <div id="headerContainer" class="littlePadding horizontal">
      <RouterLink to="/" id="logo1Container">
        <img src="./assets/images/Logo-without-text-1.svg" alt="SIT_logo" id="logo-1">
      </RouterLink>
      <div class="centerText">
        <h1>Savoie Isère travaux</h1>
      </div>
      <RouterLink to="/contact" id="contactButton" class="b-radius lightgreen hover">
        Contact
      </RouterLink>
    </div>
    <div id="afterHeader"></div>

    <div>
      <nav id="navigationHome" class="horizontal">
        <RouterLink to="/" class="centerText autowidth b-radius menu1">Home</RouterLink>
        <RouterLink to="/quotation" class="centerText autowidth b-radius menu2">Demande de devis </RouterLink>
        <RouterLink to="/location" class="centerText autowidth b-radius menu3">Notre secteur</RouterLink>
        <RouterLink to="/contact" class="centerText autowidth b-radius menu4">Contactez-nous </RouterLink>
      </nav>
    </div>

    <div id="projetPresentationContainer">
      <RouterLink to="/quotation" id="projetPresentationButton" class="autowidth b-radius centerText hover">
        <div style="line-height: 10px;">
          <h2 class="eras-bold" style="font-size: 25px;">Demande de devis</h2>
          <h3 class="eras-book" style="font-size: 15px;">Présentez nous votre projet !</h3>
        </div>
      </RouterLink>
    </div>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer>
    © Copyright
    <a href="https://www.flaticon.com/fr/icones-gratuites/centre-dappels" title="centre d'appels icônes">Centre d'appels
      icônes créées par Irfansusanto20 - Flaticon</a>
    <a href="https://www.flaticon.com/fr/icones-gratuites/equipe" title="équipe icônes">Équipe icônes créées par Freepik
      - Flaticon</a>
  </footer>
</template>

<style scoped>
body {
  font-family: 'Eras-bold';
  z-index: 2;
}

main {
  display: flex;
  justify-content: center;
}

header {
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

.b-radius {
  border-radius: 500px;
}

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
  height: 5vw;
  width: 5vw;
  border-radius: 250;
}

#headerContainer {

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


#logo-1 {
  width: 100%;
  height: 100%;
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
  margin-top: 25px;
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
