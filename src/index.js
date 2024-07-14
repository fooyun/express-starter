const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));
app.use(cookieParser('my keys 123'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./static'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
