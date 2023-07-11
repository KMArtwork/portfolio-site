import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectCard({project}){

  const handleClick = (url) => {
    window.open(
      url, "_blank");
  }

  return(
    <Card className="project_card" onClick={() => handleClick(project.repo)}>
      <CardMedia
        sx={{height: '200px'}} 
        image="https://placehold.co/200"
        title='project title image'
      />
      <CardContent>
        <Typography variant="h4">{project.title}</Typography>
        <Typography>
          {project.description}
        </Typography>
        <br></br>
        <div className='project_chips'>
          {project.tech.map(element => (
            <Chip variant="outlined" label={element} />
          ))}
        </div>
      </CardContent>
    </Card>
  )

}

export default ProjectCard;