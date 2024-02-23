import { createStore } from 'vuex'

import login from './modular/login';
import pool from './modular/pool';
import player from './modular/player';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    pool,
    player
  }
})
