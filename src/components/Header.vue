<template>
  <div class="header flex">
    <img src="../assets/techno.svg" class="logo" />
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

<style scoped>
.header {
  background: rgba(0, 0, 0, 0.589);
  background: #1a1a1a;
  height: 42px;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.logo {
  height: 42px;
  width: 85px;
  padding-left: 5px;
}

.pointer {
  cursor: pointer;
}

#carrinho {
  line-height: 42px;
  text-align: center;
  color: white;
  vertical-align: middle;
  padding: 0 10px 0 5px;
}

.fa-shopping-cart {
  color: white;
  margin: 0 5px 0 5px;
}
</style>