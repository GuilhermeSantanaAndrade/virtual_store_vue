<template>
  <div class="container">
    <ul class="produtos">
      <li
        class="produto"
        :v-if="$store.state.produtos.length > 0"
        v-for="produto in $store.state.produtos"
        :key="produto.id"
      >
        <img :src="produto.imagemPath" :alt="produto.imagemPath" />
        <div>
          <h2>{{produto.nome}}</h2>
          <span>{{produto.descricao}}</span>
        </div>
        <p class="preco">{{produto.preco}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home",
  data() {
    return {};
  },
  methods: {},
  computed: {}
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
  display: grid;
  grid-template-columns: 21% 70% 10%;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.05);

  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  padding: 10px 0px 10px 10px;
  margin-bottom: 40px;
  min-width: 600px;
  height: 70px;
  max-height: 100px;
}

h2 {
  color: rgb(216, 130, 0);
  margin: 0px 0px 15px 0px;
}

span {
  /*word-wrap: break-word;*/
}

.preco {
  font-weight: bold;
  text-align: right;
  padding-right: 30px;
}
</style>