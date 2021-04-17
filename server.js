const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const session = require('express-session')

let port = process.env.PORT || 3000

mongoose.connect(
    'mongodb+srv://root:muttonroganjosh@cluster0.y0cku.mongodb.net/blueboard?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
    );

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://wbdv-sp21-mothil-client-react.herokuapp.com');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, Authorization, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
// }))

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(port)