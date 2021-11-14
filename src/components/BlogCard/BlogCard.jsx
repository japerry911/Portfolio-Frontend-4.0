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
        <Skeleton
          component="div"
          animation="wave"
          width="50%"
          height="100%"
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
        />
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
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" align="left">
            {subTitle}
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
        <Grid item>
          <Typography variant="body1">{snippetText}</Typography>
        </Grid>
        <ThemeButton
          style={{ alignSelf: 'flex-end', margin: 'auto 2rem 2rem auto' }}
          isHoverOver={isHoverOver}
          link={link}
        />
      </Grid>
    </Card>
  );
};

export default BlogCard;
