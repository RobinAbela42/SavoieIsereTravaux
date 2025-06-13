<script setup>

import { ref, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

const mailRegex = helpers.regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
const textRegex = helpers.regex(/^[A-Za-zÀ-ÿ\s\-']+$/)

const nameContact = ref("")
const mailContact = ref("")
const objectContact = ref("")
const contentContact = ref("")

const rules = {
    contentContact: {
        required: helpers.withMessage('Veuillez écrire quelque chose dans le mail.', required),
    },
    mailContact: {
        required: helpers.withMessage('Le mail est obligatoire.', required),
        mailRegex: helpers.withMessage('Le mail doit être écrit au format : \'example@sample.ex`\'', mailRegex)
    }
}

const state = {
    nameContact,
    mailContact,
    objectContact,
    contentContact,
}

const v$contactForm = useVuelidate(rules, state)

const sendContactMail = async () => {
    const isValid = await v$contactForm.value.$validate()
    if (!isValid) return
    // envoyer le formulaire
}
</script>

<template>

    <div id="globalContainer">


        <div id="subtitleRight">
            <h1 class="green eras-book">Regroupement d'artisans indépendants  <br> des métiers du bâtiment</h1>
        </div>
        <div id="subtitleLeft">
            <h1 class="green eras-book">Un interlocuteur unique : Sylvain Abela <br>06 20 31 23 38</h1>
        </div>

        <div id="contactFormContainer">
            <h1>Contactez-nous !</h1>
            <div id="contactFormName">

                <div class="inputContainer">
                    <input type="text" id="name" v-model="nameContact" placeholder="" class="field eras-book" />
                    <label for="name" class="eras-book ">Nom</label>
                </div>
                <div class="inputContainer">
                    <input type="text" id="mail" v-model="mailContact" placeholder="" class="field eras-book">
                    <label for="mail" class="eras-book ">Mail*</label>
                    <p v-for="error of v$contactForm.mailContact.$errors" :key="error.$uid" class="eras-book red">
                        {{ error.$message }}
                    </p>
                </div>
            </div>

            <div class="inputContainer">
                <input type="text" id="object" v-model="objectContact" placeholder="" class="field eras-book">
                <label for="object" class="eras-book ">Objet</label>
            </div>

            <div class="inputContainer">
                <textarea id="content" class="field eras-book" placeholder="" v-model="contentContact"></textarea>
                <label for="content" class="eras-book">Contenu du mail*</label>
                <p v-for="error of v$contactForm.contentContact.$errors" :key="error.$uid" class="eras-book red">
                    {{ error.$message }}
                </p>
            </div>
            <div class="buttonContainer">

                <button @click="sendContactMail" class="eras-book">Envoyer</button>

            </div>
        </div>

    </div>


</template>

<style>
#contactFormContainer .inputContainer {

    display: flex;
    position: relative;
    width: 100%;

}

#contactFormContainer {
    align-self: center;
    color: white;
}

#contactFormContainer {
    background-image: radial-gradient(farthest-corner at 40px 40px,
            rgb(36, 100, 94) 0%,
            rgb(126, 197, 190) 150%);
    padding: 50px;
    width: 80vw;
}

#contactFormContainer button {
    background-color: white;
    outline: 2px solid;
    border: 0;
    color: #19897e;
    padding: 10px 20px;
    margin-top: 50px;
    border-radius: 2px;
    cursor: pointer;
}

.field {
    border: 0;
    border-bottom: 2px solid white;
    background: #62bcb3;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
}

.buttonContainer {
    position: relative;
    right: 0;
    left: auto;
}

.inputContainer:valid {
    background-color: green;

}

.inputContainer {
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
}

#content {
    height: 30vh;
}

.inputContainer label {
    position: absolute;
    top: 25px;
    left: 25px;
    transition: all 0.2s ease-in-out;
}

.inputContainer .field:focus~label,
.inputContainer .field:not(:placeholder-shown)~label {
    top: -2px;
    font-size: 12px;
}


.field:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid black;
}

#contactFormContainer div textarea {
    width: 100%;
}

#contactFormName {
    display: flex;
    flex-direction: row;
}

#contactFormName .inputContainer:first-child {
    padding-right: 15px;
}

#contactFormName .inputContainer:last-child {
    padding-left: 15px;
}
</style>
