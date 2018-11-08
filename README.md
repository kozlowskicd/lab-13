[![Build Status](https://travis-ci.com/kozlowskicd/lab-13.svg?branch=master)](https://travis-ci.com/kozlowskicd/lab-13)
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