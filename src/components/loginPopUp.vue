<template>
     <q-tabs align="center">
         <q-btn class="bottone" label="login" outline style="color: goldenrod" @click="dialogPopUp = true"></q-btn>
    </q-tabs>
<q-dialog v-model="dialogPopUp" persistent>
    <div class="formLogin">
    <div class="nomeInput">
    <q-input
        filled
        v-model="name"
        label="Your name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    </div><div class="nomeInput">
    <q-input
        filled
        v-model="password"
        label="password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    </div>
    <div class="bottone" align="center">
      <q-btn @click="confirmLogin" flat style="color: black;" label="confirm"/>
    </div>
</div>
</q-dialog>
</template>

<script setup>
import { loginPopStore } from 'src/stores/userLoginStore'
import { ref } from 'vue'

const name = ref()
const password = ref()
const store = loginPopStore()
const dialogPopUp = ref(false)
const logged = ref(false)

const confirmLogin = () => {
  dialogPopUp.value = false
  store.signIn(name.value, password.value)
  logged.value = store.lolo()
  console.log(logged.value)
}
</script>
<style scoped>
.bottone{
  margin-bottom: 10px;
}
.formLogin{
    background-color: rgb(149, 236, 236);
}
.nomeInput{
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom:20px ;
  width: fit-content;
}
</style>
