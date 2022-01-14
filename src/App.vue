<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa v-for="(tarefa, key) in tarefas" :key="key" :tarefa="tarefa" />
        <Box v-if="listaEstaVazia">
          <span class="mensagem-produtivo"
            >Você não está muito produtivo hoje :(</span
          >
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ITarefa } from "./interfaces/ITarefa";

import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import Box from "./components/Box.vue";

export default defineComponent({
  name: "App",

  components: { BarraLateral, Formulario, Tarefa, Box },

  data: () => ({
    tarefas: [] as ITarefa[],
    modoEscuroAtivo: false,
  }),

  computed: {
    listaEstaVazia: function (): boolean {
      return this.tarefas.length === 0;
    },
  },

  methods: {
    salvarTarefa: function (tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },

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
