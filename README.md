# NodeJs-app-deploy-
node js application of hotel booking delpoyment using docker  containers
manakai python lo reuirements.txt === packagae.json
app.py ==== index.js/ server.js
=====================  Image size reduction docker file for node =========================
FROM node:19-alpine as firststage
WORKDIR /nodeapp
COPY package.json .
RUN npm install
COPY . .


FROM firststage as final
RUN npm install --production
COPY . .
CMD ["node","server.js"]
