<template>
  <header>
    <div>
      <img src="../assets/logo.png" alt="alura-tracker" />

      <nav class="panel mt-5">
        <ul>
          <li>
            <router-link :to="{ name: 'Tarefas' }" class="link">
              <i class="fas fa-tasks"> Tarefas </i>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Projetos' }" class="link">
              <i class="fas fa-project-diagram"> Projetos </i>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
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

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
  display: block;
  margin-bottom: 1rem;
}

.link:hover {
  color: #ff9000;
}

.link.router-link-active {
  color: #ff9000;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
