const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = app.listen(8080, () => {
    const address = server.address();
    console.log(`listening at ${address.address}:${address.port}`);
});