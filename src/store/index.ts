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

// ts-ignore necessário, pois os Arrays vazios [] estão sendo considerados como never[]
export default new Vuex.Store({
  state: {
    produtos: [],
    carrinho: []
  },
  mutations: {
    UPDATE_PRODUTOS(state, payload: IProduto[]) {
      //@ts-ignore
      state.produtos = payload;
    },
    ADD_PRODUTO_NO_CARRINHO(state, payload: IProduto) {
      //@ts-ignore
      state.carrinho.push(payload);
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
