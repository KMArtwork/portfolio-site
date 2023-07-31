import React, { useState } from "react";

import { Dialog, DialogTitle, DialogContent, Card, CardContent, CardMedia, Chip, Button, Typography } from "@mui/material";

function ProjectCard({project}){

  const [showModal, setShowModal] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const handleClick = (url) => {
    window.open(
      url, "_blank");
  }

  const handleImgIdx = (value) => {
    const newIdx = imgIdx + value;
    
    if (newIdx >= project.screenshots.length){
      console.log(newIdx);
      setImgIdx(0)
    } else if (newIdx < 0){
      console.log(newIdx);
      setImgIdx(project.screenshots.length - 1)
    } else {
      console.log(newIdx);
      setImgIdx(newIdx)
    }
  }

  return(
    <>
      <Card className="project_card">
        <CardMedia
          image={project.logo ? project.logo : project.screenshots[0]}
          title='project title image'
          className={project.logo ? 'contain' : 'cover'}
        />
        <CardContent>
          <div className="project_header">
            <Typography variant="h4">{project.title}</Typography>
            <div className="project_buttons">
              <Button variant="contained" onClick={() => handleClick(project.repo)}>Repo</Button>
              <Button variant="contained" disabled={project.url ? false : true} onClick={() => handleClick(project.url)}>Site</Button>
              <Button variant="contained" onClick={() => setShowModal(true)}>Info</Button>              
            </div>
          </div>

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

      <Dialog open={showModal} onClose={() => setShowModal(!showModal)} maxWidth={'lg'} fullWidth >
        <DialogTitle style={{backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'space-between'}}>
          {project.title}
          <div className="project_buttons">
            <Button style={{margin: '0 0.5rem'}} variant="contained" onClick={() => handleClick(project.repo)}>Repo</Button>
            <Button style={{margin: '0 0.5rem'}} variant="contained" disabled={project.url ? false : true} onClick={() => handleClick(project.url)}>Site</Button>             
          </div>
        </DialogTitle>
          <DialogContent style={{backgroundColor: '#142a30', padding: '1rem'}}>
            <div className="image_carousel" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <Button variant="contained" onClick={() => handleImgIdx(-1)}>{`<`}</Button>
                <img
                  src={project.screenshots[imgIdx]}
                  title='screenshot from project'
                  alt={`screenshot of project ${project.title}`}
                  style={{width: 'auto', height: '500px'}}
                />              
              <Button variant="contained" onClick={() => handleImgIdx(1)}>{`>`}</Button>
            </div>
            <hr />
            <p style={{fontWeight: '400', color: 'white', lineHeight: '1.5'}}>
              {project.summary}
            </p>            
          </DialogContent>
      </Dialog>
    </>
  )

}

export default ProjectCard;