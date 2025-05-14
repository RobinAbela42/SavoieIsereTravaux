<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div id="headerContainer" class="littlePadding horizontal">
      <RouterLink to="/" id="logo1Container">
        <img src="./assets/images/Logo-without-text-1.svg" alt="SIT_logo" id="logo-1">

      </RouterLink>
      <h1>Savoie Isère travaux</h1>
      <div id="contactButton" class="b-radius lightgreen">
        Contact
      </div>
    </div>
    <div id="afterHeader"></div>

    <div>
      <nav id="navigationHome">
        <RouterLink to="/" id="navigationItem" class="autowidth b-radius">Home</RouterLink>
        <RouterLink to="/quotation" id="navigationItem" class="autowidth b-radius">Devis</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer>
    © Copyright
  </footer>
</template>

<style scoped>
body {
  font-family: 'Eras-bold';
  z-index: 2;
}

main{
  display: flex;
  justify-content: center;
}

header {
  height: 15vh;
}

footer{
  color: white;
  text-align: center;
  background-color: black;
  height: 25vh;
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

.autowidth{
  width: auto;
  height: auto;
}

#navigationHome{
  position: absolute;
  margin: 15px;
  z-index: 3;
}

#navigationHome *{
  align-items: center;
  justify-content: center;
  display: flex ;
 background-color: #19897e;
 color: white;
 margin: 10px;
 height: 5vw;
 width: 5vw;
 border-radius:250;
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
  background-image: url(./assets/images/1x/header_backgroud.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index:3;
}

#logo1Container {
  height: 50%;
  width: 50px;
  margin-left: 0;
  margin-top: 0;

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



#contactButton:hover {
  transition: 0.05s ease-in-out;
  scale: 1.1;
}
</style>
