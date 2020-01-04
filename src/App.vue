<template>
  <div id="app">
    <Header />
    <Modal />
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "@/services/api";
import Modal from "@/components/Modal.vue";
import Header from "@/components/Header.vue";
import Home from "@/views/Home.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "app",
  components: {
    Modal,
    Header,
    Home
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getProdutos"])
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

* {
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
</style>
