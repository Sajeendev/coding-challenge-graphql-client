import { Box, Paper } from '@mui/material';
import SearchBoxComponent from '../../components/search-box/search-box-component';
import { RectangularSkeletonComponent } from '../../components/skeletons/skeleton.component';
import { useLocationQuery } from '../../queries/locations.queries';
import { useAppSelector } from '../../state/store';
import { globalProps } from '../../styles/global.props';
import { isEqualDates } from '../../utils/date.utils';
import ResultItemComponent from './result-item.component';

const ResultScreen = () => {
  const { data, error, loading } = useLocationQuery();

  const getItinerariesState = useAppSelector(
    state => state.getItinerariesState
  );
  const {
    loading: itinerariesLoading,
    success: itinerariesSuccess,
    data: itinerariesData,
  } = getItinerariesState;

  const searchParamsState = useAppSelector(state => state.searchParamsState);
  const { params } = searchParamsState;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }
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
          locations={data}
          isLoading={loading}
          isHomeScreen={false}
        />
      </Paper>

      {itinerariesLoading ? (
        <RectangularSkeletonComponent height={700} />
      ) : (
        itinerariesSuccess &&
        itinerariesData
          ?.filter(data =>
            params.departureLocation
              ? data?.departureLocation === params.departureLocation
              : data
          )
          ?.filter(data =>
            params.arrivalLocation
              ? data?.arrivalLocation === params.arrivalLocation
              : data
          )
          ?.filter(data =>
            params.departureDate
              ? isEqualDates(data?.departureDate, params.departureDate)
              : data
          )
          .sort((a, b) => a.price - b.price)
          ?.map((data, i) => <ResultItemComponent data={data} key={i} />)
      )}
    </Box>
  );
};

export default ResultScreen;
