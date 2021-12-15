import React, { useState, useEffect } from 'react';
import expressServer from '../../api/expressServer';
import Grid from '@mui/material/Grid';
import Trail from '../../components/Trail/Trail';
import Typography from '@mui/material/Typography';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Divider from '@mui/material/Divider';
import { sleep } from '../../utils';

const mockProject = {
  _id: '',
};

const Projects = () => {
  const [projects, setProjects] = useState([].fill(mockProject, 0, 6));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const response = await expressServer.get('/projects');
      if (response.status === 200) {
        setProjects(response.data);
        await sleep(1000);
        setIsLoading(false);
      } else {
        console.error(
          `Error loading /projects - ${response.status}: ${response.statusText}`
        );
      }
    }

    fetchProjects();
  }, []);

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
      height: '25rem',
      width: '45%',
      marginTop: '10rem',
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden',
      boxShadow: '#6D41A1 0px 14px 28px, #6D41A1 0px 10px 10px',
      backgroundColor: '#FFF',
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
        <Typography variant="title">Projects</Typography>
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
        {projects.map((projectObject) => (
          <Grid item key={projectObject._id} sx={styles.blogCardStyle}>
            <ProjectCard
              projectObject={projectObject}
              skeletonMode={isLoading}
            />
            )
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
