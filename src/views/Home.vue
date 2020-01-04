<template>
  <div class="container">
    <ul class="produtos">
      <li
        class="produto pointer"
        :v-if="produtos.length > 0"
        v-for="produto in produtos"
        :key="produto.id"
        @click="adicionarProduto(produto)"
      >
        <!-- <img :src="produto.imagemPath" :alt="produto.imagemPath" /> -->
        <img src="../assets/images/notebook/notebook.jpg" :alt="produto.imagemPath" class="imagem" />
        <div class="produto_conteudo">
          <h2>{{produto.nome}}</h2>
          <span>{{produto.descricao}}</span>
        </div>
        <p class="preco produto_conteudo">{{produto.preco | currency}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IProduto } from "@/store/index.ts";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "home",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["ADD_PRODUTO_NO_CARRINHO"]),
    adicionarProduto(produto: IProduto) {
      this.ADD_PRODUTO_NO_CARRINHO(produto);
    }
  },
  computed: {
    ...mapState(["produtos", "carrinho"])
  },
  created() {}
});
</script>

<style scoped>
.container {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.589) 25%, #ffffff 25%);
  background: linear-gradient(to right, #1a1a1a 25%, #ffffff 25%);
  height: 100vh;
}

.produtos {
  margin: 0px 80px 80px 80px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
}

.produto {
  color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 22% 65% 1fr;
  border-style: solid;
  border-width: 0px;
  border-color: rgba(0, 0, 0, 0.05);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  background: #ffffff;
  margin-left: 100px;
  margin-bottom: 40px;
  min-width: 600px;
  height: 120px;
}

.produto_conteudo {
  padding: 10px 10px 0 10px;
}

h2 {
  color: rgb(216, 130, 0);
  margin: 0px 0px 15px 0px;
}

span {
  /*word-wrap: break-word;*/
}

.preco {
  text-align: right;
}

.imagem {
  width: 100%;
  height: 100%;
}
</style>