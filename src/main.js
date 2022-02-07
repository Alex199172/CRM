import axios from 'axios'
import { createApp } from 'vue'
import { dragscrollNext } from "vue-dragscroll";
import App from './App.vue'
import router from './router'

import { createStore } from 'vuex'

//import Store from '@/store/main.js'

let app = createApp(App);
app.directive('dragscroll', dragscrollNext);

let api = axios.create({
  baseURL: 'https://api.vevanta.com/api/',
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
  }
})


const store = createStore({
  state () {
    return {
      activeNav: true,
      statusBurger: 0,
      winW: window.innerWidth
    }
  },
  mutations: {
    showMenu (state) {
      state.activeNav = !state.activeNav
    },

    hideMenu (state) {
      state.activeNav = false
    },

    setStatusBurger (state, status) {
      state.statusBurger = status
    },

    setWinW (state) {
      state.winW = window.innerWidth
    }
  },

  actions: {
    toggleNav (context) {
      context.commit('showMenu')
    },

    LOGOUT (context) {
      localStorage.removeItem('auth_token')
      router.push({name: 'auth'})
    }
  }
})

api.interceptors.response.use(rs => rs, e => {
    if (!e.response) {
      return Promise.reject(e)
    }

    let rs = e.response

    switch (rs.status) {
      case 401:
        store.dispatch('LOGOUT')
      break
    }

    return Promise.reject(rs)
  })

app.config.globalProperties.$api = api

app.use(store)
//app.use(Vuex)
app.use(router).mount('#app')
