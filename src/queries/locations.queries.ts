import { gql, useQuery } from '@apollo/client';

export interface LocationInterface {
  id: number;
  name: string;
}

interface LocationDataInterface {
  locations: LocationInterface[];
}

const GET_LOCATIONS = gql`
  query getClients {
    locations {
      id
      name
    }
  }
`;

export function useLocationQuery() {
  return useQuery<LocationDataInterface>(GET_LOCATIONS);
}
