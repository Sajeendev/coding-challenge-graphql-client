import { Box, Paper, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import SearchBoxComponent from '../../components/search-box/search-box-component';
import { getLocationsAction } from '../../state/flight-search/get-locations.slice';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { globalProps } from '../../styles/global.props';
import HottestDealCardComponent from './hottest-deal-card.component';

const hottestDeals = [
  { name: 'Deal 1' },
  { name: 'Deal 2' },
  { name: 'Deal 3' },
  { name: 'Deal 4' },
  { name: 'Deal 5' },
  { name: 'Deal 6' },
];

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  /**
   * Global state
   */
  const getLocationsState = useAppSelector(state => state.getLocationsState);
  const { loading, success, data } = getLocationsState;

  /**
   * Effects
   */
  useEffect(() => {
    // Avoid calling api for every pageload to optimize performance
    !success && dispatch(getLocationsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <Box>
      {/* Header section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/home/home-header.jpeg')`,
          height: '500px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Box sx={{ ...globalProps.box1200 }}>
          <Paper
            variant="outlined"
            elevation={0}
            sx={{
              ...globalProps.paperContainer,
            }}>
            <SearchBoxComponent
              locations={data}
              isLoading={loading}
              isHomeScreen={true}
            />
          </Paper>
        </Box>
      </Box>

      {/* Hottest deals sections */}
      <Box sx={{ ...globalProps.box1200, padding: '50px 0' }}>
        <Stack direction="row" spacing={2}>
          <img
            src="/assets/images/home/fire.png"
            alt="Fire"
            style={{ maxWidth: '80px', maxHeight: '100px' }}
          />
          <Box>
            <Typography variant="h3">PRIME</Typography>
            <Typography variant="h4">HOTTEST DEALS</Typography>
          </Box>
        </Stack>

        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 350px))"
          gap={4}
          justifyContent="center"
          sx={{ margin: '50px 0', padding: '10px' }}>
          {hottestDeals.map((deal, i) => (
            <HottestDealCardComponent
              key={i}
              title={deal.name}
              imageUrl="https://source.unsplash.com/random"
              testId={`hottest-deal-${i}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
