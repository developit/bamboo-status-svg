Bamboo Status SVG
=================
A web service that generates build badges for Bamboo plans.  


Example
-------
![Example Build Status](http://f.cl.ly/items/2w3v1b2u350D0318052f/Screen%20Shot%202014-05-30%20at%202.01.17%20PM.png)


As a Library
------------
*bamboo-status* is available both as a library in the NPM registry at ([https://npmjs.org/package/bamboo-status-svg](https://npmjs.org/package/bamboo-status-svg)).

Example library usage:  

```JavaScript
var status = require('bamboo-status-svg');
var options = {
	bamboo : 'https://bamboo.asterisk.org',
	port   : 3001
};

status.start(options, function(err) {
	console.log('Running.');
});
```

>	**Configuration Options:**  
>	**`bamboo`**  
>	The bamboo instance URL to connect to.  
>	*Example: `https://bamboo.example.org/`*  
>	
>	**`port`**  
>	The port to start the server on.  
>	*Defaults to the `PORT` environment variable.*  
>	
>	**`index`**  
>	If `true`, requests for `/` return a JSON description  


As a Service
------------
Out of the box, you can run `bamboo-status-svg` as a standalone service:  

```bash
# get the code:
git clone git@github.com:developit/bamboo-status-svg.git
cd bamboo-status-svg

# install dependencies
npm install

# run the server
PORT=8080 BAMBOO=bamboo.example.org npm start
```

>	**Supported Environment Variables:**  
>	**`BAMBOO`**  
>	The bamboo instance URL to connect to. *Example: `bamboo.example.org`*  
>	
>	**`PORT`**  
>	The port to start the server on.
>	
>	**`INDEX`**  
>	If `true`, requests for `/` return a JSON description  


Deploy
------
You can easily deploy `bamboo-status-svg` as an app without modifying it at all.

```bash
# get the code:
git clone git@github.com:developit/bamboo-status-svg.git
cd bamboo-status-svg

# set up a heroku app:
heroku login
heroku create

# Configure the bamboo instance to point to
heroku config:set BAMBOO=bamboo.example.org

# Deploy
git push heroku master
```


Status Image URLs
-----------------
Once running/deployed, you can get a Bamboo plan status image by passing the required information in the URL like:  
`http://HOST:PORT/status/[PLAN_NAME]`  
*Example:*  
`http://bamboo-status-svg.herokuapp.com/status/BAM-BO0`  

>	**Tip:** *Check Travis-CI's documentation on [status images](http://docs.travis-ci.com/user/status-images/) for placing these badges into a README.*


Credits
-------
bamboo-status-svg was originally based on [bamboo-status](https://github.com/chamerling/bamboo-status), by [Christophe Hamerling](http://chamerling.github.io/).


License
-------
**[MIT](http://mths.be/mit)**
