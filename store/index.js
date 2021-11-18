import { ALL_HOME } from "@/apollo/queries";

export default {
  actions: {
    // Getting home title and home banner
    async nuxtServerInit({commit}, context) {
      await context.app.apolloProvider.defaultClient.query ({
        query: ALL_HOME,
      })
      .then((response) => {
        commit('setHome', response.data.all_home.items[0])  
      })
      .catch(e => console.log(e))   
    }
  },
  state: () => ({
    all_home: {}
  }),
  mutations: {
    setHome(state,home) {
      state.all_home.title = home.title
      state.all_home.url = home.hero_bannerConnection.edges[0].node.url
      state.all_home.urlTitle = home.hero_bannerConnection.edges[0].node.title
    }
  }
}