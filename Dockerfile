#Define Base Image To Use as Core (layer 1)
FROM node:alpine

#Define Working Directory (base directory)
WORKDIR /app

#OPEN Port On the Container
ENV PORT=80

#COPY package.json  /app/package.json

#RUN npm install

#Copy all files and directories from current location to the container 
#location  COPY  SOURCE  DESTENATION
COPY . /app

#Command To Execute when Container started
# CMD ["node", "app.js"]
# CMD  node app.js
CMD [ "node", "app.js" ]
