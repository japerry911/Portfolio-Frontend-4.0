import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Trail from '../../components/Trail/Trail';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import expressServer from '../../api/expressServer';
import BlogCard from '../../components/BlogCard/BlogCard';

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
      padding: '10rem 0',
    },
    cardContainerStyle: {
      marginBottom: 'auto',
      width: '100%',
    },
    blogCardStyle: {
      width: '45%',
      marginTop: '10rem',
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden',
      boxShadow: '#6D41A1 0px 14px 28px, #6D41A1 0px 10px 10px',
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
          margin: '2rem 0',
        }}
      />
      <Grid
        item
        container
        styles={styles.cardContainerStyle}
        justifyContent="space-around"
      >
        {blogposts.map((blogObject, idx) => (
          <Grid item key={blogObject._id} sx={styles.blogCardStyle}>
            <BlogCard
              backgroundSize={
                [3, 4, 5, 6, 10, 9].includes(idx) ? 'contain' : 'cover'
              }
              title={blogObject.title}
              imgUrl={blogObject.imgUrl}
              link={blogObject.link}
              subTitle="Opening a Door to the Future"
              snippetText={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.'
              }
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Blogposts;
