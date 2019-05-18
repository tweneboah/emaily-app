const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const app = express();
require('./models/user') 
require('./services/passport')

const authRoutes  = require('./routes/authRoutes')
const keys = require('./config/keys')


//==================DB====================
//CONNECTING TO DB
mongoose.connect(keys.mongoURL)
//CREATING A USER INSTANCE
 
//==============END OF DB==================
 
//===ENABLING COOKIES=======
app.use(
    cookieSession({
       maxAge: 30 * 24 * 60 * 60 * 1000, //Expiring
       keys: [keys.cookieKey] 
    })
);
//===END ENABLING COOKIES=======


//====TELLING PASSPORT TO USE COOKIE
app.use(passport.initialize());
app.use(passport.session());
//====TEND ELLING PASSPORT TO USE COOKIE

//============ROUTES============
//Calling authRoutes
authRoutes(app)
//=======END OF ROUTES============


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})


