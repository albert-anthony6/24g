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

app.all('*', (req, res, next) => { // Non-specified url error handler
    res.status(404).json({
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

module.exports = app;