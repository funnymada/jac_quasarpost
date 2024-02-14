<template>
    <div class="q-pa-md">
      <q-table
        flat bordered
        :grid="true"
        :rows="props.post"
        :columns="props.fields"
        :filter="props.filter"
        hide-header
        @row-click="eventRowClick"
      />
    </div>
  </template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const eventRowClick = (event, row) => {
  router.push(`/post/${row.id}`)
}

defineProps({
  props: Object
})

</script>

<!-- <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/mountains.jpg">

    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
    </q-card-section>
  </q-card> -->
