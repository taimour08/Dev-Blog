'use client';

import { useQuery } from '@apollo/client';
import { GET_PROFILE } from '@/graphql/queries';

export default function Profile() {
  const { data, loading, error } = useQuery(GET_PROFILE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {data.users[0].email}</p>
    </div>
  );
}
