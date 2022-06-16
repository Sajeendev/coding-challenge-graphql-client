import { Circle, Flight, FlightLand, FlightTakeoff } from '@mui/icons-material';
import { Box, Fab, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { ItineraryDataInterface } from '../../state/flight-search/get-itineraries.slice';
import { globalProps } from '../../styles/global.props';

interface PropTypes {
  data: ItineraryDataInterface;
}

const ResultItemComponent = ({ data }: PropTypes) => {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{ ...globalProps.paperContainer, margin: '40px 0' }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  fontSize: '14px',
                }}>
                Departure
              </Typography>
              <Circle sx={{ color: 'text.secondary', height: 10 }} />
              <Typography color="text.secondary">{data?.carrier}</Typography>
            </Stack>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography>
                  {data?.departureDate?.dayOfMonth}/
                  {data?.departureDate?.month + 1}/{data?.departureDate?.year}
                </Typography>
                <Typography>
                  {data?.departureDate.hourOfDay}:{data?.departureDate.minute}
                </Typography>
                <FlightTakeoff color="secondary" />
                <Typography> {data?.departureLocation}</Typography>
              </Box>
              <Flight sx={{ color: 'text.secondary' }} />
              <Box>
                <Typography>
                  {data?.arrivalDate?.dayOfMonth}/{data?.arrivalDate?.month + 1}
                  /{data?.arrivalDate?.year}
                </Typography>
                <Typography>
                  {data?.arrivalDate.hourOfDay}:{data?.arrivalDate.minute}
                </Typography>
                <FlightLand color="secondary" />
                <Typography> {data?.arrivalLocation}</Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              height: '100%',
            }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              $ {data?.price}
            </Typography>
            <Fab
              color="primary"
              variant="extended"
              sx={{ width: '100%', maxWidth: '250px' }}
              size="medium">
              Select
            </Fab>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ResultItemComponent;
