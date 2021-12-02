<template>
  <div class="bookpage">
    <div>
      <video class="video" controls muted autoplay
          :src="all_home.videoUrl">
      </video >
    </div>
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
      <p> <b>{{ author.title }}</b> </p>
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
import { mapState } from "vuex";

export default {
  name: "Book",
  data() {
    return {
      poster: {},
      book: {},
      loading: true,
      author: {},
      video: {}
    };
  },
    computed: {
    ...mapState({
      all_home: (state) => state.all_home,
    }),
  },
  async mounted() {
    this.book = await Stack.getEntrie("book", this.$route.params.uid); // get single book entrie
    this.author = await Stack.getEntrie(this.book.author[0]._content_type_uid, this.book.author[0].uid); // get author
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
.video {
  height: 300px;
}
</style>
