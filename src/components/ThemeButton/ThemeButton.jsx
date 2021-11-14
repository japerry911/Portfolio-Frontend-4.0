import React, { Fragment } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const ThemeButton = ({
  link,
  skeletonMode,
  text,
  component,
  variant,
  onClick,
  type,
  isDisabled = false,
}) => {
  const theme = useTheme();

  return (
    <Fragment>
      {skeletonMode ? (
        <Skeleton variant="rectangular" width="7rem" />
      ) : (
        <Button
          onClick={onClick}
          component={component}
          href={component === 'a' ? link : null}
          rel="noopener noreferrer"
          target="_blank"
          variant={variant}
          sx={{
            '&:hover': { backgroundColor: theme.colors.themePurple },
          }}
          type={type || 'button'}
          disabled={isDisabled}
        >
          {text}
        </Button>
      )}
    </Fragment>
  );
};

export default ThemeButton;
