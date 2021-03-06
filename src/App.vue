<template>
  <div id="app">
    <!-- Cabeçalho -->
    <Header :abrirCarrinho.sync="abrirCarrinho" />

    <!-- Mensagens de alerta -->
    <transition appear name="fade">
      <Message key="message" />
    </transition>

    <!-- Modal do Produto selecionado -->
    <transition appear name="fade">
      <Modal
        v-if="produtoAtual"
        :aberto="!!produtoAtual"
        @on-close="onCloseProdutoAtual()"
        key="modalProduto"
      >
        <div class="modal_img">
          <img src="./assets/images/notebook/notebook-foto.jpg" :alt="produtoAtual.imagemPath" />
        </div>
        <div class="modal_dados">
          <span class="modal_preco">{{produtoAtual.preco | currency}}</span>
          <h2 class="modal_titulo">{{produtoAtual.nome}}</h2>
          <p>{{produtoAtual.descricao}}</p>
          <button
            class="modal_btn"
            @click="adicionarProdutoNoCarrinho(produtoAtual)"
          >Adicionar ao carrinho</button>
        </div>
      </Modal>
    </transition>

    <!-- Modal do carinho -->
    <transition appear name="fade">
      <Modal v-if="carrinho" :aberto="abrirCarrinho" @on-close="onCloseCarrinho()">
        <div class="modal_img" style="max-height: 300px;">
          <img src="./assets/carrinho_cheio.jpg" />
        </div>
        <div class="carrinho_dados">
          <ul class="carrinho_produtos">
            <h2 class="carrinho_titulo">Carrinho</h2>
            <li v-for="(prod, index) in carrinho" :key="index" class="carrinho_produto">
              <p>{{prod.nome}}</p>
              <p class="carrinho_preco">{{prod.preco | currency}}</p>
              <button class="carrinho_remover" @click="removerProdutoDoCarrinho(index)">X</button>
            </li>
            <p
              class="carrinho_total"
            >Total: {{carrinho.reduce((sum, value) => sum + value.preco, 0) | currency}}</p>
            <button @click="finalizarCompra()" class="modal_btn">Finalizar Compra</button>
          </ul>
        </div>
      </Modal>
    </transition>

    <!-- Conteúdo da página inicial -->
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "@/services/api";
import Modal from "@/components/Modal.vue";
import Header from "@/components/Header.vue";
import Message from "@/components/Message.vue";
import Home from "@/views/Home.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import { IProduto } from "@/store/index";
import { EventBus } from "./main";

export default Vue.extend({
  name: "app",
  components: {
    Modal,
    Header,
    Home,
    Message
  },
  data() {
    return {
      abrirCarrinho: false
    };
  },
  methods: {
    ...mapActions(["getProdutos", "enviaVenda"]),
    ...mapMutations([
      "ADD_PRODUTO_NO_CARRINHO",
      "UPDATE_PRODUTO_ATUAL",
      "REMOVE_PRODUTO_DO_CARRINHO"
    ]),
    adicionarProdutoNoCarrinho(produto: IProduto) {
      this.ADD_PRODUTO_NO_CARRINHO(produto);
      EventBus.$emit("show-message", {
        msg: "Produto Adicionado.",
        timeout: 1500
      });
      this.UPDATE_PRODUTO_ATUAL(undefined);
    },
    removerProdutoDoCarrinho(idxProduto: number) {
      this.REMOVE_PRODUTO_DO_CARRINHO(idxProduto);
      EventBus.$emit("show-message", {
        msg: "Produto Removido",
        timeout: 3000,
        tipoMsg: "warning"
      });
    },
    onCloseProdutoAtual() {
      this.UPDATE_PRODUTO_ATUAL(undefined);
    },
    onCloseCarrinho() {
      this.abrirCarrinho = false;
    },
    finalizarCompra() {
      if (this.carrinho.length === 0) {
        return EventBus.$emit("show-message", {
          msg: "Não há produtos no carrinho",
          timeout: 3000,
          tipoMsg: "error"
        });
      }
      this.enviaVenda(this.carrinho);
      this.abrirCarrinho = false;
      EventBus.$emit("show-message", {
        msg: "Compra realizada com sucesso",
        timeout: 3000
      });
    },
    loadLocalStore() {
      const jsonCarrinho = window.localStorage.getItem("carrinho");
      if (jsonCarrinho) {
        const carrinhoCarregado = JSON.parse(jsonCarrinho);
        (carrinhoCarregado as IProduto[]).map(prod => {
          this.ADD_PRODUTO_NO_CARRINHO(prod);
        });
      }
    }
  },
  computed: {
    ...mapState(["produtos", "produtoAtual", "carrinho"])
  },
  async created() {
    this.getProdutos();
    this.loadLocalStore();
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.pointer {
  cursor: pointer;
}

/* SLIDE ANIMATION */

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-to {
  transition: opacity 0.3s;
}

.v-enter-to {
  animation: slide 0.3s;
}

.v-leave-to {
  animation: slide 0.3s reverse;
}

@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0px, 0);
  }
}

/* FADE ANIMATION */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
