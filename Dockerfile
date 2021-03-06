FROM wordpress:latest

RUN apt-get -y update
RUN apt-get install -y gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g
RUN npm install yarn -g

WORKDIR /var/www/html/wp-content/themes/ago-theme
COPY ./ago-theme/package.json ./
RUN yarn install
# CMD [ "yarn", "build:dev" ]
