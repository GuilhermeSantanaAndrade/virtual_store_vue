<template>
  <section class="modal" v-if="produtoAtual">
    <div class="modal_container">
      <button class="modal_closeButton" @click="UPDATE_PRODUTO_ATUAL(undefined)">X</button>
      <div class="modal_img">
        <img src="../assets/images/notebook/notebook-foto.jpg" :alt="produtoAtual.imagemPath" />
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
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { IProduto } from "@/store/index";
import { EventBus } from "@/main.ts";

export default Vue.extend({
  name: "Modal",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["ADD_PRODUTO_NO_CARRINHO", "UPDATE_PRODUTO_ATUAL"]),
    adicionarProdutoNoCarrinho(produto: IProduto) {
      this.ADD_PRODUTO_NO_CARRINHO(produto);
      EventBus.$emit("show-message", {
        msg: "Produto Adicionado.",
        timeout: 3000
      });
      this.UPDATE_PRODUTO_ATUAL(undefined);
    }
  },
  computed: {
    ...mapState(["produtos", "produtoAtual"])
  }
});
</script>

<style scoped>
.modal::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 80px;
}

.modal_container {
  position: relative;
  background: linear-gradient(to right, transparent 250px, white 250px);
  z-index: 1;
  display: grid;
  grid-gap: 50px;
  padding: 50px 50px 50px 0;
  width: 90%;
  grid-template-columns: 300px 1fr;
}

.modal_img {
  max-width: 300px;
  grid-column: 1;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.modal_img img {
  max-width: 300px;
  display: block;
}

.modal_dados {
  grid-column: 2;
  max-width: 600px;
}

.modal_titulo {
  font-size: 3rem;
  margin-bottom: 30px;
}

.modal_btn {
  margin-top: 80px;
  background: #000;
  cursor: pointer;
  color: #ffffff;
  border: none;
  font-size: 1rem;
  padding: 10px 25px;
  font-family: "Noto Serif";
}

.modal_btn:active {
  background: #808080;
}

.modal_closeButton {
  position: absolute;
  border: solid;
  cursor: pointer;
  top: -12px;
  right: -12px;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: white;
}
</style>