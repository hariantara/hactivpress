import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signupData: []
  },
  mutations: {
    signup (state, payload) {
      state.signupData = payload
    }
  },
  actions: {
    createAccount (store, payload) {
      console.log('PAYLOAD: ', payload)
      axios.post('http://localhost:3000/users/signup', {
        username: payload.username,
        password: payload.password
      })
      .then(response => {
        store.commit('signup', response.data)
        router.push('/login')
      })
      .catch(error => {
        console.log(error)
      })
    },
    loginAccount (store, payload) {
      console.log('LOGIN PAYLOAD: ', payload)
      axios.post('http://localhost:3000/users/signin', {
        username: payload.username,
        password: payload.password
      })
      .then(response => {
        localStorage.setItem('token', response.data)
        router.push('/')
      })
    }
  }
})
