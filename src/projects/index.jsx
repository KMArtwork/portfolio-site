const pokedexClient = {
  title: 'Pokedex Plus (Client)',
  repo: 'https://github.com/KMArtwork/pokedex',
  url: 'https://kmdevsign-pokedex.netlify.app/',
  description: 'Allows the user to query the PokeAPI and displays the results in a UI that is styled after the Gen 1, Kanto Pokedex.',
  tech: [
    'React',
    'React-Bootstrap',
    'Redux Toolkit',
  ],
  features: [
    'Basic Pokemon Info',
    'Team Builder',
    'Items Tab'
  ]
}

const pokedexServer = {
  title: 'Pokedex Plus (Server)',
  repo: 'https://github.com/KMArtwork/pokedex-backend',
  url: false,
  description: 'The backend for my Pokedex Plus app. Features include user authorization and authentication, cookies, and datab',
  tech: [
    'Node.js',
    'Express.js',
    'JWT',
    'Mongoose',
    'MongoDB',
  ],
  features: [
    'User Authorization and Authentication',
    'Access & Refresh Tokens as HTTP only cookies',
    "Bearer Auth protected routes for database management of user's teams"
  ]
}

const plantPal = {
  title: 'PlantPal',
  repo: 'https://github.com/clueless-caterpillars/plant-water-pi',
  url: 'https://github.com/clueless-caterpillars/plant-water-pi',
  description: 'A mobile app that allows a user to remotely water their plants using a raspberry pi and various sensors that monitor humidity, soil moisture, and temperature.',
  tech: [
    'React Native',
    'Expo',
    'AWS',
    'Mongoose',
    'MongoDB',
    'Raspberry Pi',
  ]
}

const projects = [
  pokedexClient,
  pokedexServer,
  plantPal
];

export default projects;