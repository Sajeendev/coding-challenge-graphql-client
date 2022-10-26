import { Box, Paper } from '@mui/material';
import SearchBoxComponent from '../../components/search-box/search-box-component';
import { RectangularSkeletonComponent } from '../../components/skeletons/skeleton.component';
import { useItinerariesQuery } from '../../queries/itinerary.queries';
import { useLocationsQuery } from '../../queries/location.queries';
import { useAppSelector } from '../../state/store';
import { globalProps } from '../../styles/global.props';
import { isEqualDates } from '../../utils/date.utils';
import ResultItemComponent from './result-item.component';

const ResultScreen = () => {
  const {
    data: locationsData,
    error: locationsError,
    loading: locationsLoading,
  } = useLocationsQuery();

  const {
    data: itinerariesData,
    error: itinerariesError,
    loading: itinerariesLoading,
  } = useItinerariesQuery();

  const searchParamsState = useAppSelector(state => state.searchParamsState);
  const { params } = searchParamsState;

  if (locationsLoading || itinerariesLoading) {
    return <div>Loading...</div>;
  }

  if (locationsError || itinerariesError) {
    return <div>An error occurred</div>;
  }

  if (!itinerariesData || !locationsData) return <div>No data!</div>;

  return (
    <Box sx={{ ...globalProps.box1200 }}>
      <Paper
        variant="outlined"
        elevation={0}
        sx={{
          ...globalProps.paperContainer,
          marginBottom: '20px',
        }}
      >
        <SearchBoxComponent
          locations={locationsData}
          isLoading={locationsLoading}
          isHomeScreen={false}
        />
      </Paper>

      {itinerariesLoading ? (
        <RectangularSkeletonComponent height={700} />
      ) : (
        itinerariesData?.itineraries
          ?.filter(data =>
            params?.departureLocation
              ? data?.departureLocation === params?.departureLocation
              : data
          )
          ?.filter(data =>
            params?.arrivalLocation
              ? data?.arrivalLocation === params?.arrivalLocation
              : data
          )
          ?.filter(data =>
            params?.departureDate
              ? isEqualDates(data?.departureDate, params?.departureDate)
              : data
          )
          .sort((a, b) => a.price - b.price)
          ?.map((data, i) => <ResultItemComponent data={data} key={i} />)
      )}
    </Box>
  );
};

export default ResultScreen;
