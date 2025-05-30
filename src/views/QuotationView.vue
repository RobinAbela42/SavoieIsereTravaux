<template>

    <div id="main">

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
            </label>
            <label for="extention">
                <input type="radio" id="extention" name="workType" value="extention">
                <label for="extention">Extention</label>
            </label>
            <label for="otherWorksType">
                <input type="radio" id="otherWorksType" name="workType" value="otherWorksType">
                <label for="otherWorksType">Autre</label>
            </label>
        </div>

        <div id="worksParts">Votre projet concerne :

            <label for="plaster" class="">
                <input type="checkbox" id="plaster" name="plaster">
                <label for="plaster">Plâterie</label>
            </label>
            <label for="tiling" class="">
                <input type="checkbox" id="tiling" name="tiling">
                <label for="tiling">Carrelage</label>
            </label>
            <label for="electricity" class="">
                <input type="checkbox" id="electricity" name="electricity">
                <label for="electricity">Carrelage</label>
            </label>
            <label for="plumbing" class="">
                <input type="checkbox" id="plumbing" name="plumbing">
                <label for="plumbing">Plomberie</label>
            </label>
            <label for="masonery" class="">
                <input type="checkbox" id="masonery" name="masonery">
                <label for="masonery">Maçonnerie</label>
            </label>
            <label for="roofing" class="">
                <input type="checkbox" id="roofing" name="roofing">
                <label for="roofing">Toiture</label>
            </label>
        </div>


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

        <div id="">
            <label for="name">Nom* :</label>
            <input type="text" v-model="name" id="name" autocomplete="name">

            <p v-for="error of v$.name.$errors" :key="error.$uid">
                <strong>{{ error.$validator }}</strong>
                <small> on property</small>
                <strong>{{ error.$property }}</strong>
                <small> says:</small>
                <strong>{{ error.$message }}</strong>
            </p>

            <label for="surname">Prénom* :</label>
            <input type="text" v-model="surname" id="surname">
            <label for="phone" required>Téléphone* :</label>
            <input type="text" v-model="phone" id="phone" autocomplete="mobile">
            <label for="mail">Mail :</label>
            <input type="text" v-model="mail" id="mail" />
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

        <button @click="submitForm">Submit</button>

        <p v-for="error of v$.$errors" :key="error.$uid">
            <strong>{{ error.$validator }}</strong>
            <small> on property</small>
            <strong>{{ error.$property }}</strong>
            <small> says:</small>
            <strong>{{ error.$message }}</strong>
        </p>

    </div>

    <div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { maxLength, minLength, required, helpers } from '@vuelidate/validators'

const mailRegex = helpers.regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
const phoneRegex = helpers.regex(/^[0-9]*$/)
const textRegex = helpers.regex(/^[a-zA-Z]+$/)


export default {
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            name: '',
            surname: "",
            phone: "",
            addressNameCustomer: "",
            mail: "",
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
            name: { required, textRegex },
            surname: { required, textRegex },
            phone: { required, minLength: minLength(10), maxLength: maxLength(10), phoneRegex },
            mail: { required, mailRegex },
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
