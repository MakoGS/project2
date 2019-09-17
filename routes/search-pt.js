'use strict';

const { Router } = require('express');
const router = Router();
const User = require('./../models/user');

router.get('/search-pt', (req, res, next) => {
  User.find({
    role: 'personalTrainer',
    skills: {$regex : `${ req.session.user.skills }`},
    location: req.session.user.location
  })
  .then(pts => {
    res.render('pt', { pts } );
    console.log(pts)
  })
  .catch(err => console.log(err));
});

module.exports = router;