const express = require('express'); //  to import express
const app = express();
const PORT = 3500;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// tells express wc template to use
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  // res.send('<h1>I love Treehouse!</h1>');
  // to use template
  res.render('index');
});

// to get cards
app.get('/cards', (req, res) => {
  // res.locals.prompt = "Who is buried in Grant's tomb?";
  res.render('card', {
    prompt: "Who is buried in Grant's tomb?",
    hint: 'Thank about whose tomb it is.'
  });
});

app.listen(PORT, () => {
  console.log(`The app is running on localhost:${PORT}!`);
});
