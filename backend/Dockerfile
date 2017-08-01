FROM node:8
WORKDIR /src
ENV NODE_ENV='production'
RUN npm config set strict-ssl true && \
    npm config set registry https://nexus.cgn.cleverbridge.com/repository/npm-group/
ADD . /src
RUN npm install --quiet
CMD node .
