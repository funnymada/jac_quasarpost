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
