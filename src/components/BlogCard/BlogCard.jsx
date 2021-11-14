import React, { useState, Fragment } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventIcon from '@mui/icons-material/Event';
import ThemeButton from '../../components/ThemeButton/ThemeButton';

const BlogCardDetailsList = ({ isHoverOver, tags, date }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: isHoverOver ? 0 : '-100%',
        transition: 'left .5s',
        color: '#FFF',
        padding: '2px',
        width: '50%',
        fontSize: '90rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <List>
        <ListItem>
          <ListItemIcon sx={{ color: '#FFF' }}>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary={date} color="#FFF" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#FFF' }}>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary={'#'.concat(tags.join(', #'))} color="#FFF" />
        </ListItem>
      </List>
    </Box>
  );
};

const BlogCard = ({
  imgUrl,
  title,
  link,
  subTitle,
  snippetText,
  backgroundSize,
  skeletonMode,
  tags,
  date,
}) => {
  const [isHoverOver, setIsHoverOver] = useState(false);
  const theme = useTheme();

  return (
    <Card
      onMouseOver={() => setIsHoverOver(true)}
      onMouseLeave={() => setIsHoverOver(false)}
      sx={{
        backgroundColor: '#FFF',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 0,
      }}
    >
      {!skeletonMode ? (
        <Fragment>
          <CardMedia
            component="div"
            sx={{
              height: '100%',
              width: '50%',
              position: 'absolute',
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: backgroundSize,
              backgroundPosition: 'center',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              transform: isHoverOver ? 'scale(1.3) rotate(3deg)' : 0,
              transition: 'transform 2s',
            }}
            alt="Blogpost Card"
          />
          <BlogCardDetailsList
            isHoverOver={isHoverOver}
            tags={tags}
            date={date}
          />
        </Fragment>
      ) : (
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
      )}
      <Grid
        item
        container
        direction="column"
        justifyContent="flex-start"
        sx={{
          paddingTop: '1rem',
          paddingLeft: '1rem',
          width: '50%',
          height: '100%',
          backgroundColor: '#FFF',
          position: 'relative',
          zIndex: 1,
          '&::before': {
            content: '""',
            background: '#FFF',
            width: '30px',
            position: 'absolute',
            left: '-10px',
            top: 0,
            bottom: 0,
            zIndex: -1,
            transform: 'skewX(-3deg)',
          },
        }}
      >
        <Grid item>
          <Typography variant="h5" align="left" sx={{ fontWeight: 'bolder' }}>
            {skeletonMode ? <Skeleton width="60%" /> : title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" align="left">
            {skeletonMode ? <Skeleton width="80%" /> : subTitle}
          </Typography>
          <Divider
            sx={{
              width: '10%',
              height: '6px',
              borderRadius: 60,
              margin: '2rem 0',
              backgroundColor: theme.colors.themePurple,
            }}
          />
        </Grid>
        <Grid item sx={{ width: '100%' }}>
          <Typography variant="body1">
            {skeletonMode ? (
              <Fragment>
                <Skeleton width="80%" />
                <Skeleton width="80%" />
                <Skeleton width="80%" />
                <Skeleton width="80%" />
                <Skeleton width="80%" />
                <Skeleton width="80%" />
                <Skeleton width="60%" />
              </Fragment>
            ) : (
              snippetText
            )}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            boxShadow: '#6D41A1 0px 7px 14px, #6D41A1 0px 5px 5px',
            backgroundColor: 'transparent',
            alignSelf: 'flex-end',
            margin: 'auto 2rem 2rem auto',
          }}
        >
          <ThemeButton link={link} skeletonMode={skeletonMode} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default BlogCard;
