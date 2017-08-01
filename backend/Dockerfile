FROM node:8
WORKDIR /src
ENV NODE_ENV='production'
ADD . /src
RUN npm install --quiet
CMD node .
