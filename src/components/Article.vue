<script>

export default {
    props: {
        title: String,
        message: String,
        direction: Boolean,
    }
}
</script>


<template>
    <!-- <div class="imgArticle" :class="(direction ? 'imgArticleLeft' : 'imgArticleRight')" id="imgArticleContainer">
        <img src="../assets/images/tool.jpg" alt="" id="imgArticle">
    </div> -->
    <table class="eras-book backgroud-white" id="bigArticleTable" :class="(direction ? 'articleLeft' : 'articleRight textRight')">
        <tbody>
            <tr>
                <td :rowspan="direction ? 2 : 1">


                    <div v-if="direction">
                        <img src="../assets/1x/GuideLine1.png" alt="" id="GuideLine">
                    </div>
                    <div v-if="!direction">
                        <h1 class="eras-bold green">{{ title }}</h1>
                    </div>

                </td>
                <td class="leftpadding" :rowspan="direction ? 1 : 2">
                    <div v-if="direction">
                        <h1 class="eras-bold green">{{ title }}</h1>

                    </div>
                    <div v-if="!direction">
                        <img src="../assets/1x/GuideLine1.png" alt="" id="GuideLine">

                    </div>
                </td>
            </tr>
            <tr>
                <td class="leftpadding">
                    <p class="justify">
                        {{ message }}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>


</template>

<style>
.zindex-top {
    z-index: 5;
}

h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 35px;
}

.background-white {
    background-color: white;
}

#GuideLine {
    width: 3vw;
}

.imgArticle {
    z-index: 0;
    width: 25vw;
}

.bigArticleTable{
  z-index: 5;
}
</style>