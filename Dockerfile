FROM heroku/heroku:16

RUN apt-get install -y npm

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD ["npm","start"]  
