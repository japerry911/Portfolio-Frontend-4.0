import React from 'react';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import Grid from '@mui/material/Grid';
import Trail from '../../components/Trail/Trail';

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
          <Grid
            item
            container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '55%', height: '20rem', paddingTop: '10rem' }}
          >
            <Trail>
              <span>I am</span>
              <span>Jack Perry,</span>
              <span>a Software Engineer</span>
            </Trail>
          </Grid>
        </Grid>
      </BackgroundVideo>
    </>
  );
};

export default HomePage;
