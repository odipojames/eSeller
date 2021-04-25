import gql from "graphql-tag";

export const GET_HOME_PAGE = gql`
  query singleton($name: String!) {
    singleton: singleton(name: $name)
  }
`;
