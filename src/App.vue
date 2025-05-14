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
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/quotation">Quotation</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
body {
  font-family: 'Eras-bold';
}

main{
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

header {
  background-color: #19897e;
  height: 15vh;
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
  background-color: #499f49;
}

.b-radius {
  border-radius: 50px;
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
  width: 100%;
  height: 5vh;
  margin-top: -2.5vh;
  background-image: url(./assets/images/1x/header_backgroud.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
