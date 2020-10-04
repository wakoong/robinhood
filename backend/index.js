require("dotenv").config();
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
    stocks: () =>
      fetch(
        `https://cloud.iexapis.com/stable/stock/aapl/quote?token=${process.env.IEX_CLOUD_API}`
      ).then((res) => {
        console.log(res.json());
      }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
