const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
const mongoose = require('mongoose');
const keys = require('../config/keys')

const User = mongoose.model('users')

//seririalise
passport.serializeUser((user, done)=> {
    done(null, user.id)
})
//deseririalize: getting what has been store in coocie/seririalization

//cookies help to keep track sessions
passport.deserializeUser((id, done)=>{
   User.findById(id)
   .then((user) => {
       done(null, user);
   })
})


 passport.use( new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' 
}, (accessToken, refreshToken, profile, done) => {
    //preventing double registration
     User.findOne({googleId: profile.id})
     .then((existingUser)=> {
          if(existingUser) {
              //you have already registered
              //telling passport we are done
              done(null, existingUser)
          }else {
              //make a new record
              //creating a new user, first create a new instance of the model
               User ({
                    googleId:profile.id
                }).save().then((user) => {
                    done(null, user)
                })
                    }
     })
    

    
}))