import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import useTheme from '@mui/material/styles/useTheme';
import routesArray from '../../router/routesArray';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavbarDrawer = ({ value }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const styles = {
    drawerStyle: {
      '& .MuiDrawer-paper': {
        backgroundColor: theme.palette.secondary.dark,
        width: '50%',
        [theme.breakpoints.down('xs')]: {
          width: '70%',
        },
      },
    },
    drawerItemSelectedStyle: {
      '& .MuiListItemText-root': {
        opacity: 1,
      },
    },
    drawerItemTextStyle: {
      color: '#fff',
      opacity: 0.7,
      fontSize: '1.5rem',
    },
    toolbarMargin: {
      marginBottom: '2rem',
    },
    drawerIconContainerStyle: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  };

  return (
    <>
      <Drawer
        open={open}
        sx={styles.drawerStyle}
        onClose={() => setOpen(false)}
      >
        <List disablePadding>
          {routesArray.map((routeObject, idx) => (
            <ListItem
              key={`${routeObject.name}-${idx}`}
              divider
              button
              component={Link}
              to={routeObject.link}
              classes={{ selected: styles.drawerItemSelectedStyle }}
              onClick={() => setOpen(false)}
              selected={value === routeObject.index}
            >
              <ListItemText disableTypography sx={styles.drawerItemTextStyle}>
                {routeObject.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={styles.drawerIconContainerStyle}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default NavbarDrawer;
