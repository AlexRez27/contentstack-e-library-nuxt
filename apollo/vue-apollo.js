import { createHttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch'; 
import { from } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import ApolloClient from 'apollo-boost'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: `https://graphql.contentstack.com/stacks/${process.env.VUE_APP_CONTENTSTACK_API_KEY}?environment=${process.env.VUE_APP_CONTENTSTACK_ENVIRONMENT}`,
  headers: {
    access_token: `${process.env.VUE_APP_CONTENTSTACK_DELIVERY_TOKEN}`,
  },
  fetch
});

const ssrMiddleware = setContext((_, { headers }) => {
  if (process.client) return headers
  return {
    headers
  }
})

// Cache implementation
const cache = new InMemoryCache();
const link = from([ssrMiddleware, httpLink])

// Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// });

// const apolloProvider = createApolloProvider({
//   defaultClient: apolloClient,
// });

// export {
//   apolloProvider as default,
// };

export default () => ({
  link,
  cache,
  defaultHttpLink: false
})
