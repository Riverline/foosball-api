FROM node:6.10.2

# Install Latest Serverless Framework
RUN npm install -g serverless

# Install TypeScript
RUN npm install -g typescript ts-node

RUN npm install -g nodemon

# Npm config for TS Node. See more : https://github.com/TypeStrong/ts-node/issues/405
RUN npm config set unsafe-perm true

CMD ["nodemon"]
