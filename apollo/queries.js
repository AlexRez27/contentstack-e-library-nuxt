import gql from 'graphql-tag';

const ALL_BOOK = gql`
query ALL_BOOK($limit: Int!, $skip: Int!) {
  all_book (limit: $limit, skip: $skip)  {
    total
    items {
      title
      available
      system {
        uid
      }
      cover_imageConnection {
        edges {
          node {
            title
            url(transform: {height: "150", width: "100"})
          }
        }
      }
    }
  }
}
`;

const ALL_HOME = gql`
query ALL_HOME {
  all_home {
    items {
      home {
        ... on HomeHomeBookBanner {
          __typename
          book_banner {
            videofileConnection {
              edges {
                node {
                  url
                }
              }
            }
          }
        }
        ... on HomeHomeHomePage {
          __typename
          home_page {
            hero_bannerConnection {
              edges {
                node {
                  url
                  title
                }
              }
            }
          }
        }
      }
      title
    }
  }
  }
`;

export {
  ALL_BOOK,
  ALL_HOME,
};
