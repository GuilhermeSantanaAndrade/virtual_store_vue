import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/api";
import { EventBus } from "../main";

Vue.use(Vuex);

export interface IProduto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagemPath: string;
}

export interface IVenda {
  id: number;
  data_hora: Date;
  produtos: IProduto[];
}

const atualizaLocalStore = (carrinho: any[]) => {
  if (!carrinho || (carrinho && carrinho.length == 0)) {
    window.localStorage.removeItem("carrinho");
  } else {
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }
};

// ts-ignore necessário, pois os Arrays vazios [] estão sendo considerados como never[]
export default new Vuex.Store({
  state: {
    produtos: [],
    carrinho: [],
    produtoAtual: undefined
  },
  mutations: {
    UPDATE_PRODUTOS(state, payload: IProduto[]) {
      //@ts-ignore
      state.produtos = payload;
    },
    ADD_PRODUTO_NO_CARRINHO(state, payload: IProduto) {
      //@ts-ignore
      state.carrinho.push(payload);
      atualizaLocalStore(state.carrinho);
    },
    UPDATE_PRODUTO_ATUAL(state, payload: IProduto | undefined) {
      //@ts-ignore
      state.produtoAtual = payload;
    },
    REMOVE_PRODUTO_DO_CARRINHO(state, payload: number) {
      state.carrinho.splice(payload, 1);
      atualizaLocalStore(state.carrinho);
    },
    LIMPA_CARRINHO(state) {
      state.carrinho = [];
      atualizaLocalStore(state.carrinho);
    }
  },
  actions: {
    async getProdutos(context) {
      try {
        const response = await api.get("/produtos");
        context.commit("UPDATE_PRODUTOS", response);
      } catch (error) {
        EventBus.$emit("show-message", {
          msg: error,
          timeout: 3000,
          tipoMsg: "error"
        });
      }
    },
    async enviaVenda(context, payload) {
      try {
        debugger;
        const min = 0;
        const max = 9999999;
        const randomId = Math.floor(Math.random() * (+max - +min)) + +min;
        let venda: IVenda = {
          id: randomId,
          data_hora: new Date(),
          produtos: payload
        };

        await api.post("/vendas", venda);
        context.commit("LIMPA_CARRINHO");
      } catch (error) {
        window.alert(error);
      }
    }
  },
  modules: {}
});
