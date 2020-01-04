<template>
  <div>
    <ul class="produtos">
      <li
        class="produto"
        :v-if="$store.state.produtos.length > 0"
        v-for="produto in $store.state.produtos"
        :key="produto.id"
      >
        <h2>{{produto.nome}}</h2>
        <p class="preco">{{produto.preco}}</p>
        <span>{{produto.descricao}}</span>
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
  }
});
</script>

<style scoped>
.produtos {
  margin: 20px 20px 20px 20px;
  display: grid;
  grid-template-columns: 1fr;
}

.produto {
  display: grid;
  grid-template-columns: 90% 10%;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.05);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  padding: 10px 0px 10px 10px;
  margin-bottom: 20px;
  min-width: 600px;
  height: 70px;
  max-height: 100px;
}

h2 {
  color: rgb(216, 130, 0);
  margin: 0px;
}

span {
  /*word-wrap: break-word;*/
}

.preco {
  font-weight: bold;
  text-align: right;
  margin-right: 10px;
}
</style>