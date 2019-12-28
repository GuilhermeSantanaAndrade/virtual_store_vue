<template>
  <div id="app">
    <ul>
      <li
        :v-if="$store.state.produtos.length > 0"
        v-for="produto in $store.state.produtos"
        :key="produto.id"
      >{{produto.descricao}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "./services/api";

export default Vue.extend({
  data() {
    return {
      teste: "testando"
    };
  },
  async created() {
    this.$store.dispatch("getProdutos");
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
