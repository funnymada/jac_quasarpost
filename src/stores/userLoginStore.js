import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const loginPopStore = defineStore('loginPopStore', () => {
  const nome = ref('')
  const password = ref('')

  const signIn = (nomeIns, passwordIns) => {
    nome.value = nomeIns
    password.value = passwordIns
  }

  const lolo = () => {
    if (nome.value === 'alessandro' && password.value === 'password') {
      return true
    }
    return false
  }

  const isLogged = computed(() => {
    if (nome.value === 'alessandro' && password.value === 'password') {
      return true
    }
    return false
  })

  return { lolo, isLogged, nome, password, signIn }
}, {
  persisted: true
}
)
