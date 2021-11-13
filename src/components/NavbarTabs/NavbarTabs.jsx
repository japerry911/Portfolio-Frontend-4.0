import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import routesArray from '../../router/routesArray';
import { Link } from 'react-router-dom';

const NavbarTabs = ({ value }) => {
  const styles = {
    tabsStyle: {
      width: '50%',
      '& .MuiTabs-flexContainer': {
        justifyContent: 'space-between',
      },
    },
    tabStyle: {
      color: '#FFF',
      width: `${100 / routesArray.length}`,
    },
  };

  return (
    <>
      <Tabs value={value} sx={styles.tabsStyle}>
        {routesArray.map((routeObject, idx) => (
          <Tab
            key={idx}
            component={Link}
            to={routeObject.link}
            label={routeObject.name}
            sx={styles.tabStyle}
          />
        ))}
      </Tabs>
    </>
  );
};

export default NavbarTabs;
