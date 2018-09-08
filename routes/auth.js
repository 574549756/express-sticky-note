var express = require('express')
var passport = require('passport')
var GitHubStrategy = require('passport-github').Strategy

passport.serializeUser(function(user, done) {
    console.log('---serializeUser---')
    console.log(user)
    done(null, user)
})

passport.deserializeUser(function(id, done) {
    console.log('---deserializeUser---')
    done(null, obj)
})

/* GET auth . */
passport.use(
    new GitHubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
        },
        function(accessToken, refreshToken, profile, cb) {
            User.findOrCreate({ githubId: profile.id }, function(err, user) {
                return cb(err, user)
            })
        }
    )
)

module.exports = router
