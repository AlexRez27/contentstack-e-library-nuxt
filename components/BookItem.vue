<template>
  <nuxt-link class="list" :to="toSingleBook">
    <div class="collection list">
      <a class="collection-item">
        <img :src="book.url" :alt="book.title" />
        <h5>{{ book.title }}</h5>
      </a>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    toSingleBook() {
      return `/${this.book.uid}`;
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & a {
    text-align: center;
    width: 100%;
  }
}
</style>
