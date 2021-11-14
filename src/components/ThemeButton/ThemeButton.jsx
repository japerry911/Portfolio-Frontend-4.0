import React, { Fragment } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';

const ThemeButton = ({ link, skeletonMode }) => {
  return (
    <Fragment>
      {skeletonMode ? (
        <Skeleton variant="rectangular" width="7rem" />
      ) : (
        <Button
          component="a"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          variant="contained"
          sx={{
            '&:hover': { backgroundColor: 'purple' },
          }}
        >
          'Read More'
        </Button>
      )}
    </Fragment>
  );
};

export default ThemeButton;
