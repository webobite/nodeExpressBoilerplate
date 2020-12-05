[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/webobite/nodeExpressBoilerplate)
[![License MIT](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)
[![Check Github](https://badgen.net/github/checks/webobite/nodeExpressBoilerplate/main)](https://badgen.net/github/checks/webobite/nodeExpressBoilerplate/main)
----------
# Node Express Boilerplate
A Boilerplate code for node and Express Js

----------
### SOME SETUP BEFORE RUNNING THE SERVER

- Create .env file in root directory
	- Add the below code
			`PORT=3000`
- install package with npm / yarn
	- `npm install` or `yarn install`
- Run the server with below command
	- `npm start`
----------
### HOW TO USE CUSTOM LOGGER IN YOUR CODE BASE ?
As you can navigate to file `logger/index.js` It contain a custom logger file which takes the type of Log and log message to show that log in the console.

#### To use custom logger
- import the logger function in your file.
	- `const {logger} = require('./logger')`
- Pass the `type of log` along with `custom message in the log`
	- Here `type of log` will be any one of the following :
		- SUCCESS
		- ERROR
		- DEBUG
	- Call the function like this : `logger('DEBUG', "Your Custom message")`
----------
