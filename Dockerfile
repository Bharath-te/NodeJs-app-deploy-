FROM node
WORKDIR /nodeapp
COPY req.json
RUN npm install
COPY . .
CMD ["node","server.js"]
