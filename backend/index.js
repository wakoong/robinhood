const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Stock {
    id: ID!
  }

  type Query {
    stocks: Stock!
  }
`;

const resolvers = {
  Query: {
    stocks: () => stocks,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
