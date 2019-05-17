const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'] //The access we want from google
    }));
    
    //Route handler for code exchange
    app.get('/auth/google/callback', passport.authenticate('google'))

    //logout
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send(req.user)
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}

