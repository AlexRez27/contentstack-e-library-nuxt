<template>
  <div class="bookpage">
    <div class="poster">
      <Loader v-if="loading" />
      <img
        v-else
        height="600"
        width="500"
        :src="`${book.cover_image.url}?auto=webp`"
        :alt="book.cover_image.title"
      />
    </div>
    <div class="info">
      <h5>{{ book.title }}</h5>
      <span> {{ book.number_of_pages }} pages </span>
      <p class="flow-text">{{ book.description_new }}</p>
    </div>
    <nuxt-link to="/" class="waves-effect waves-light btn-large">
      Home
    </nuxt-link>
  </div>
</template>

<script>
import Stack from "@/plugins/contentstack.js";

export default {
  name: "Book",
  data() {
    return {
      poster: {},
      book: {},
      loading: true,
    };
  },
  async mounted() {
    this.book = await Stack.getEntrie("book", this.$route.params.uid); // get single book entrie
    this.loading = false;
  },
};
</script>

<style scoped>
.bookpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}
</style>
