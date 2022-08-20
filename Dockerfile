#Define Base Image To Use as Core (layer 1)
FROM node:alpine

#Define Working Directory (base directory)
WORKDIR /app

#OPEN Port On the Container
ENV PORT=8080

#COPY package.json  /app/package.json

#RUN npm install

#Copy all files and directories from current location to the container 
#location  COPY  SOURCE  DESTENATION
COPY . /app

#Command To Execute when Container started
# CMD ["node", "app.js"]
# CMD  node app.js
CMD [ "node", "app.js" ]

#docker build --tag imagename  dockerfilelocation
#docker build --tag hello .
#docker run -p 8080:3000 -d --name hello  image_name
#docker stop conatiner_name
#docker ps -a
#docker start container_name
#docker logs container_name

