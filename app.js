const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

app.set('view engine','pug');
app.set('views' , './views');

const adminRoutes = require('./rautes/admin');
const userRoutes = require('./rautes/main');
const accountRoutes = require('./rautes/account')
const errorController = require('./controllers/errors')

app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: '0000',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin',adminRoutes);
app.use(userRoutes);
app.use(accountRoutes);

app.use(errorController.get404Page);

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 