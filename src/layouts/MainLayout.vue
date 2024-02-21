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
        <div class="divLoginPopUp">
         <loginPopUp></loginPopUp>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import loginPopUp from 'src/components/loginPopUp.vue'

</script>
<style>
.divLoginPopUp{
  margin-top:2%;
}
</style>
