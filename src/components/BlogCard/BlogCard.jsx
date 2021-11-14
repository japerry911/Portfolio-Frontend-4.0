import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

const BlogCard = ({
  imgUrl,
  title,
  link,
  subTitle,
  snippetText,
  backgroundSize,
}) => {
  const [isHoverOver, setIsHoverOver] = useState(false);
  const theme = useTheme();

  return (
    <Card
      onMouseOver={() => setIsHoverOver(true)}
      onMouseLeave={() => setIsHoverOver(false)}
      sx={{
        backgroundColor: '#FFF',
        height: '25rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 0,
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: '100%',
          maxWidth: '50%',
          position: 'absolute',
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: backgroundSize,
          backgroundPosition: 'center',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          transform: isHoverOver ? 'scale(1.3) rotate(3deg)' : 0,
          transition: 'transform 1s',
        }}
        alt="Blogpost Card"
      />
      <Grid
        item
        container
        direction="column"
        alignItem="center"
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
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bolder' }}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" align="center">
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
        <Grid item></Grid>
      </Grid>
    </Card>
  );
};

export default BlogCard;
