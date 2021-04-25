## OE Marketplace 

### Getting started 
The following instructions will get a copy of market place up and running on your local machine.

#### Pre-requisites 

1. [Docker](https://www.docker.com/)

Docker will handle building an image for this service. 
  -  CMS services.
  -  data storage services 
  
### Running the application

    cd oe-marketplace (if not at the root directory)
    docker-compose up (spin up CMS services)
    yarn dev or npm run dev (spin up the application)

  
### Built With
1. [Typescript](https://www.typescriptlang.org/) - Source Laguage
2. [Eslint](https://eslint.org/) - Javascript Linter
3. [OpenApi](https://github.com/OpenAPITools/openapi-generator) - Api generation for client libraries 
4. [Nextjs](https://nextjs.org/) - Server-side rendering React framework.
