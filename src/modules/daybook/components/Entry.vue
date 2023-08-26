<template>
  <div class="entry-container mb-3 pointer p-2">
    <!--Entry titulo-->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">26</span>
      <span class="mx-1 fs-5">Agosto</span>
      <span class="mx-2 fw-light">2023, Sábado </span>
    </div>

    <div class="entry-description">
      Fugiat consectetur commodo duis quis nisi velit pariatur id occaecat ullamco dolor. Aliquip ullamco nostrud consequat voluptate anim velit officia ut sint commodo ut irure velit minim. Laborum culpa consequat reprehenderit nisi deserunt do irure enim irure anim. Dolore enim aliquip ex dolor aute in qui laborum. Fugiat ea pariatur ipsum voluptate amet occaecat labore velit ipsum elit proident velit amet. Nostrud duis aute aute dolor eu incididunt culpa voluptate. Culpa ad irure fugiat mollit nisi esse pariatur consequat elit proident sint.
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  
})
</script>

<style lang="scss">
  .entry-container{
    border-bottom: 1px solid #2ce350;
    transition: 0.2s all ease-in;
    &:hover{
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }

    .entry-description{
      font-size: 12px;
    }
  }
</style>