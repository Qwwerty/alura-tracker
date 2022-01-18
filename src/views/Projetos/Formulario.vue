<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { defineComponent } from "vue";
import { useStore } from "../../store";
import useNotificador from "../../hooks/notificador";
import { ADICIONA_PROJETO, ALTERA_PROJETO } from "../../store/tipo-mutacoes";

export default defineComponent({
  name: "Formulario",

  props: {
    id: {
      type: String,
    },
  },

  data: () => ({
    nomeDoProjeto: "",
  }),
  mounted: function () {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id === this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },

  methods: {
    salvar: function () {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }

      this.nomeDoProjeto = "";
      this.notificar(
        TipoNotificacao.SUCESSO,
        "Excelente!",
        "O projeto foi cadastrado com sucesso!"
      );
      this.$router.push({ name: "Projetos" });
    },
  },
  setup: function () {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>

<style scoped>
.title {
  color: var(--text-primario);
}

.label {
  color: var(--text-primario);
}
</style>
