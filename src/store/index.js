import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  mutations: {
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    increaseCounter({commit}) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then((res)=> commit('increaseCounter', res.data))
      .catch((err) => alert(err))
    },
    decreaseCounter({commit}) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then((res)=> commit('decreaseCounter', res.data))
      .catch((err) => {alert(err)})
    },
    setColorCode({commit}, newValue) {
      commit('setColorCode', newValue)
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }

  },
  modules: {
  }
})
