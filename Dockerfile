FROM heroku/heroku:16

RUN curl -sL https://deb.nodesource.com/setup_11.x | -E bash - \
	&& apt-get install -y nodejs 

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD ["npm","start"]  
