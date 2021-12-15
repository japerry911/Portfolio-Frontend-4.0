import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

const ProjectCard = ({
  projectObject,
  skeletonMode,
  setSelectedProjectObject,
  setDialogOpen,
}) => {
  const theme = useTheme();

  const styles = {
    cardActionAreaStyle: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    mediaStyle: {
      objectFit: 'contain',
      paddingTop: '3rem',
    },
    cardStyle: {
      padding: '2rem',
      height: '25rem',
      width: '100%',
      opacity: 0.75,
      transition: '350ms ease-in',
      '&:hover': {
        opacity: 1,
      },
      [theme.breakpoints.down('md')]: {
        width: '85%',
        margin: '1rem',
      },
    },
    fontStyle: {
      textAlign: 'center',
    },
  };

  const handleClick = () => {
    setSelectedProjectObject(projectObject);
    setDialogOpen(true);
  };

  return (
    <Card sx={styles.cardStyle}>
      <CardActionArea onClick={handleClick} sx={styles.cardActionAreaStyle}>
        {skeletonMode ? (
          <Fragment>
            <Skeleton
              component="div"
              animation="wave"
              variant="rectangular"
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </Fragment>
        ) : (
          <Fragment>
            <CardMedia
              sx={styles.mediaStyle}
              component="img"
              alt={`${projectObject.title}-Preview-Image`}
              height="100%"
              image={projectObject.imgUrl}
              title={projectObject.title}
            />
          </Fragment>
        )}
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
