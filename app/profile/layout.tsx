'use client';

import { useQuery } from '@apollo/client/react';
import { GET_PROFILE } from '@/graphql/queries';

export default function Profile() {
  const { data, loading, error } = useQuery(GET_PROFILE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Title: {data.users[0].Title}</p>
    </div>
  );
}
