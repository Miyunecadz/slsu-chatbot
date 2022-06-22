import { defineStore } from 'pinia'

export const useClientStore = defineStore({
  id: 'client',
  state: () => ({
    name: '',
    email: '',
    rate: 0
  }),
  getters: {
    getUser: (state) => state,
    hasClient: (state) => {
      if (state.name != '' && state.email != '') {
        return true
      }
      return false
    }
  },
  actions: {
    setUser(user) {
      this.name = user.name
      this.email = user.email
    },
    setRate(rate) {
      this.rate = rate
    }
  }
})
