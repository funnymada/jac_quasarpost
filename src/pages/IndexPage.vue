<template>
  <div class="q-pa-md">

      <div v-if="isGrid == 'label'">
    <q-table
      style="height: 400px"
      flat bordered
      title="Treats"
      :rows="post"
      :columns="columns"
      row-key="index"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    />
  </div>
</div>

  <div v-if="isGrid == 'card'">
      <PostCard :props="{post, fields, filter,isGrid}"/>
    </div>
  <q-page class="flex flex-center">
  </q-page>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue'
import axios from 'axios'
import PostCard from '../components/PostCard.vue'
import { useRoute } from 'vue-router'

const isGrid = ref('label')

const route = useRoute()

watch(() => route.query.val, (newValue, oldValue) => {
  switchMode(newValue)
})

const post = ref([])

const fields = ref([
  { name: 'index', label: '#', field: 'index' },
  { name: 'userId', label: 'Userd Id', field: 'userId' },
  { name: 'id', label: 'id', field: 'id' },
  { name: 'title', label: 'Title', field: 'title', align: 'left' },
  { name: 'body', label: 'Body', field: 'body', align: 'left' }
])

const filter = ref('')

const fetchData = async () => {
  const dataAxios = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  post.value = dataAxios.data
}

const switchMode = (valore) => {
  isGrid.value = valore
  return isGrid
}

onBeforeMount(() => fetchData())

</script>
