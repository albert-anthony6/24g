const express = require('express');
const morgan = require('morgan');

const videoRouter = require('./routes/videoRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
    app.use(express.json()); // BODY PARSER
}

app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;