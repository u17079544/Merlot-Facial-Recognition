FROM heroku/heroku:16

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash - \
	&& apt-get install -y nodejs cmake build-essential libx11-dev libpng-dev libdlib-dev

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD ["npm","start"]  
