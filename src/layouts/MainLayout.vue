<template>
  <q-layout view="lHr lpR fFf">

    <q-header elevated class="bg-teal text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Madaschi Alessandro
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab :to="{ path: '/', query: { val: 'card' } }" label="card"  />
        <q-route-tab :to="{ path: '/', query: { val: 'label' } }" label="label" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-teal-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </q-toolbar-title>
        <q-tabs align="center">
         <q-btn class="bottone" label="login" outline style="color: goldenrod" @click="dialogPopUp = true"></q-btn>
    </q-tabs>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { onMounted } from 'vue'
// import loginPopUp from 'src/components/loginPopUp.vue'
onMounted(() => {
  console.log('qualcosa')
})
</script>
