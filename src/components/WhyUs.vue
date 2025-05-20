<script>


export default {
    props: {

    }
}
</script>


<template>

    <table class="cardContainer">
        <thead>
            <tr>
                <td colspan="255">
                    <h1 class="eras-book">
                        Pourquoi nous ?
                    </h1>
                </td>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>
                    <div class="card mediumSize row">
                        <img src="../assets/images/anwsering-phone.png" alt="image" class="icon">
                        <div>
                            Appels uniques
                        </div>
                    </div>
                </td>
                <td>
                    <div class="card mediumSize row">
                        <img src="../assets/images/hand-shake.png" alt="image" class="icon">
                        <div>
                            Qualitée
                        </div>
                    </div>
                </td>
                <td>
                    <div class="card mediumSize row">
                        <img src="../assets/images/papersheet.png" alt="image" class="icon">
                        <div>
                            <h2 class="eras-bold littleTitle">
                                Devis négocié (à changer)

                            </h2>
                            <p class="eras-book littleText">
                                Nos devis sont d'une qualité irreprochables

                            </p>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="card mediumSize row">
                        <img src="../assets/images/headphone.png" alt="image" class="icon">
                        <div>
                            La qualité
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>

    </table>

</template>

<style>
.icon {
    width: 60px;
    margin: 10px;
}

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
    background: radial-gradient(ellipse at top left, #c2e0da,#e0eceb), radial-gradient(ellipse at bottom, #19897e,#19897e);
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
    border-radius: 5px;
    margin: 20px;
    box-shadow: black -5px 5px 2px;
}


</style>