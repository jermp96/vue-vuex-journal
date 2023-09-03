<template>
  <Navbar/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <EntryList/>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'DaybookLayout',
  components: {
    Navbar: defineAsyncComponent(() => import('../components/NavbarComponent.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
  },
  methods: {
    ...mapActions('journal', ['loadEntries'])

  },
  created() {
    this.loadEntries()
  }
})
</script>