<template>
  <q-btn color="primary" @click=switchMode class="q-mt-md" align="center">
    {{ isGrid }}
      <q-tooltip class="bg-accent">click to switch mode from table to post</q-tooltip>
    </q-btn>
  <div class="q-pa-md">

      <div v-if="!isGrid">
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

  <div v-if="isGrid">
      <PostCard :props="{post, fields, filter,isGrid}"/>
    </div>
  <q-page class="flex flex-center">
  </q-page>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import axios from 'axios'
import PostCard from '../components/PostCard.vue'
import { useRoute } from 'vue-router'

let valore = false

const route = useRoute()
onMounted(() => {
  valore = route.query.val
  console.log(route.query.val)
})

const post = ref([])

const isGrid = ref(valore)
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

const switchMode = () => {
  isGrid.value = !isGrid.value
  return isGrid
}

onBeforeMount(() => fetchData())

</script>
