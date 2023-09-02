<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">Borrar</button>
      <button class="btn btn-primary mx-2">Subir foto</button>
    </div>
  </div>

  <hr>
  
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Qué sucudió hoy?"></textarea>
  </div>

  <Fab :isEdit="true"/>
  <img src="https://images.unsplash.com/photo-1682685794690-dea7c8847a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80" alt="entry-picture" class="img-thumbnail">

</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
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