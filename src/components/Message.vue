<template>
  <div v-if="mostrando" class="container">{{mensagem}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { EventBus } from "@/main.ts";

export default Vue.extend({
  name: "Message",
  data() {
    return {
      mostrando: false,
      mensagem: ""
    };
  },
  methods: {
    ocultar(timeout: number = 0) {
      setTimeout(() => {
        this.mostrando = false;
      }, timeout);
    },
    mostrar(msg: string, timeout: number = 3000) {
      this.mensagem = msg;
      this.mostrando = true;
      this.ocultar(timeout);
    }
  },
  created() {
    EventBus.$on("show-message", (event: any) => {
      this.mostrar(event.msg, event.timeout);
    });
  }
});
</script>

<style scoped>
.container {
  display: flex;
  position: absolute;
  right: 25px;
  top: 25px;
  color: white;
  z-index: 999;
  background: rgb(0, 199, 10);
  width: 300px;
  line-height: 50px;
  justify-content: center;
  align-items: center;
}
</style>
