import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Trail from '../../components/Trail/Trail';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import expressServer from '../../api/expressServer';

const Blogposts = () => {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    async function fetchBlogposts() {
      const response = await expressServer.get('/blogposts');
      if (response.status === 200) {
        setBlogposts(response.data);
      } else {
        console.error(
          `Error loading /projects - ${response.status}: ${response.statusText}`
        );
      }

      console.log(blogposts);
    }

    fetchBlogposts();
  }, [blogposts]);

  const styles = {
    mainContainerStyle: {
      minHeight: '100vh',
      backgroundColor: '#000',
      paddingTop: '10rem',
    },
  };

  return (
    <Grid
      container
      sx={styles.mainContainerStyle}
      direction="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Trail>
        <Typography variant="title">Blogposts</Typography>
      </Trail>
      <Divider
        light
        sx={{
          width: '90%',
          backgroundColor: '#FFF',
          marginBottom: 'auto',
          marginTop: '1rem',
        }}
      />
      <Grid item>
        <h1 style={{ color: 'white' }}>HIHIHIHIHI</h1>
      </Grid>
    </Grid>
  );
};

export default Blogposts;
