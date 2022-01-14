<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa v-for="(tarefa, key) in tarefas" :key="key" :tarefa="tarefa" />
    <Box v-if="listaEstaVazia">
      <span class="mensagem-produtivo"
        >Você não está muito produtivo hoje :(</span
      >
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ITarefa } from "../interfaces/ITarefa";

import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue";

export default defineComponent({
  name: "App",

  components: { Formulario, Tarefa, Box },

  data: () => ({
    tarefas: [] as ITarefa[],
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
  },
});
</script>

