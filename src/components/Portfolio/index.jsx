import React from "react";
import ProjectCard from "../ProjectCard";
import { Typography } from "@mui/material";

function Portfolio(){

  const pokedexProject = {
    title: 'Pokdex Plus',
    repo: 'https://github.com/KMArtwork/pokedex',
    url: 'https://kmdevsign-pokedex.netlify.app/',
    description: 'A pokedex app made with React and Redux',
    tech: [
      'React',
      'React-Bootstrap',
      'Redux',
      'Node.js',
      'Express.js'
    ]
  }

  return(
    <section id='portfolio'>
      <Typography variant="h2" style={{textAlign: 'right'}} >
        Portfolio
      </Typography>
      <ProjectCard project={pokedexProject}/> 
    </section>
  )

}

export default Portfolio;