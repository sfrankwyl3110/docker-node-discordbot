const fs = require('fs')
const path = require('path')
const express = require('express')

const HTTPErrors = require('http-errors');
const HTTPStatuses = require('statuses');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');

const errorHandler = require('./middleware/error-handler');
const { HttpErrorHandler } = require('./middleware/http-errorHandler')

const app = express();

app.use(logger('common', {
    stream: fs.createWriteStream(
        path.join(__dirname, 'access.log'), 
        {
            flags: 'a'
        }
    )
}));

app.use('/assets', express.static(path.join(__dirname, '../public')))


// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, 'public')));

// Log errors
const { MainRouter } = require('./routes/main.controller')
// api routes
app.use('/', MainRouter);
app.use('/users', require('./routes/users.controller'));
app.use('/commands', require('./routes/commands.controller'));



// global error handler
app.use(errorHandler);
app.use(HttpErrorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 3000) : 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
