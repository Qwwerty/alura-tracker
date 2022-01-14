<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Box",
  data: () => ({
    estilos: {
      background: "#FF9000",
    },
  }),
});
</script>

