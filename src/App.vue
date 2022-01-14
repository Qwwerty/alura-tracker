<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BarraLateral from './components/BarraLateral.vue'

export default defineComponent({
  name: "App",
  components: { BarraLateral },
  data: () => ({
    modoEscuroAtivo: false,
  }),

  methods: {
    trocarTema: function (modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

body {
  background: #e5e5e5;
}

main {
  --bg-primario: #e5e5e5;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #312e38;
  --text-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}

.mensagem-produtivo {
  color: #fff;
}
</style>
