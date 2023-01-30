<template>
  <ul class="filter">
    <button class="filter_btn">
      <li class="filter__item">Сначало дорогие</li>
    </button>
    <button class="filter_btn">
      <li class="filter__item">Сначало дешевые</li>
    </button>
    <button class="filter_btn">
      <li class="filter__item">По рейтингу</li>
    </button>
    <button class="filter_btn">
      <li class="filter__item">По популярности</li>
    </button>
  </ul>
</template>

<script>
export default {
  name: 'productsFilter',
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  justify-content: space-between;
  .filter_btn {
    border-radius: 10px;
    width: 200px;
    height: 40px;
    margin-top: 20px;
    .filter__item {
      color: black;
      font-family: CodePro;
      font-size: 15px;
      list-style: none;
      cursor: pointer;
    }
  }
}

</style>
