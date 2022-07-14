const express = require('express');
const router = express.Router();

// Mock Data
const messages = require('../mock.data')


// Get Home page
router.get('/', (req, res) => {
  res.render('home', {title: 'Home'});
})

// GET index page
router.get('/index', (req, res) => {
  res.render('index', { title: 'Mini Message-board', messages: messages });
});


router.get('/new', (req, res) => {
  res.render('form', {title: 'New Message'});
});


router.post('/new', (req, res, next) => {
  const user = req.body.user;
  const message = req.body.message;
  messages.push({text: message, user: user, added: new Date()});
  res.redirect('/index');
})

module.exports = router;
