<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
