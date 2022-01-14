<template>
  <header>
    <img src="../assets/logo.png" alt="alura-tracker" />
    <button class="button" @click="alterarTema">{{ textoBotao }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],

  data: () => ({
    modoEscuroAtivo: false,
  }),

  computed: {
    textoBotao: function () {
      if (this.modoEscuroAtivo) return "Desativar modo escuro";
      return "Ativar modo escuro";
    },
  },

  methods: {
    alterarTema: function () {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #312e38;
  width: 100%;
  height: 100vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

header > img {
  width: 50%;
}

button {
  width: 100%;
  padding: 2rem;
  background: #ff9000;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
