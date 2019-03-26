FROM node:8.11.1

# create app directory
WORKDIR /home/app

# copy current folder
COPY . .

# change working directory
WORKDIR /home/app/server

# npm install
RUN npm install

EXPOSE 8000
CMD [ "npm", "start" ]