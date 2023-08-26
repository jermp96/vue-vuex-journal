<template>
  <Navbar/>
  <div class="container-fluid">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'DaybookLayout',
  components: {
    Navbar: defineAsyncComponent(() => import('../components/NavbarComponent.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
  }
})
</script>