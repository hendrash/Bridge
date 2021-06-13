FROM node:latest
EXPOSE 8545 43824 443 20
WORKDIR  /truffle-typechain-example
COPY .  /truffle-typechain-example
RUN yarn install
RUN yarn run listener
