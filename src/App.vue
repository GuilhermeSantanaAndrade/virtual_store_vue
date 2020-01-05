<template>
  <div id="app">
    <Header />
    <transition appear name="fade">
      <Message />
    </transition>
    <transition appear name="fade">
      <Modal />
    </transition>
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "@/services/api";
import Modal from "@/components/Modal.vue";
import Header from "@/components/Header.vue";
import Message from "@/components/Message.vue";
import Home from "@/views/Home.vue";

import { mapActions } from "vuex";

export default Vue.extend({
  name: "app",
  components: {
    Modal,
    Header,
    Home,
    Message
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
  box-sizing: border-box;
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

/* SLIDE ANIMATION */

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-to {
  transition: opacity 0.3s;
}

.v-enter-to {
  animation: slide 0.3s;
}

.v-leave-to {
  animation: slide 0.3s reverse;
}

@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0px, 0);
  }
}

/* FADE ANIMATION */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
