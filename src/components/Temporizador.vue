<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />

    <button class="button" @click="iniciar">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>

    <button class="button" @click="finalizar">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Temporizador",

  components: { Cronometro },

  data: () => ({
    tempoEmSegundos: 0,
    cronometro: 0,
  }),

  methods: {
    iniciar: function (): void {
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },

    finalizar: function () {
      clearInterval(this.cronometro);
    },
  },
});
</script>
