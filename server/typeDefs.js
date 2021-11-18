import { gql } from 'apollo-server-express';

// const typeDefs = gql`
//   type User {
//     id: Int
//     name: String
//     age: Int
//   }
//   type Query {
//     users(age: Int): [User]
//   }
// `;

const typeDefs = gql`

type node {
  title: String
  url: String
}

type edges {
  node: node
}

type cover_imageConnection {
  edges: edges
}

type system {
  uid: String
}

type items{
  title: String
  system: system

}

type ALL_BOOK {
  total: Int
  items: [items] 
}

type Query {
  all_book (limit: Int, skip: Int): ALL_BOOK
} 
`;

export default typeDefs;