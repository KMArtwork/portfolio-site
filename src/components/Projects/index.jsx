import React from "react";
import ProjectCard from "../ProjectCard";
import { Typography } from "@mui/material";

import projects from '../../projects/index';

function Projects(){

  return(
    <>
      <section id='projects'>
        <Typography variant="h1" className="projects_header">
          PROJECTS
        </Typography>

        {projects.map((project, idx) => {
          if (idx + 1 !== projects.length){
            return(
              <>
                <ProjectCard project={project} />
                <hr/>              
              </>
            )
          }
          else return <ProjectCard project={project} />
        })}

      </section>
      <hr />
    </>

  )

}

export default Projects;