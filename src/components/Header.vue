<template>
  <div class="header flex">
    <img src="../assets/logo.png" />
    <div>
      <i for="carrinho" class="fa fa-shopping-cart pointer"></i>
      <span id="carrinho" class="pointer">Carrinho</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  data() {
    return {};
  }
});
</script>

<style>
.header {
  background: rgba(0, 0, 0, 0.589);
  height: 42px;
}

.flex {
  display: flex;
  justify-content: space-between;
}

img {
  max-height: 42px;
  max-width: 42px;
}

.pointer {
  cursor: pointer;
}

#carrinho {
  line-height: 42px;
  text-align: center;
  color: white;
  vertical-align: middle;
  padding: 0 5px 0 5px;
}

.fa-shopping-cart {
  color: white;
  margin: 0 5px 0 5px;
}
</style>