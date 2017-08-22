const express = require('express');
const _ = require('lodash');

const app = express();

const db = [
  'Nirel',
  'Tom',
  'Dana'
];

app.get('/api/search-events', ({query: {searchedText}}, res) => {
  res.send(db.filter(x => x.includes(searchedText)));
});

const server = app.listen(8080, () => {
  const address = server.address();

  console.log(`listening at ${address.address}:${address.port}`);
});