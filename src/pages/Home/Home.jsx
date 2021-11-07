import React from 'react';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <>
      <BackgroundVideo>
        <Grid
          sx={{
            position: 'absolute',
            top: '0',
            color: '#f1f1f1',
            width: '100%',
            height: '100%',
          }}
          container
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid item />
          <Grid item sx={{ paddingRight: '10%' }}>
            <Grid
              sx={{ height: '8rem' }}
              item
              container
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h3">
                  Hi
                  <span style={{ color: '#000', fontWeight: 'bolder' }}>
                    .
                  </span>{' '}
                  I am <b>Jack Perry</b>
                  <span style={{ color: '#000', fontWeight: 'bolder' }}>
                    ,
                  </span>{' '}
                  a <b>Developer</b>
                </Typography>
              </Grid>
              <Grid item sx={{ width: '35%' }}>
                <Button
                  sx={{ width: '100%' }}
                  color="secondary"
                  variant="contained"
                  size="large"
                >
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BackgroundVideo>
    </>
  );
};

export default HomePage;
