<script>

export default {
    props: {
        title: String,
        imageString: String,
        //true = image to the left
        direction: Boolean,
    }
}
</script>


<template>
    <div :class="(direction ? 'imgArticleLeft' : 'imgArticleRight')" id="imgArticleContainer">
        <img src="../assets/images/house-1.jpg" alt="" id="imgArticle" class="maxWidth">
    </div>
    <div id="tableBackground" :id="(direction ? 'tableBackgroundLeft' : 'tableBackgroundRight')" class="zindex-top"
        :class="(direction ? 'articleLeft' : 'articleRight textRight')">

        <table class="eras-book" id="bigArticleTable">
            <tbody class="">
                <tr>
                    <td :rowspan="direction ? 2 : 1">


                        <div v-if="direction">
                            <img src="../assets/1x/GuideLine1.png" alt="" id="GuideLine">
                        </div>
                        <div v-if="!direction">
                            <h1 class="eras-bold white title">{{ title }}</h1>
                        </div>

                    </td>
                    <td class="leftpadding" :rowspan="direction ? 1 : 2">
                        <div v-if="direction">
                            <h1 class="eras-bold white title">{{ title }}</h1>

                        </div>
                        <div v-if="!direction">
                            <img src="../assets/1x/GuideLine1.png" alt="" id="GuideLine">

                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="leftpadding">
                        <p class="justify white">
                            <slot /> 
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

</template>

<style>
.zindex-top {
    position: relative;
    z-index: 5;
}

.title{
    font-size: 45px;
}


h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 35px;
}

.white{
    color: white;
}

.background-white {
    background-color: white;
}

.backgroud-green{
  background-color: #19897e;
}
.backgroud-green{
  background-color: #19897e;
}

.background-white * {
    background-color: white;
}

#GuideLine {
    width: 3vw;
}

#imgArticle {
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
}

.bigArticleTable {
    margin: 25px;
    z-index: 5;
    width: 100vw;
    height: 50vh;
}

#tableBackgroundRight {
    height: 50vh;
    width: 20vw;
    margin-bottom: -50vh;
}


#tableBackground {
  background-color: #19897e;
    border-radius: 25px;
}
</style>