import { ALL_HOME } from "@/apollo/queries";

export default {
  actions: {
    // Getting home title and home banner
    async nuxtServerInit({ commit }, context) {
      await context.app.apolloProvider.defaultClient.query({
        query: ALL_HOME,
      })
        .then((response) => {
          commit('setHome', response.data.all_home)
        })
        .catch(e => console.log(e))
    }
  },
  state: () => ({
    all_home: {},
  }),
  mutations: {
    setHome(state, home) {
      state.all_home.title = home.items[0].title
      state.all_home.url = home.items[0].home[0].home_page.hero_bannerConnection.edges[0].node.url
      state.all_home.urlTitle = home.items[0].home[0].home_page.hero_bannerConnection.edges[0].node.title
      state.all_home.videoUrl = home.items[0].home[1].book_banner.videofileConnection.edges[0].node.url
    }
  }
}