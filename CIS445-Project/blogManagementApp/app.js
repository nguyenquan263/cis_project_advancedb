const PORT = 8080;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var blogRouter = require('./routes/blog');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.get('/', (req, res) => {
    res.send('hello world');
});
app.use('/blog', blogRouter);

app.listen(PORT);
console.log('This api is running on port: ' + PORT);