<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>
  
      <div>
        <button
        v-if="entry.id"
        @click="onDeleteEntry" class="btn btn-danger mx-2">Borrar</button>
        <button class="btn btn-primary mx-2">Subir foto</button>
      </div>
    </div>
  
    <hr>
    
    <div class="d-flex flex-column px-3 h-75">
      <textarea  v-model="entry.text" placeholder="Qué sucudió hoy?"></textarea>
    </div>
  
    <img src="https://images.unsplash.com/photo-1682685794690-dea7c8847a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80" alt="entry-picture" class="img-thumbnail">
  </template>

  <Fab :isEdit="true" @on:click="saveEntry"/>

</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import swal from 'sweetalert2';
import getDayMonthYear from '../helpers/getDayMonthYear';
import type { Entry } from '../store/journal/state';

export default defineComponent({
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      entry: null
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    }
  },
  methods: {
    ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
    loadEntry() {
      let entry: Entry;
      if(this.id === 'new'){
        entry = {
          text: 'nueva entrada',
          date: new Date().toDateString()
        }
      }
      if(this.id !== 'new') {
        entry = this.getEntryById(this.id);
        if(!entry) {
          return this.$router.push({name: 'no-entry'});
        }
      }
      this.entry = entry;
    },
    async saveEntry() {
      new swal({
        title: 'Espere por favor',
        allowOutsideClick: false
      });
      swal.showLoading();

      if(this.entry.id) {
        await this.updateEntry({...this.entry});
      }
      if(!this.entry.id) {
       const entryId = await this.createEntry({...this.entry});
       this.$router.push({name: 'entry', params: {id: entryId}});
      }
      swal.fire('Guardado', 'Entrada registrada con éxito', 'success');
    },
    async onDeleteEntry() {
      const result = await swal.fire({
        title: 'estás seguro?',
        text: 'Una vez borrado, no se puede recuperar',
        showDenyButton: true,
        confirmButtonText: 'Sí, estoy seguro'
      });

      if(result.isConfirmed) {
        new swal({
        title: 'Espere por favor',
        allowOutsideClick: false
       });
       swal.showLoading();
       await this.deleteEntry(this.entry.id);
       this.$router.push({name: 'no-entry'});

       swal.fire('Elimnado', '', 'success');
      }
    }
  },
  created() {
      this.loadEntry();
  },

  watch: {
    id(value, oldValue) {
     this.loadEntry()
    }
  }
})
</script>

<style lang="scss" scoped>
  textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
      outline: none;
    }
  }

  img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: (#000000), $alpha: 0.2);
  }
</style>