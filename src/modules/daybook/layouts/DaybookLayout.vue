<template>
  <Navbar/>
  <div class="container-fluid">
    <div v-if="isLoading" class="row justify-content-md-center">
      <div class="col-3 alert-info text-center mt-5">
        <p>Espere por favor...</p>
      </div>
    </div>
    <div v-else class="row">
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
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'DaybookLayout',
  components: {
    Navbar: defineAsyncComponent(() => import('../components/NavbarComponent.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
  },
  methods: {
    ...mapActions('journal', ['loadEntries'])
  },
  computed: {
    ...mapState('journal', ['isLoading'])
  },
  created() {
    this.loadEntries()
  }
})
</script>