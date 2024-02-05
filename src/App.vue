<template>
  <div class="w-screen h-screen relative select-none max-h-screen overflow-y-auto overflow-x-hidden">
    <div class="flex flex-col" id="contentWrapper">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>


<script setup lang="ts">



</script>

