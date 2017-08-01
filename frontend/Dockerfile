FROM node:8
WORKDIR /src
ENV RUN_TESTS='NODE_ENV=development && npm install --silent && npm test'
COPY . /src
RUN npm install --silent && npm run build
CMD node .
