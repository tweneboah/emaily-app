const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport')
require('./models/user')
require('./services/passport');
const keys = require('./config/keys')
const authRoutes = require('./routes/authRoutes')

//DB CONNECT
mongoose.connect(keys.mongoURL)

//CALLING ROUTES
authRoutes(app)



app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] //for encryption
}));
app.use(passport.initialize());
app.use(passport.session())







//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT)