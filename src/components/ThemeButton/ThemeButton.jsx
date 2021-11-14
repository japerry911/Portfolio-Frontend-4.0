import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ThemeButton = ({ isHoverOver, style, link }) => {
  return (
    <Grid
      item
      sx={{
        ...style,
        boxShadow: '#6D41A1 0px 7px 14px, #6D41A1 0px 5px 5px',
        backgroundColor: 'transparent',
      }}
    >
      <Button
        component="a"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        variant="contained"
        sx={{ '&:hover': { backgroundColor: 'purple' } }}
      >
        Read More
      </Button>
    </Grid>
  );
};

export default ThemeButton;
