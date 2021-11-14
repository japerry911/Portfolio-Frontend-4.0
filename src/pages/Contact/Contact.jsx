import React from 'react';
import Grid from '@mui/material/Grid';
import Trail from '../../components/Trail/Trail';
import LottieCard from '../../components/LottieCard/LottieCard';
import { contactLottie } from '../../assets';

const ContactPage = () => {
  const styles = {
    gridContainerStyle: { width: '100%', padding: '5rem 0 20rem 0' },
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        backgroundColor: '#000',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.5)), url(https://storage.googleapis.com/portfolio-bucket-v4-r03249384431023901/contact/jared-brashier-6WPcf5D1XdA-unsplash.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        padding: '10rem',
      }}
    >
      <Grid
        container
        item
        sx={styles.gridContainerStyle}
        justifyContent="center"
      >
        <LottieCard
          refId={contactLottie.refId}
          logoFile={contactLottie.logoFile}
          title={contactLottie.title}
          textContent={contactLottie.textContent}
          small={true && contactLottie.small}
          isCard={false}
        />
        <Trail>
          <span>Get</span>
          <span>In</span>
          <span>Touch</span>
        </Trail>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
