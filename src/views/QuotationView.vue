<template>

    <div id="main">

        <div id="worksType">
            <!-- <div id="worksTypeCache" class="absolute formRadio button">

                    </div> -->

            <label for="renovation" class="">
                <!-- <label for="renovation" class="button formRadio"> -->
                <input type="radio" id="renovation" v-model="workType" value="renovation">
                <label for="renovation">Rénovation</label>
            </label>
            <label for="fresh">
                <input type="radio" id="fresh" v-model="workType" value="fresh">
                <label for="fresh">Neuf</label>
            </label>
            <label for="extention">
                <input type="radio" id="extention" v-model="workType" value="extention">
                <label for="extention">Extention</label>
            </label>
            <label for="otherWorksType">
                <input type="radio" id="otherWorksType" v-model="workType" value="otherWorksType">
                <label for="otherWorksType">Autre</label>
            </label>
        </div>

        <div id="worksParts">Votre projet concerne :

            <label for="plaster" class="">
                <input type="checkbox" id="plaster" name="plaster" v-model="worksParts">
                <label for="plaster">Plâterie</label>
            </label>
            <label for="tiling" class="">
                <input type="checkbox" id="tiling" name="tiling" v-model="worksParts">
                <label for="tiling">Carrelage</label>
            </label>
            <label for="electricity" class="">
                <input type="checkbox" id="electricity" name="electricity" v-model="worksParts">
                <label for="electricity">Carrelage</label>
            </label>
            <label for="plumbing" class="">
                <input type="checkbox" id="plumbing" name="plumbing" v-model="worksParts">
                <label for="plumbing">Plomberie</label>
            </label>
            <label for="masonery" class="">
                <input type="checkbox" id="masonery" name="masonery" v-model="worksParts">
                <label for="masonery">Maçonnerie</label>
            </label>
            <label for="roofing" class="">
                <input type="checkbox" id="roofing" name="roofing" v-model="worksParts">
                <label for="roofing">Toiture</label>
            </label>
        </div>


        <div id="worksCustomer">
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
        </div>


        <div id="worksBuilding">
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

        <div id="">
            <label for="name">Nom* :</label>
            <input type="text" v-model="name" id="name" autocomplete="name">

            <p v-for="error of v$.name.$errors" :key="error.$uid" class="eras-book red">
                {{ error.$message }}
            </p>

            <label for="surname">Prénom :</label>
            <input type="text" v-model="surname" id="surname">



            <label for="phone" required>Téléphone* :</label>
            <input type="text" v-model="phone" id="phone" autocomplete="mobile">

            <p v-for="error of v$.phone.$errors" :key="error.$uid" class="eras-book red">
                {{ error.$message }}
            </p>

            <label for="mail">Mail* :</label>
            <input type="text" v-model="mail" id="mail" />

            <p v-for="error of v$.phone.$errors" :key="error.$uid" class="eras-book red">
                {{ error.$message }}
            </p>


            <label for="addressName">Adresse :</label>
            <input v-model="addressNameCustomer" id="addressName">
            <label type="text" for="addressCity">Ville :</label>
            <input type="text" v-model="addressCityCustomer" id="addressCity">
            <label for="postalCode">Code postal :</label>
            <input type="number" v-model="postalCodeCustomer" id="postalCode">

            <input type="checkbox" id="sameAddressCheckbox" v-model="sameAddressCheckbox">
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

        <div>
            <input type="checkbox" name="contactBack">
            <label for="contactBack">Voudriez-vous être contacté par un expert du bâtiment ?</label>
        </div>

        <button @click="submitForm">Submit</button>

        <p v-for="error of v$.$errors" :key="error.$uid" class="eras-book red">
            {{ error.$message }}
        </p>

    </div>

    <div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { maxLength, minLength, required, helpers, sameAs } from '@vuelidate/validators'

const mailRegex = helpers.regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
const phoneRegex = helpers.regex(/^[0-9 ]+$/)
const textRegex = helpers.regex(/^[a-zA-Z]+$/)

const name = "";
const surname = "";
const phone = "";
const addressNameCustomer = "";
const mail = "";
const sameAddressCheckbox = "";
const workType = [];
const worksParts = [];
const workCustomer = [];
const worksBuilding = [];
const addressCityCustomer = "";
const postalCodeCustomer = "";
const addressNameSite = "";
const addressCitySite = "";
const postalCodeSite = "";
const comment = "";

if(sameAddressCheckbox){
    addressNameSite = addressNameCustomer
    addressCitySite = addressCityCustomer;
    postalCodeSite = postalCodeCustomer;

}

export default {
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            name: "",
            surname: "",
            phone: "",
            addressNameCustomer: "",
            mail: "",
            sameAddressCheckbox: "",
            workType: [],
            worksParts: [],
            workCustomer: [],
            worksBuilding: [],
            addressCityCustomer: "",
            postalCodeCustomer: "",
            addressNameSite: "",
            addressCitySite: "",
            postalCodeSite: "",
            comment: "",
        }
    },
    validations() {
        return {
            name: {
                required: helpers.withMessage('Le nom est obligatoire.', required),
                textRegex: helpers.withMessage('Le nom ne peut pas contenir de chiffres ou symboles.', textRegex)
            },
            surname: {},
            phone: {
                required: helpers.withMessage('Le numéro de téléphone est obligatoire.', required),
                minLength: helpers.withMessage('Le numéro de téléphone doit au minimum faire 10 caractères.', minLength(10)),
                // maxLength: helpers.withMessage('Le numéro de téléphone doit faire 10 caractères et doit être composé de chiffres uniquement.', maxLength(10)),
                phoneRegex: helpers.withMessage('Le numéro de téléphone doit être composé de chiffres.', phoneRegex)
            },
            mail: { required: helpers.withMessage('Le mail est obligatoire.', required), mailRegex: helpers.withMessage('Le mail doit être renseigné au format : \'example@sample.ex\'.', mailRegex) },
            workType: {},
            worksParts: {},
            workCustomer: {},
            worksBuilding: {},
            addressNameCustomer: {},
            addressCityCustomer: {},
            postalCodeCustomer: {},
            addressNameSite: {},
            addressCitySite: {},
            postalCodeSite: {},
            comment: {},
        }
    },
    methods: {
        async submitForm() {
            const isFormCorrect = await this.v$.$validate()
            // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
            if (!isFormCorrect) return
            // actually submit form
        }
    }

}


// export default {
//     data() {
//         return {

//             v$: useVuelidate(),
//             name: "",
//             surname: "",
//             phone: "",
//             addressNameCustomer: "",
//             mail: "",
//             addressCityCustomer: "",
//             postalCodeCustomer: "",
//             addressNameSite: "",
//             addressCitySite: "",
//             postalCodeSite: "",
//             comment: "",
//         }
//     },
//     validation() {
//         return {
//             name: { required },
//             surname: { required },
//             phone: { required, minLength: minLength(10), maxLength: maxLength(10), phoneRegex },
//             mail: { required, mailRegex },
// addressNameCustomer: {},
// addressCityCustomer: {},
// postalCodeCustomer: {},
// addressNameSite: {},
// addressCitySite: {},
// postalCodeSite: {},
// comment: {},
//         }

//     },
//     methods: {
//         async submit() {
//             this.v$.$validate() // checks all inputs
//             if (!this.v$.$error) {
//                 // if ANY fail validation
//                 alert('Form successfully submitted.')
//             } else {
//                 alert('Form failed validation')
//             }

//         }

//     }
// }



</script>


<style>
#main {
    margin: 20vh 50px;
}

.buttonForm {
    padding: 25px;
    border-radius: 50px;
    border: 0px;
    background-color: rgb(23, 71, 174);
    color: white;
}
</style>
