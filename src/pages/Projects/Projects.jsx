import React, { useState, useEffect } from 'react';
import expressServer from '../../api/expressServer';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await expressServer.get('/projects');
      if (response.status === 200) {
        setProjects(response.data);
      } else {
        console.error(
          `Error loading /projects - ${response.status}: ${response.statusText}`
        );
      }

      console.log(projects);
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
};

export default Projects;
