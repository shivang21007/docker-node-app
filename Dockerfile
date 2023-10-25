FROM node:latest

WORKDIR /home/app/
COPY main.js .
COPY package.json .


RUN npm install 

EXPOSE 3000

CMD ["node","main.js"]