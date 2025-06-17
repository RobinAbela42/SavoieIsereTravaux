<script setup>
import { ref, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

const textRegex = helpers.regex(/^[A-Za-zÀ-ÿ\s\-']+$/)
const phoneRegex = helpers.regex(/^[0-9 ]+$/)
const mailRegex = helpers.regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)

const name = ref("")
const surname = ref("")
const phone = ref("")
const mail = ref("")
const comment = ref("")

const addressNameCustomer = ref("")
const addressCityCustomer = ref("")
const postalCodeCustomer = ref("")

const addressNameSite = ref("")
const addressCitySite = ref("")
const postalCodeSite = ref("")

const sameAddressCheckbox = ref(false)
const contactBackCheckbox = ref(false)

const workType = ref([])
const worksParts = ref([])
const workCustomer = ref([])
const worksBuilding = ref([])

watch(sameAddressCheckbox, (isChecked) => {
    if (isChecked) {
        addressNameSite.value = addressNameCustomer.value
        addressCitySite.value = addressCityCustomer.value
        postalCodeSite.value = postalCodeCustomer.value
    } else {
        addressNameSite.value = ''
        addressCitySite.value = ''
        postalCodeSite.value = ''
    }
})



const rules = {
    name: {
        required: helpers.withMessage('Le nom est obligatoire.', required),
        textRegex: helpers.withMessage('Le nom ne peut pas contenir de chiffres ou symboles.', textRegex)
    },
    surname: {},
    phone: {
        required: helpers.withMessage('Le numéro de téléphone est obligatoire.', required),
        minLength: helpers.withMessage('Minimum 10 chiffres.', minLength(10)),
        phoneRegex: helpers.withMessage('Uniquement des chiffres.', phoneRegex)
    },
    mail: {
        required: helpers.withMessage('Le mail est obligatoire.', required),
        mailRegex: helpers.withMessage('Format email invalide.', mailRegex)
    },
    comment: {},
    addressNameCustomer: {},
    addressCityCustomer: {},
    postalCodeCustomer: {},
    addressNameSite: {},
    addressCitySite: {},
    postalCodeSite: {},
    sameAddressCheckbox: {},
    workType: {},
    worksParts: {},
    workCustomer: {},
    worksBuilding: {}
}

const state = {
    name,
    surname,
    phone,
    mail,
    comment,
    addressNameCustomer,
    addressCityCustomer,
    postalCodeCustomer,
    addressNameSite,
    addressCitySite,
    postalCodeSite,
    sameAddressCheckbox,
    workType,
    worksParts,
    workCustomer,
    worksBuilding
}

const v$ = useVuelidate(rules, state)

const submitForm = async () => {
    const isValid = await v$.value.$validate()
    if (!isValid) return
    // envoyer le formulaire
}
</script>

<template>

    <div id="globalContainer">


        <div id="subtitleRight">
            <h1 class="green eras-book">Regroupement d'artisans indépendants <br> des métiers du bâtiment</h1>
        </div>
        <div id="subtitleLeft">
            <h1 class="green eras-book">Un interlocuteur unique : Sylvain Abela <br>06 20 31 23 38</h1>
        </div>

        <div id="main" class="background-green">



            <h2 class="white">Quel type de travaux ?</h2>
            <div id="worksType" class="radioContainer row-wrap">
                <!-- <div id="worksTypeCache" class="absolute formRadio button">

            </div> -->

                <div>
                    <!-- <label for="renovation" class="button formRadio"> -->
                    <input type="radio" id="renovation" v-model="workType" value="renovation">
                    <label for="renovation">Rénovation</label>
                </div>
                <div>
                    <input type="radio" id="fresh" v-model="workType" value="fresh">
                    <label for="fresh">Neuf</label>
                </div>
                <div>
                    <input type="radio" id="extention" v-model="workType" value="extention">
                    <label for="extention">Extention</label>
                </div>
                <div>
                    <input type="radio" id="otherWorksType" v-model="workType" value="otherWorksType">
                    <label for="otherWorksType">Autre</label>
                </div>
            </div>
            <h2 class="white">Votre projet concerne :</h2>
            <div id="worksParts" class="row-wrap checkboxContainer">

                <div>
                    <input type="checkbox" id="plaster" value="Plaster" v-model="worksParts">
                    <label for="plaster">Plâterie</label>
                </div>
                <div>
                    <input type="checkbox" id="tiling" value="Tiling" v-model="worksParts">
                    <label for="tiling">Carrelage</label>
                </div>
                <div>
                    <input type="checkbox" id="electricity" value="Electricity" v-model="worksParts">
                    <label for="electricity">Électricité</label>
                </div>
                <div>
                    <input type="checkbox" id="plumbing" value="Plumbing" v-model="worksParts">
                    <label for="plumbing">Plomberie</label>
                </div>
                <div>
                    <input type="checkbox" id="masonery" value="Masonery" v-model="worksParts">
                    <label for="masonery">Maçonnerie</label>
                </div>
                <div>
                    <input type="checkbox" id="roofing" value="Roofing" v-model="worksParts">
                    <label for="roofing">Toiture</label>
                </div>
                <div>
                    <input type="checkbox" id="otherParts" value="OtherParts" v-model="worksParts">
                    <label for="otherParts">Autre</label>
                </div>
            </div>

            <h2 class="white">Vous êtes :</h2>

            <div id="worksCustomer" class="radioContainer row-wrap">
                <div>
                    <input type="radio" id="owner" v-model="workCustomer" value="owner">
                    <label for="owner">Propriétaire</label>
                </div>
                <div>
                    <input type="radio" id="futureOwner" v-model="workCustomer" value="futureOwner">
                    <label for="futureOwner">Future propriétaire</label>
                </div>
                <div>
                    <input type="radio" id="landlord" v-model="workCustomer" value="landlord">
                    <label for="landlord">Propriétaire bailleur</label>
                </div>
                <div>
                    <input type="radio" id="renter" v-model="workCustomer" value="renter">
                    <label for="renter">Locataire</label>
                </div>
                <div>
                    <input type="radio" id="otherCustomer" v-model="workCustomer" value="otherCustomer">
                    <label for="otherCustomer">Autre </label>
                </div>
            </div>

            <h2 class="white">Il s'agit de :</h2>

            <div id="worksBuilding" class="radioContainer row-wrap">
                <div>
                    <input type="radio" id="house" v-model="worksBuilding" value="house">
                    <label for="house">Maison</label>
                </div>
                <div>
                    <input type="radio" id="appartment" v-model="worksBuilding" value="appartment">
                    <label for="appartment">Appartement</label>
                </div>
                <div>
                    <input type="radio" id="commerce" v-model="worksBuilding" value="commerce">
                    <label for="commerce">Commerce</label>
                </div>
                <div>
                    <input type="radio" id="otherBuilding" v-model="worksBuilding" value="otherBuilding">
                    <label for="otherBuilding">Autre</label>
                </div>
            </div>

            <h2 class="white">Informations personnelles :</h2>

            <div id="">

                <div class="row">


                    <div class="inputContainer">
                        <input type="text" v-model="name" id="name" autocomplete="name" placeholder="" class="field">
                        <label for="name">Nom* :</label>

                    </div>

                    <div class="inputContainer">

                        <input type="text" v-mod el="surname" id="surname" placeholder="" class="field">
                        <label for="surname">Prénom :</label>

                    </div>
                </div>

                <p v-for="error of v$.name.$errors" :key="error.$uid" class="eras-book red">
                    {{ error.$message }}
                </p>

                <div class="inputContainer">

                    <input type="text" v-model="phone" id="phone" autocomplete="mobile" placeholder="" class="field">
                    <label for="phone" required>Téléphone* :</label>

                </div>

                <p v-for    ="error of v$.phone.$errors" :key="error.$uid" class="eras-book red">
                    {{ error.$message }}
                </p>

                <div class="inputContainer">

                    <input type="text" v-model="mail" id="mail" placeholder="" class="field">
                    <label for="mail">Mail* :</label>

                </div>


                <p v-for="error of v$.mail.$errors" :key="error.$uid" class="eras-book red">
                    {{ error.$message }}
                </p>

                <div class="inputContainer">
                    <input v-model="addressNameCustomer" id="addressName" placeholder="" class="field">
                    <label for="addressName">Adresse :</label>

                </div>

                <div class="inputContainer">

                    <input placeholder="" class="field" type="text" v-model="addressCityCustomer" id="addressCity">
                    <label type="text" for="addressCity">Ville :</label>

                </div>

                <div class="inputContainer">

                    <input placeholder="" class="field" type="number" v-model="postalCodeCustomer" id="postalCode">
                    <label for="postalCode">Code postal :</label>

                </div>

                <div class="singleCheckbox">

                    <input type="checkbox" id="sameAddressCheckbox" v-model="sameAddressCheckbox">
                    <label for="sameAddressCheckbox">L'adresse du chantier est elle différentes ?</label>
                </div>

                <div class="inputContainer">

                    <input placeholder="" class="field" type="text" v-model="addressNameSite" id="addressNameSite"
                        :disabled="sameAddressCheckbox">
                    <label for="addressNameSite">Adresse du chantier :</label>

                </div>

                <div class="inputContainer">

                    <input placeholder="" class="field" type="text" v-model="addressCitySite" id="addressCitySite"
                        :disabled="sameAddressCheckbox">
                    <label for="addressCitySite">Ville du chantier :</label>

                </div>

                <div class="inputContainer">

                    <input placeholder="" class="field" type="number" v-model="postalCodeSite" id="postalCodeSite"
                        :disabled="sameAddressCheckbox">
                    <label for="postalCodeSite" :disabled="true">Code postal du chantier :</label>

                </div>

                <div class="inputContainer">

                    <textarea placeholder="" class="field " v-model="comment" id="comment"></textarea>
                    <label for="comment">Décrivez nous votre chantier !</label>

                </div>

            </div>

            <div class="singleCheckbox">
                <input type="checkbox" name="contactBack" id="contactBack" v-model="contactBackCheckbox">
                <label for="contactBack">Je souhaite être recontacté rapidement</label>
            </div>

            <button @click="submitForm" class="quotationSubmit eras-bold">Envoyer</button>

            <p v-for="error of v$.$errors" :key="error.$uid" class="eras-book red">
                {{ error.$message }}
            </p>

        </div>
    </div>
</template>



<style>
#main {
    padding: 50px 50px;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    width: 60vw;
}

.buttonForm {
    padding: 25px;
    border-radius: 50px;
    border: 0px;
    background-color: rgb(23, 71, 174);
    color: white;
}

.radioContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    display: inline-flex;
    background-color: #62bcb3;
    padding: 10px;
    gap: 10px;
    border-radius: 8px;
    font-weight: bold;
}

.radioContainer input[type="radio"] {
    display: none;
}

.radioContainer label {
    display: inline-block;
    padding: 10px 15px;
    color: black;
    border-radius: 6px;
    cursor: pointer;
}

.radioContainer label:hover {
    background-color: #19897e;
    transform: scale(1.05);
    transition: 0.2s ease;
}

.radioContainer input[type="radio"]:checked+label {
    background: #19897e;
    color: white;
}

.checkboxContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    display: inline-flex;
    background-color: #62bcb3;
    padding: 10px;
    gap: 10px;
    border-radius: 8px;
    font-weight: bold;
}

.checkboxContainer label {
    display: inline-block;
    padding: 10px 15px;
    color: black;
    font-size: 0.875rem;
    border-radius: 6px;
    cursor: pointer;
    border: #19897e 2px solid;
}

.checkboxContainer input[type="checkbox"]:checked+label {
    background: #19897e;
    color: white;
}

.checkboxContainer label:hover {
    background-color: #19897e;
    transform: scale(1.05);
    transition: 0.2s ease;
}

.checkboxContainer input[type="checkbox"] {
    display: none;

}

.singleCheckbox {
    display: flex;
    align-items: center;
    padding: 15px;
    accent-color: white;
}

.singleCheckbox input {
    width: 25px;
    height: 25px;
    margin-right: 10px;

}

.quotationSubmit {
    background-color: white;
    outline: 2px solid;
    border: 0;
    color: #19897e;
    padding: 10px 20px;
    margin-top: 50px;
    border-radius: 2px;
    cursor: pointer;
}

/* #comment{
    width: ;
} */
</style>
