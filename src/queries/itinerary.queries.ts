import { gql, useQuery } from '@apollo/client';

export interface ItineraryInterface {
  arrivalDate: string;
  departureDate: string;
  arrivalLocation: string;
  departureLocation: string;
  carrier: string;
  price: number;
}

interface ItineraryDataInterface {
  itineraries: ItineraryInterface[];
}

const GET_ITINERARIES = gql`
  query getItineraries {
    itineraries {
      id
      carrier
      arrivalLocation
      departureLocation
      arrivalDate
      departureDate
      price
    }
  }
`;

export function useItineraryQuery() {
  return useQuery<ItineraryDataInterface>(GET_ITINERARIES);
}
