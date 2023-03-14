<template>
  <button @click="$router.push('/')" class="main-button">Home</button>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .main-button{
    font-family: "Source Code Pro", monospace;
    background: none;
    border: 0;
    border-radius: 15px;
    color: white;
    padding: 7px;
    transition: background,color 0.5s linear;
    font-size: 20px;
    &:hover{
      background: whitesmoke;
      color: black
    }
  }
</style>
