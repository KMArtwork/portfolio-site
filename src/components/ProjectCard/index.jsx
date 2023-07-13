import React, { useState } from "react";

import { Modal, Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent, CardMedia, Chip, Button, Typography, Box } from "@mui/material";

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

  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '1rem',
    width: 400,
    backgroundColor: 'grey',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return(
    <>
      <Card className="project_card">
        <CardMedia
          image={project.screenshots[0]}
          title='project title image'
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
                  style={{width: '1000px', height: 'auto'}}
                />              
              <Button variant="contained" onClick={() => handleImgIdx(1)}>{`>`}</Button>
            </div>
            <hr />
            <p style={{fontWeight: '400', color: 'white', lineHeight: '1.5'}}>
              {`This was one of the first major projects that I created by myself and I tried to put nearly everything that I knew/know to use here. This web app makes proxy requests to the PokeAPI through the server and then takes the response data and populates it all in the UI. All the components are functional components and all of my state management is handled with redux-toolkit. The UI is composed of React-Bootstrap components with some custom styling here and there and I even implemented some custom themes as well! I'm sure that as I continue to learn more, I will continue to see things that could be further polished and improved but I'm incredibly proud of the hard work that was put into this project and the overall result!`}
            </p>            
          </DialogContent>
      </Dialog>
    </>
  )

}

export default ProjectCard;