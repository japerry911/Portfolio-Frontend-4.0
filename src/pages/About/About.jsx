import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import { events } from '../../assets';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LottieCard from '../../components/LottieCard/LottieCard';
import { lotties } from '../../assets';

const AboutPage = () => {
  const styles = {
    gridContainerStyle: { width: '100%', padding: '5rem 0 10rem 0' },
    gridSkillItemStyle: { width: '35%', marginTop: '10rem' },
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
        backgroundAttachment: 'fixed',
        minHeight: '200vh',
        padding: '10rem 0',
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
      <Grid item>
        <Typography variant="h1" color="primary">
          Skills
        </Typography>
      </Grid>
      <Grid
        container
        item
        sx={{ width: '100%', minHeight: '30rem' }}
        justifyContent="space-around"
      >
        {lotties.map((lottieObj, idx) => (
          <Grid
            item
            sx={styles.gridSkillItemStyle}
            key={`lottie-${idx}`}
            align="center"
          >
            <LottieCard
              refId={lottieObj.refId}
              logoFile={lottieObj.logoFile}
              title={lottieObj.title}
              textContent={lottieObj.textContent}
              small={true && lottieObj.small}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default AboutPage;
