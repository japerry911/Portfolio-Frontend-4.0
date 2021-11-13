import React from 'react';
import { useTrail, a } from 'react-spring';
import Grid from '@mui/material/Grid';

const Trail = ({ children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 50, tension: 1000, friction: 500, duration: 1250 },
    opacity: 1,
    x: 0,
    height: 110,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Grid item>
      {trail.map(({ height, ...style }, idx) => (
        <a.div
          key={idx}
          style={{
            ...style,
            position: 'relative',
            width: '100%',
            height: '100px',
            lineHeight: '80px',
            color: '#FFF',
            fontSize: '6rem',
            fontWeight: '800',
            letterSpacing: '-0.05em',
          }}
        >
          <a.div style={{ height }}>{items[idx]}</a.div>
        </a.div>
      ))}
    </Grid>
  );
};

export default Trail;
