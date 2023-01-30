<template>
  <button class="menuButton" @click="$router.push({path: '/menu'})">Menu</button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.menuButton{
  font-family: CodePro;
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
