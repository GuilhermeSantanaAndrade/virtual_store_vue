import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/api";

Vue.use(Vuex);

export interface IProduto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagemPath: string;
}

export default new Vuex.Store({
  state: {
    produtos: [{}]
  },
  mutations: {
    UPDATE_PRODUTOS(state, payload: IProduto[]) {
      state.produtos = payload;
    }
  },
  actions: {
    async getProdutos(context) {
      try {
        const response = await api.get("/produtos");
        context.commit("UPDATE_PRODUTOS", response);
      } catch (error) {
        window.alert(error);
      }
    }
  },
  modules: {}
});