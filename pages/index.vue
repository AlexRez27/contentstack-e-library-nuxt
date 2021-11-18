<template>
  <div class="home">
    <HeroBanner :all_home="all_home" />
    <BookItem
      class="home__bookitem"
      v-for="book of all_book"
      :key="book.uid"
      :book="book"
    >
    </BookItem>
    <Pagination
      :size="limit"
      :totalpages="total"
      :initialPageNumber="skip / limit"
    />
  </div>
</template>

<script>
import BookItem from "@/components/BookItem.vue";
import Pagination from "@/components/Pagination.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import { mapState } from "vuex";

export default {
  components: {
    BookItem,
    Pagination,
    HeroBanner,
  },
  // if home page loaded after visiting book lending page,
  // then mount home page from the same pagination page
  async mounted() {
    await this.$store.dispatch("books/getBooks");
    if (this.$route.params.limit) {
      await this.getData({
        limit: this.limit,
        skip: this.skip,
      });
    }
  },
  computed: {
    ...mapState({
      all_book: (state) => state.books.all_book,
      limit: (state) => state.books.limit,
      skip: (state) => state.books.skip,
      total: (state) => state.books.total,
      all_home: (state) => state.all_home,
    }),
  },
  methods: {
    // function for passing graphql query to pagination component
    // and for updating skip and limit properties from pagination component
    // go to book lending page
    toSingleBook(param) {
      this.$router.push({ name: `book:uid`, params: param });
    },
  },
};
</script>

<style lang='scss' scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__banner {
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__bookitem {
    width: 100%;
  }
}
</style>
