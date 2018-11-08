![CF](http://i.imgur.com/7v5ASc8.png) LAB - TOPIC
=================================================


## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files
* You've been provided a server code with the authentication middleware, models and routes scaffolded in. There are some potential bugs and missing logic.
* Work with a partner!

## Assignment
###### Requirements
* Create a code/data path map of the authentication system on a whiteboard
* Print and document the code/data path from the source code provided 
* **CODE:** Protect the `/api/v1/:model/schema` route by requiring user authentication

###### Testing
* In addition to the current test suite, write a test to ensure that access to the protected route is restricted if you do not login with basic authentication or a bearer token

###### Stretch Goal:
* Add support for Basic and Bearer Authentication to RESTy 

##  Documentation
Include your travis badge at the top of your `README.md` file
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.
Submit images of your whiteboard and a hard copy of the code map as part of this assignment. If you can take a clear picture of the code map, that will suffice.


# Lab 13 -- Authentication and Authorization

## Overview

This lab implements access through a user/password system.  The password goes through an encryption proccess and login is required to reach the '/schemas' route.  A new folder named auth was created to contain all modules relevent to the authorization process.

## Modules and Exports/Imports

#### /auth/model.js
This module takes in the npm packages mongoose, bcrypt, and jsonwebtoken.  The model includes a schema for Users and is exported through mongoose.model().

#### /auth/router.js
this module takes in the model and middleware in the /auth directory.  Two routes, '/signup' and '/signin' are exported from here.  The '/signup' route generates a token based on the password given by the user.  '/signin' is ran through the auth modules and a cookie is given if properly authorized.

#### /auth/middleware.js
This module imports the user model and exports an anonymous function with the logic needed to run authentiation and authorization.

#### app.js
This will now pull in /auth/router.js in order to bring in the authorization routes.

#### api/v1.js
This now imports auth/middleware.js in order to run authorization checks on specific routes.  Checks have been applied to the '/schema' route.