import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useScrollPosition } from '../../hooks/hooks';

const EventItem = ({ date, content, role, company, location }) => {
  const timeItem = useRef();
  const [isVisible, setIsVisible] = useState(true);

  const checkPosition = (el) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => setIsVisible(checkPosition(timeItem.current)), []);

  useScrollPosition(() => setIsVisible(checkPosition(timeItem.current)));

  return (
    <ListItem ref={timeItem} className={isVisible ? 'inView' : null}>
      <Box component="section">
        <ListItemText>
          {date.from} - {date.to}
        </ListItemText>
        <ListItemText>{role}</ListItemText>
        <ListItemText>{company}</ListItemText>
        <ListItemText>{location}</ListItemText>
        <ListItemText>{content}</ListItemText>
      </Box>
    </ListItem>
  );
};

const Timeline = (props) => {
  const styles = {
    articleStyle: {
      backgroundColor: '#000',
      minHeight: '100vh',
      width: '100%',
      '& ul': {
        marginBottom: '100px',
        paddingBottom: 0,
        '& li': {
          display: 'block',
          backgroundColor: '#FFF',
          listStyleType: 'none',
          padding: '30rem 2.5px 0 2.5px',
          position: 'relative',
          margin: '0 auto',
          width: '4px',
          '&:first-of-type': {
            padding: '0 2.5px 0 2.5px',
          },
          '&:first-of-type': {
            padding: 0,
          },
          '&::after': {
            backgroundColor: 'inherit',
            borderRadius: '50%',
            bottom: '7px',
            content: '""',
            height: '15px',
            left: '50%',
            position: 'absolute',
            transform: 'translateX(-50%)',
            width: '15px',
            transition: 'background 1.25s ease-in-out',
          },
          '& section': {
            borderRadius: 3,
            backgroundColor: '#FFF',
            boxShadow: '#6D41A1 14px 14px 28px, #6D41A1 0px 10px 10px',
            bottom: 0,
            color: '#000',
            position: 'relative',
            padding: '10px 15px 15px',
            width: '400px',
            opacity: 0,
            transition:
              'transform 1.25s ease-in-out, opacity 1.25s ease-in-out',
            '&::before': {
              borderStyle: 'solid',
              bottom: '7px',
              content: '""',
              position: 'absolute',
              height: 0,
              width: 0,
            },
          },
          '&:nth-of-type(odd) section': {
            left: '45px',
            transform: 'translate3d(200px, 0, 0)',
            '&::before': {
              borderWidth: '8px 16px 8px 0',
              borderColor: 'transparent #FFF transparent transparent',
              left: '-15px',
            },
          },
          '&:nth-of-type(even) section': {
            left: '-439px',
            transform: 'translate3d(-200px, 0, 0)',
            '&::after': {
              borderWidth: '8px 0 8px 16px',
              borderColor: 'transparent transparent transparent #FFF',
              right: '-15px',
              borderStyle: 'solid',
              bottom: '7px',
              content: '""',
              position: 'absolute',
              height: 0,
              width: 0,
            },
            '&::before': {
              borderWidth: '8px 0 8px 16px',
              borderColor: 'transparent transparent transparent #000',
              right: '-25px',
              bottom: '-1px',
            },
          },
          '&.inView::after': {
            backgroundColor: '#6D41A1',
          },
          '&.inView section': {
            opacity: 1,
            transform: 'none',
            visibility: 'visible',
          },
        },
      },
    },
  };

  const makeTimeline = (events) => {
    const evlist = events.map((item, idx) => {
      return (
        <EventItem
          date={item.date}
          content={item.content}
          role={item.role}
          company={item.company}
          location={item.location}
          key={idx}
        />
      );
    });
    return <List sx={{}}>{evlist}</List>;
  };

  return (
    <Box component="article" sx={styles.articleStyle}>
      <List>{makeTimeline(props.events)}</List>
    </Box>
  );
};

export default Timeline;
