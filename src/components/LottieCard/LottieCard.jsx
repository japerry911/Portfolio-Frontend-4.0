import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useScrollPosition } from '../../hooks/hooks';

const LottieCard = ({ refId, logoFile, title, textContent }) => {
  const item = useRef();
  const [loadAnimation, setLoadAnimation] = useState(false);
  const [prevLoadAnimation, setPrevLoadAnimation] = useState(false);
  const [anim, setAnim] = useState(undefined);

  const checkPosition = (el) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight + 400 || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    setAnim(
      lottie.loadAnimation({
        container: document.querySelector(`#${refId}`),
        animationData: logoFile,
        autoplay: true,
        loop: false,
        renderer: 'svg',
      })
    );
  }, []);

  useEffect(() => {
    console.log(prevLoadAnimation);
    if (loadAnimation && prevLoadAnimation) {
      anim.play();
      setPrevLoadAnimation(false);
    } else if (!loadAnimation && anim) {
      anim.stop();
      setPrevLoadAnimation(true);
    }
  }, [loadAnimation]);

  useEffect(() => setLoadAnimation(checkPosition(item.current)), []);

  useScrollPosition(() => setLoadAnimation(checkPosition(item.current)));

  return (
    <Card ref={item} sx={{ height: '30rem', width: '30rem', padding: '1rem' }}>
      <CardMedia
        component="div"
        id={refId}
        sx={{ height: '20rem', width: '20rem' }}
        alt={refId}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{textContent}</Typography>
      </CardContent>
    </Card>
  );
};

export default LottieCard;
