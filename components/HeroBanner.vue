<template>
  <div
    class="home__banner"
    :style="{
      backgroundImage: `url('${all_home.url}?auto=webp ')`,
    }"
  >
    <h1 class="home__title">{{ all_home.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  props: {
    all_home: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.home {
  &__banner {
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    color: #fff;
  }
}
</style>