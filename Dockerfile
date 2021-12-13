FROM node:12-alpine
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers \
  autoconf automake make nasm \
  python3 \
  git \
  libpng-dev \
  libtool \
  && ln -sf python3 /usr/bin/python \
  && npm install --quiet node-gyp serve -g

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i

COPY . ./
EXPOSE 3000

CMD [ "npm", "run", "start" ]
