import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "/api/graphql/query",
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
  },
});

export default new ApolloClient({
  cache,
  link,
});
