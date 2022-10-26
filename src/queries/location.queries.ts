import { gql, useQuery } from '@apollo/client';

export interface LocationInterface {
  id: number;
  name: string;
}

interface LocationDataInterface {
  locations: LocationInterface[];
}

const GET_LOCATIONS = gql`
  query getLocations {
    locations {
      id
      name
    }
  }
`;

export const useLocationsQuery = () => {
  return useQuery<LocationDataInterface>(GET_LOCATIONS);
};
