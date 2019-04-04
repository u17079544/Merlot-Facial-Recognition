FROM heroku/heroku:16

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash - \
	&& apt-get install -y nodejs cmake

RUN apt-get install -y build-essential 
RUN apt-get install -y libx11-dev libpng-dev 
COPY package.json package.json  
RUN npm install

RUN apt-get install -y libdlib
# Add your source files
COPY . .  
CMD ["npm","start"]  
