## SETUP dev
- install:
  - `cp ~/.npmrc ./config/.npmrc`
  - `docker-compose run --rm script npm i`
  - `docker-compose run build`
- test:
  - `docker-compose run script npm test`
- run:
  - `docker-compose up script`
- build image:
  - `npm run build:docker`


## SETUP prod
- install:
  - add path to sshkey in docker-compose.prod.yml
- run:
  - `docker login micsregistry.azurecr.io`
  - `docker-compose -f docker-compose.prod.yml up`