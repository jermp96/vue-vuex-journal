<template>
  <button class="btn btn-primary">
    {{ isEdit ? 'Guardar' : 'Agregar' }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style lang="scss" scoped>
  button {
    border-radius: 10px;
    bottom: 20px;
    position: fixed;
    right: 20px;
  }
</style>