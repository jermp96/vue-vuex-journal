<template>
  <div class="entry-list-container">
   <div class="px-2 pt-2">
    <input v-model="term" type="text" class="form-control" placeholder="buscar entrada">
   </div>
   <div class="mt-2 d-flex flex-column">
    <button
    @click="$router.push({name: 'entry', params: {id: 'new'}})"
    class="btn btn-primary mx-3">
      Nueva entrada
    </button>
   </div>
   <div class="entry-scrollarea">
     <Entry
     v-for="entry in entriesByTerm"
     :key="entry.id" 
     :entry="entry"/>
   </div>
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },
  data() {
    return {
      term: ''
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntriesByTerm']),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term)
    }
  }
})
</script>

<style lang="scss" scoped>
  .entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
  }

  .entry-scrollarea{
    height: calc(100vh - 120px);
    overflow-y: scroll;
  }
</style>