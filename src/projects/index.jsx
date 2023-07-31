const pokedexClient = {
  title: 'Pokedex Plus (Client)',
  repo: 'https://github.com/KMArtwork/pokedex',
  url: 'https://kmdevsign-pokedex.netlify.app/',
  description: 'The frontend of my Pokedex Plus app. This app allows the user to make proxy requests to the PokeAPI through the server and displays the response data in a UI that is styled after the Gen I, Kanto Pokedex. It also features a Team Builder component that allows you to theory craft different builds and save them to an online database!',
  summary: `This was one of the first major projects that I created by myself and I tried to put nearly everything that I knew/know to use here. All the components are functional components and all of my state management is handled with redux-toolkit. The UI is composed of React-Bootstrap components with some custom styling here and there and I even implemented some custom themes as well! I'm sure that as I continue to learn more, I will continue to see things that could be further polished and improved but I'm incredibly proud of the hard work that was put into this project and the overall result!`,
  tech: [
    'React',
    'React-Bootstrap',
    'Redux Toolkit',
  ],
  features: [
    'Basic Pokemon Info',
    'Team Builder',
    'Items Tab'
  ],
  screenshots: [
    require('../assets/pokedex_main.jpg'),
    require('../assets/pokedex_teambuilder.jpg'),
    require('../assets/pokedex_items.jpg'),
  ]
}

const pokedexServer = {
  title: 'Pokedex Plus (Server)',
  repo: 'https://github.com/KMArtwork/pokedex-backend',
  url: false,
  description: ' This handles all of the user authorization & authentication, database management, access tokens (JWTs), as well as Bearer Auth protected routes for database management of user\'s teams.',
  summary: 'Unfortunately, there are no screenshots to share since this is a backend repository - so enjoy this picture of my dog instead! I tried to put mostly everything that I knew about backend development to use in this repo and in the process I also learned a lot about things like HTTP only cookies and refresh token rotation!',
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
  ],
  screenshots: [
    require('../assets/star.jpg')
  ],
  logo: require('../assets/backendicon.png')
}

const plantPal = {
  title: 'PlantPal',
  repo: 'https://github.com/clueless-caterpillars/plant-water-pi',
  url: 'https://github.com/clueless-caterpillars/plant-water-pi',
  description: 'A mobile app that allows a user to remotely water their plants using a raspberry pi and various sensors that monitor humidity, soil moisture, and temperature.',
  summary: 'This was a mobile app that I built with a handful of my peers. I was responsible for a lot of what you see on the frontend - which I\'ve included screenshots of. All of our data was being collected from various sensors that were hooked up to a Raspberry Pi and that data was then sent to various Amazon Web Services. I was responsible for making the requests that would fetch the data and then populating that data onto the various React Native components within our app. Additionally, I designed the initial mockup for the aesthetic of our app and then made that become a reality. I learned so much about mobile development in such a small amount of time and the entire team was such an incredible group to work with.',
  tech: [
    'React Native',
    'Redux Toolkit',
    'Expo',
    'AWS',
    'Mongoose',
    'MongoDB',
    'Raspberry Pi',
  ],
  features: [

  ],
  screenshots: [
    require('../assets/plantpal_home.jpg'),
    require('../assets/plantpal_main.jpg'),
    require('../assets/plantpal_history.jpg'),
    require('../assets/plantpal_logs.jpg'),
  ],
  logo: require('../assets/plantpal_logo.png'),
}

const allMart = {
  title: 'All-Mart',
  repo: 'https://github.com/KMArtwork/storefront',
  url: 'https://kmdev-storefront.netlify.app/',
  description: 'An mock e-commerce website that fetches all products and product categories from a server and renders them to the screen - complete with a landing page, cart, and checkout page.',
  summary: 'This was another solo project that allowed me to test my understanding of React, React Router, and Redux-Toolkit. Using the Material UI library, every product and product category is fetched from a server and then conditionally rendered to the web page as cards. Users are able to all products or view products by their specified categories. Each product card has a "details" button which will display a page with more detailed information about the product. Users can also add various items to their cart, modify the quantity of the items as they see fit, and see their total before proceeding to checkout. This is not an actual ecommerce site so there are a few features &/o components of the website that are purely placeholders.',
  tech: [
    'React',
    'React Router',
    'Redux-Toolkit',
    'Material UI',
  ],
  features: [

  ],
  screenshots: [
    require('../assets/allmart_landing.png'),
    require('../assets/allmart_productview.png'),
    require('../assets/allmart_sidecart.png'),
    require('../assets/allmart_checkout.png'),
    require('../assets/allmart_categoryfilter.png'),
    require('../assets/allmart_categories.png'),
  ]
}

const projects = [
  pokedexClient,
  pokedexServer,
  plantPal,
  allMart
];

export default projects;