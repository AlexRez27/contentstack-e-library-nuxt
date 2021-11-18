<template>
  <div>
    <button
      class="waves-effect waves-light btn"
      @click="prevPage"
      :disabled="pageNumber === 0"
    >
      Previous
    </button>
    <button
      class="waves-effect waves-light btn"
      @click="nextPage"
      :disabled="pageNumber >= pageCount - 1"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return { pageNumber: this.initialPageNumber || 0 };
  },
  props: {
    totalpages: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    initialPageNumber: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods: {
    async changePage() {
      const params = {
        limit: this.size,
        skip: this.pageNumber * this.size,
      };
      // updating skip & limit parameters
      this.$store.commit("books/updateSkipLimit", params);
      // get new list of books for the next/previous page
      await this.$store.dispatch("books/getBooks");
    },
    nextPage() {
      this.pageNumber += 1;
      this.changePage();
    },
    prevPage() {
      this.pageNumber -= 1;
      this.changePage();
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalpages / this.size);
    },
  },
};
</script>

<style scoped>
button {
  width: 120px;
  margin-right: 10px;
}
</style>
