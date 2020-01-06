<template>
  <div>
    <div v-if="mostrando" class="container" :style="{background: bgColor}">
      <button class="close_button" @click="ocultar()">x</button>
      {{mensagem}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EventBus } from "@/main.ts";

export default Vue.extend({
  name: "Message",
  data() {
    return {
      mostrando: false,
      mensagem: "",
      bgColor: "#FFF"
    };
  },
  methods: {
    ocultar(timeout: number = 0) {
      this.mostrando = false;
    },
    mostrar(
      msg: string,
      timeout: number = 3000,
      tipoMsg: "success" | "warning" | "error" = "success"
    ) {
      switch (tipoMsg) {
        case "success": {
          this.bgColor = "rgb(0, 199, 10)";
          break;
        }
        case "warning": {
          this.bgColor = "rgb(196, 199, 0)";
          break;
        }
        case "error": {
          this.bgColor = "rgb(199, 0, 10)";
          break;
        }
        default: {
          this.bgColor = "rgb(0, 199, 10)";
        }
      }

      this.mensagem = msg;
      this.mostrando = true;
      setTimeout(() => {
        this.ocultar();
      }, timeout);
    }
  },
  created() {
    EventBus.$on("show-message", (event: any) => {
      this.mostrar(event.msg, event.timeout, event.tipoMsg);
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
  background: #fff;
  width: 300px;
  line-height: 50px;
  justify-content: center;
  align-items: center;
}

.close_button {
  background: rgba(0, 0, 0, 0);
  color: white;
  padding: 3px 9px 3px 3px;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 1rem;
}
</style>
