import React from "react";
import { Button, Typography, Tooltip } from "@mui/material";
import Chip from '@mui/material/Chip';
import { Download } from '@mui/icons-material'


function Resume(){

  const languages = [
    'JavaScript',
    'HTML',
    'CSS',
    'SQL'
  ];

  const popular = [
    'React',
    'React-Native',
    'Expo',
    'Redux',
    'Node.js',
    'Express.js',
    'Bootstrap',
    'Material UI',
    'Mantine',
  ];

  const database = [
    'NoSQL',
    'MongoDB',
    'Mongoose',
    'PostgreSQL',
    'SQLite',
    'Sequelize',
  ];

  const amazon = [
    'AWS',
    'AWS S3',
    'AWS EC2',
    'AWS DynamoDB',
    'AWS API Gateway',
    'AWS SNS',
    'AWS SQS',
    'AWS SES',
  ];

  const tools = [
    'Web Sockets',
    'Auth0',
    'OAuth',
    'RESTful APIs',
    'CRUD',
    'RBAC',
    'CI/CD',
    'Git',
    'GitHub',
    'GitHub Actions',
    'VS Code',
  ];

  const projects = [
    'Netlify',
    'Render',
    'Miro',
    'InVision',
    'Figma',
    'Canva',
    'Trello',
    'Meister',      
  ];

  const misc = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe After Effects',
    'Adobe Premiere Pro',
    'Autodesk Maya',
    'Unreal Engine',
    'Unity',      
  ]

  const softSkills = [
    'Communication',
    'Empathy',
    'Creative Thinking',
    'Problem Solving',
    'Teamwork',
    'Critical Thinking',
    'Conflict Resolution',
    'Adaptability',
    'Self-Education',
    'Interpersonal Skills',
    'Curiosity',
    'Tenacity',
    'Emotional Intelligence',
  ]


  const handleDownload = () => {
    const a = document.createElement('a');
    a.download = 'KawikaMiller_Resume.pdf';
    a.href = './assets/KMResume.pdf';
    a.click();
  }

  return(
    <>
      <section id='resume'>
        <Typography variant="h1" id='resume_header'>
          RESUME
          <Tooltip title='Download My Resume'>
            <Button onClick={handleDownload} id='download_button'>
              <Download id='download_icon' />
            </Button>          
          </Tooltip>
        </Typography>



        <Typography variant="h3">
          Languages
        </Typography>

        <div id='languages'>
          {languages.map(element => <Chip label={element} className="resume_chip"/>)}
        </div>

        <hr />

        <Typography variant="h3">
          Technical Skills
        </Typography>
        
        <div id='tech_skills'>
          <div className="sub_category">
            <Typography variant="h5">
              Popular Libraries, Frameworks, & Environments
            </Typography>
            {popular.map(element => <Chip label={element} className="resume_chip"/>)}
          </div>

          <div className="sub_category">
            <Typography variant="h5">
              Database Management
            </Typography>
            {database.map(element => <Chip label={element} className="resume_chip"/>)}
          </div>

          <div className="sub_category">
            <Typography variant="h5">
              Amazon Web Services
            </Typography>
            {amazon.map(element => <Chip label={element} className="resume_chip"/>)}
          </div>

          <div className="sub_category">
            <Typography variant="h5">
              Programming Tools & Concepts
            </Typography>
            {tools.map(element => <Chip label={element} className="resume_chip"/>)}
          </div>

          <div className="sub_category">
            <Typography variant="h5">
              Services & Project Management
            </Typography>
            {projects.map(element => <Chip label={element} className="resume_chip"/>)}
          </div>

          <div className="sub_category">
            <Typography variant="h5">
              Art, Design, & Game Dev
            </Typography>
            {misc.map(element => <Chip label={element} className="resume_chip"/>)}
          </div>

        </div>
        <hr />

        <Typography variant="h3">
          Soft Skills
        </Typography>

        <div id='soft_skills'>
          {softSkills.map(element => <Chip label={element} className="resume_chip"/>)}
        </div>
      </section>
      <br/>
      <hr/>
    </>
  )

}

export default Resume;