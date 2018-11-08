'use strict';

import express from 'express';

const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';


authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then((user) => {
      req.token = user.generateToken();
      req.user = user;
      res.cookie('auth', req.token);
      res.redirect('/');
    }).catch(next);
});

authRouter.post('/signin', auth, (req, res, next) => {
  console.log(req.user, req.token);
  res.cookie('auth', req.token);
  res.redirect('/');
});

export default authRouter;