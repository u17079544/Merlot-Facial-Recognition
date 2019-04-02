FROM heroku/heroku:16

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash - \
	&& apt-get install -y nodejs cmake

RUN apt-get install -y build-essential 
RUN apt-get install -y libx12-dev libpng-dev 
COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD ["npm","start"]  
