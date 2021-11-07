import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import NavbarTabs from '../NavbarTabs/NavbarTabs';
import NavbarDrawer from '../NavbarDrawer/NavbarDrawer';
import { Link } from 'react-router-dom';

const Navbar = ({ value }) => {
  const theme = useTheme();

  const styles = {
    appBarStyle: {
      boxShadow: 'none',
      flexGrow: 1,
    },
    logoImageStyle: {
      height: '5rem',
    },
    toolbarStyle: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    logoButtonContainerStyle: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  };

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar sx={styles.appBarStyle} color="secondary">
        <Toolbar sx={styles.toolbarStyle}>
          <Button sx={styles.logoButtonContainerStyle} component={Link} to="/">
            <img
              src="https://storage.googleapis.com/portfolio-bucket-v4-r03249384431023901/logos/white_logo_transparent_background%20(1).png"
              alt="Jack's logo"
              style={styles.logoImageStyle}
            />
          </Button>
          {!matchesMD ? (
            <NavbarTabs value={value} />
          ) : (
            <NavbarDrawer value={value} />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
