<script>


export default {
    props: {
        title:String,
        description:String,
    }
}
</script>


<template>

    <div class="row">
        <div> 
            <slot/>
        </div>
        <div class="column" id="whyUsTitleContainer" style="line-height: 0px;">
            <h2>
                {{ title }}
            </h2>
            <p v-if="description">
                {{ description }}
            </p>
        </div>
    </div>

</template>

<style>


.littleTitle{
    font-size: 16px;
}

.littleText{
    font-size: 13px;
}

.cardContainer {
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    width: 15vw;
    background-color: #5adccf;
    /* background: radial-gradient(ellipse at top left, #19897e,#1eb5a6), radial-gradient(ellipse at bottom, #19897e,#19897e); */
    border-radius: 15px;
    margin: 20px;
    width: 80vw;
    height: 20vh;
}

.cardContainer tbody tr td {
    justify-content: center;
}

.card {
    align-items: center;
    width: 15vw;
    height: 15vh;
    background-image: radial-gradient(ellipse at top right, #1fb0a2,#19897e);
    border-radius: 25px;
    margin: 20px;
}

#whyUsTitleContainer{
    align-self: center;
}


</style>