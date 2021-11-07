import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import { events } from '../../assets';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const AboutPage = () => {
  const styles = {
    gridContainerStyle: { width: '100%', padding: '10rem 0 0 0' },
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        backgroundColor: '#000',
        backgroundImage: `url(https://storage.googleapis.com/portfolio-bucket-v4-r03249384431023901/about/mohammad-rahmani-aZEBwDrdcSs-unsplash.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '200vh',
      }}
    >
      <Grid container item sx={styles.gridContainerStyle} alignItems="center">
        <Grid item sx={{ width: '50%' }} align="center">
          <img
            style={{ width: '40%' }}
            alt="Jack and Skylord"
            src="https://storage.googleapis.com/portfolio-bucket-v4-r03249384431023901/about/jack_perry_2%20(1).png"
          />
        </Grid>
        <Grid item sx={{ width: '50%' }}>
          <Typography variant="h1" color="primary">
            Resume
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Timeline events={events} />
      </Grid>
    </Grid>
  );
};

export default AboutPage;
