import express, { json, urlencoded } from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import typeDefs from './typeDefs';
// import resolvers from './resolvers';
const server = new ApolloServer({ typeDefs });
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(json())
app.use(urlencoded({ extended: true }))
// app.use(server.getMiddleware())
server.start().then(res => {
  server.applyMiddleware({ app });
 })
export default app;