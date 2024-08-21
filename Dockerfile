#<image>:<version>
FROM node:20.11.1

WORKDIR /Users/notso/portfolio/

COPY public/ /Users/notso/portfolio/public
COPY src/ /Users/notso/portfolio/src
COPY package.json/ /Users/notso/portfolio/package.json

RUN npm install

CMD ["npm", "start"]

