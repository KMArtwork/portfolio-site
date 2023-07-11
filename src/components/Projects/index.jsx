import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import { Typography } from "@mui/material";

import {pokedexClient, pokedexServer, plantPal} from '../../projects/index';

function Projects(){

  return(
    <section id='projects'>
      <Typography variant="h1" className="projects_header">
        PROJECTS
      </Typography>
      <ProjectCard project={pokedexClient}/>
      <ProjectCard project={pokedexServer}/> 
      <ProjectCard project={plantPal}/> 
    </section>
  )

}

export default Projects;