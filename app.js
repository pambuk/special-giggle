const express = require('express');
const expressNunjucks = require('express-nunjucks');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressMongoDb = require('express-mongo-db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const isDev = app.get('env') === 'development';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressMongoDb('mongodb://localhost:27017/receipts'));

// nunjucks setup
app.set('views', __dirname + '/views');
expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});

// MongoClient.connect('mongodb://localhost:27017/receipts', function (err, client) {
//   if (err) {
//      throw err;
//   }
//
//   app.set('db', client.db('receipts'));
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
