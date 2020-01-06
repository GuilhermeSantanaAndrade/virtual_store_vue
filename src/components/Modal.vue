<template>
  <section v-if="aberto" class="modal">
    <div class="modal_container">
      <button class="modal_closeButton" @click="onClose()">X</button>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Modal",
  data() {
    return {};
  },
  props: {
    aberto: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onClose() {
      this.$emit("on-close");
    }
  },
  computed: {}
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

.carrinho_produtos {
  width: 650px;
}

.carrinho_produto {
  display: grid;
  grid-template-columns: 1fr 1fr 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 30px;
}

.carrinho_dados {
  grid-column: 2;
}

.carrinho_titulo {
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}

.carrinho_remover {
  background: rgba(0, 0, 0, 0);
  color: rgba(255, 0, 0, 0.3);
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.carrinho_preco {
  text-align: right;
  padding-right: 10px;
}

.carrinho_total {
  padding-top: 20px;
  font-weight: bold;
}
</style>