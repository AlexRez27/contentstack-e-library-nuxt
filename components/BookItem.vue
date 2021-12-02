<template>
  <nuxt-link :class="{ disabled: !book.isAvailable }" class="list" :to="toSingleBook">
    <div class="collection list">
      <a class="collection-item">
        <img :src="book.url" :alt="book.title" />
        <h5>{{ book.title }}</h5>
        <p class="" v-show="!book.isAvailable"> Out of stock </p>
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
  }
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

.disabled {
   pointer-events: none;
   & h5 {
    color: lightgrey;
   }
}
</style>
