import { Box, Paper, Stack, Typography } from '@mui/material';
import SearchBoxComponent from '../../components/search-box/search-box-component';
import { useLocationsQuery } from '../../queries/location.queries';
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
  const { box1200, paperContainer } = globalProps;

  const { data, error, loading } = useLocationsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }

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
        }}
      >
        <Box
          sx={{
            ...box1200,
            height: '450px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paper
            variant="outlined"
            elevation={0}
            sx={{
              ...paperContainer,
              width: '100%',
            }}
          >
            <SearchBoxComponent
              locations={data?.locations}
              isLoading={loading}
              isHomeScreen={true}
            />
          </Paper>
        </Box>
      </Box>

      {/* Hottest deals sections */}
      <Box sx={{ ...box1200, padding: '50px 0' }}>
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
          sx={{ margin: '50px 0', padding: '10px' }}
        >
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
