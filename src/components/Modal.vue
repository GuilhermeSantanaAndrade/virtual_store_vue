<template>
  <div></div>

  <!-- <section class="modal" v-if="produto">
    <div class="modal_container">
      <div class="modal_img">
        <img :src="produto.img" :alt="produto.nome" />
      </div>
      <div class="modal_dados">
        <span class="modal_preco">{{produto.preco}}</span>
        <h2 class="modal_titulo">{{produto.nome}}</h2>
        <p>{{produto.descricao}}</p>
        <button class="modal_btn">Adicionar Item</button>
      </div>
    </div>
  </section>-->
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { IProduto } from "@/store/index";

export default Vue.extend({
  name: "Modal",
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapState(["produtos"])
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
  align-items: end;
  grid-gap: 50px;
  padding: 50px 50px 50px 0;
}

.modal_img {
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
</style>