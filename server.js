/**	Sample instantiation
 *	Copyright(c) 2014 Jason Miller (http://github.com/developit/)
 *	Copyright(c) 2013 Christophe Hamerling <christophe.hamerling@gmail.com>
 *	MIT Licensed
 */

var app = require('./');

app.start({
	index	: !!process.env.INDEX,
	bamboo	: process.env.BAMBOO || 'https://bamboo.asterisk.org',
	port	: process.env.PORT || 3001
}, function(err) {
	console.log(err || 'Running');
});
