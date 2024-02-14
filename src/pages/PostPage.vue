<template>
  <q-tabs align="center">
    <div class="styleExample">
           <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
             <div class="absolute-bottom text-h6">
              post numero: {{ post.id }}
              </div>
                  </q-img>
      <q-card-section>
            {{ post.body }}
    </q-card-section>
     <q-card-actions align="right">
            <q-checkbox
                color="red"
                 v-model="val"
                 checked-icon="favorite"
                 unchecked-icon="favorite_border"/>
            <q-checkbox
                 color="teal"
                 v-model="val2"
                 checked-icon="bookmark"
                 unchecked-icon="bookmark_border"/>
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
  <div class="q-pa-md">
  </div>
</div>
</q-tabs>
</template>

<script setup>

import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
const val = ref(true)
const val2 = ref(true)
const post = ref('')
const route = useRoute()
const itemId = route.params.id

const fetchData = async () => {
  const dataAxios = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
  post.value = dataAxios.data
}

onBeforeMount(() => fetchData())
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
.styleExample
    margin-top:10vh
</style>
