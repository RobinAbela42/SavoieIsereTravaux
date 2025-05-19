

<template>

    <div id="main">

        <form action="mail.php" method="post">

            <fieldset>
                <div id="worksType">
                    <!-- <div id="worksTypeCache" class="absolute formRadio button">

                    </div> -->

                    <label for="renovation" class="">
                    <!-- <label for="renovation" class="button formRadio"> -->
                        <input type="radio" id="renovation" name="workType" value="renovation">
                        <label for="renovation">Rénovation</label>
                    </label>
                    <label for="fresh">
                        <input type="radio" id="fresh" name="workType" value="fresh">
                        <label for="fresh">Neuf</label>
                    </label >
                    <label for="extention">
                        <input type="radio" id="extention" name="workType" value="extention">
                        <label for="extention">Extention</label>
                    </label >
                    <label for="otherWorksType">
                        <input type="radio" id="otherWorksType" name="workType" value="otherWorksType">
                        <label for="otherWorksType">Autre</label>
                    </label >
                </div>
            </fieldset>
            <fieldset>

                <div id="worksCustomer">
                    <div>
                        <input type="radio" id="owner" name="workCustomer" value="owner">
                        <label for="owner">Propriétaire</label>
                    </div>
                    <div>
                        <input type="radio" id="futureOwner" name="workCustomer" value="futureOwner">
                        <label for="futureOwner">Future propriétaire</label>
                    </div>
                    <div>
                        <input type="radio" id="landlord" name="workCustomer" value="landlord">
                        <label for="landlord">Propriétaire bailleur</label>
                    </div>
                    <div>
                        <input type="radio" id="renter" name="workCustomer" value="renter">
                        <label for="renter">Locataire</label>
                    </div>
                </div>
            </fieldset>
            <fieldset>

                <div id="worksBuilding">
                    <div>
                        <input type="radio" id="house" name="worksBuilding" value="house">
                        <label for="house">Maison</label>
                    </div>
                    <div>
                        <input type="radio" id="appartment" name="worksBuilding" value="appartment">
                        <label for="appartment">Appartement</label>
                    </div>
                    <div>
                        <input type="radio" id="commerce" name="worksBuilding" value="commerce">
                        <label for="commerce">Commerce</label>
                    </div>
                    <div>
                        <input type="radio" id="otherBuilding" name="worksBuilding" value="otherBuilding">
                        <label for="otherBuilding">Autre</label>
                    </div>
                </div>
            </fieldset>
            <fieldset>

                <div id="">
                    <label for="name">Nom* :</label>
                    <input type="text" v-model="name" id="name" required>
                    <label for="surname">Prénom :</label>
                    <input type="text" v-model="surname" id="surname">
                    <label for="phone">Téléphone :</label>
                    <input type="text"  v-model="phone" id="phone">
                    <label for="addressName">Adresse :</label>
                    <input v-model="addressNameCustomer" id="addressName">
                    <label type="text" for="addressCity">Ville :</label>
                    <input type="text" v-model="addressCityCustomer" id="addressCity">
                    <label for="postalCode">Code postal :</label>
                    <input type="number" v-model="postalCodeCustomer" id="postalCode">

                    <input type="checkbox" id="sameAddressCheckbox">
                    <label for="sameAddressCheckbox">L'adresse du chantier est elle différentes ?</label>

                    <label for="addressNameSite">Adresse du chantier :</label>
                    <input v-model="addressNameSite" id="addressNameSite">
                    <label type="text" for="addressCitySite">Ville du chantier :</label>
                    <input type="text" v-model="addressCitySite" id="addressCitySite">
                    <label for="postalCodeSite">Code postal du chantier :</label>
                    <input type="number" v-model="postalCodeSite" id="postalCodeSite">

                    <label for="comment">Décrivez nous votre chantier !</label>
                    <textarea v-model="comment" id="comment"></textarea>
                </div>

            </fieldset>

            <input type="submit">
        </form>

    </div>
</template>

<script defer>
import { onMounted } from 'vue';


export default {
  data() {
    return {
      name : "",
      surname : "",
      phone : "",
      addressNameCustomer : "",
      addressCityCustomer : "",
      postalCodeCustomer  : "",
      addressNameSite : "",
      addressCitySite : "",
      postalCodeSite : "",
      comment : "",
    }
  }
}

// onMounted(() => {
//     const worksTypeCache = document.getElementById('worksTypeCache')
//     console.log('Works')

//     worksTypeCache.addEventListener("mouseenter", 
//         (e) => {
//             console.log('Works')
//         }
//     )
// })

</script>

<style>

#main{
margin:20vh 50px;
}

.buttonForm {
    padding: 25px;
    border-radius: 50px;
    border: 0px;
    background-color: rgb(23, 71, 174);
    color: white;
}
</style>
