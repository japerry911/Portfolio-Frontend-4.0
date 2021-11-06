import React from 'react';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const NavDrawer = () => {
  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <List>
        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavDrawer;
