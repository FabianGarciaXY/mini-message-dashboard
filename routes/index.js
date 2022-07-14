const express = require('express');
const router = express.Router();

// Mock Data
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// GET home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message-board', messages: messages });
});


router.get('/new', (req, res) => {
  res.render('form', {title: 'New Message'});
});


router.post('/new', (req, res, next) => {
  const user = req.body.user;
  const message = req.body.message;
  messages.push({text: message, user: user, added: new Date()});
  res.redirect('/');
})

module.exports = router;
