import React from 'react';
import useTheme from '@mui/material/styles/useTheme';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import routesArray from '../../router/routesArray';
import { Link } from 'react-router-dom';

const NavbarTabs = ({ value }) => {
  const theme = useTheme();

  const styles = {
    tabsStyle: {
      width: '50%',
      '& .MuiTabs-flexContainer': {
        justifyContent: 'space-between',
      },
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
            sx={{ width: `${100 / routesArray.length}` }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default NavbarTabs;
