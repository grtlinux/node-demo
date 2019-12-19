const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, world!!! 2019-12-19'));
app.listen(port, () => console.log('>>> listening port is ' + port));
