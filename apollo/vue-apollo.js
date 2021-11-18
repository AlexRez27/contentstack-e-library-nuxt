import { createHttpLink, InMemoryCache } from '@apollo/client/core';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: `https://graphql.contentstack.com/stacks/${process.env.VUE_APP_CONTENTSTACK_API_KEY}?environment=${process.env.VUE_APP_CONTENTSTACK_ENVIRONMENT}`,
  headers: {
    access_token: `${process.env.VUE_APP_CONTENTSTACK_DELIVERY_TOKEN}`,
  }
});

// Cache implementation
const cache = new InMemoryCache();

export default () => ({
  link: httpLink,
  cache,
  defaultHttpLink: false
})
