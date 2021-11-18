import { ALL_BOOK } from "@/apollo/queries";
import fillStateAllBookArray from '@/common'

export default {
  actions: {
  async getBooks({state, commit}) {
    await this.app.apolloProvider.defaultClient.query ({
      query: ALL_BOOK,
      variables: {
        limit: state.limit,
        skip: state.skip,
      },
    })
    .then((response) => {
      commit('getAllBooks', response.data.all_book)  
    })
    .catch(e => console.log(e))   
    }
  },
  state: () => ({
    all_book: [],
    limit: 3,
    skip: 0,
    total: 0,
  }),
  mutations: {
    getAllBooks(state,books) {
       // cleam state.all_book array 
      if (state.all_book) {
        state.all_book = []
      }
      fillStateAllBookArray(books.items, state.all_book)
      state.total = books.total
    },
    updateSkipLimit(state, values) {
      state.skip = values.skip
      state.limit = values.limit
    },
  },
}