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
                            <h2>
                                Devis négocié (à changer)

                            </h2>
                            <p>
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

.cardContainer {

    width: 15vw;
    background: radial-gradient(ellipse at top left, #e0e0e0, white), radial-gradient(ellipse at bottom, #e0e0e0, white);
    border-radius: 15px;
    margin: 20px;
}

.card {
    align-items: center;
    width: 15vw;
    height: 15vh;
    background-image: radial-gradient(ellipse at top right, #e0e0e0, white);
    border-radius: 5px;
    margin: 20px;
}

table {
    width: 80vw;
    height: 20vh;
}
h2{
    font-family: 'Eras-bold';
    font-size: 16px;
}
p{
    font-family: 'Eras-book';
    font-size: 13;
}
</style>