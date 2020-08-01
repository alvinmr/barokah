import {
  getField,
  updateField
} from 'vuex-map-fields';

export const plugin = [getField, updateField]

export const state = () => ({
  items: []
});

export const mutations = {
  ADD_ITEM_CART(state, payload) {
    state.items.push(payload)
  },
  INCREASE_QTY_CART(state, id) {
    state.items.find(item => item.id == id).qty++
  },
  DECREASE_QTY_CART(state, id) {
    state.items.find(item => item.id == id).qty--
  },
  DELETE_ITEM_CART: (state, id) => {
    state.items.splice(state.items.findIndex(e => e.id == id), 1)
  },
  updateField
}

export const actions = {
  addToCart: ({
    commit,
    state
  }, value) => {
    if (state.items.find(item => item.id == value.id)) {
      commit('INCREASE_QTY_CART', value.id)
    } else {
      commit('ADD_ITEM_CART', value)
    }
  },
  deleteFromCart: ({
    commit
  }, id) => {
    commit('DELETE_ITEM_CART', id)
  },
  decreaseCartQty: ({
    commit,
    state
  }, id) => {
    if (state.items.find(item => item.id == id).qty <= 1) {
      commit('DELETE_ITEM_CART', id)
    } else {
      commit('DECREASE_QTY_CART', id)
    }
  }
}

export const getters = {
  total: (state) => {
    return state.items.reduce((sum, curr) => (sum + curr.price) * curr.qty, 0)
  },
  getField
}
