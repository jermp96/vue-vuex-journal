<template>
  <div>
    <h1>home</h1>
    <button @click="goToDaybook" class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  methods: {
    goToDaybook() {
      this.$router.push({name: 'no-entry'})
    }
  }
})
</script>