// graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      author_id
      created_at
    }
  }
`;
