var express = require('express')
var router = express.Router()
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
            clientID: 'b7bfd7fcc56fdb76ad7f',
            clientSecret: 'acbbfd5555ded60add3c1069a75d5fd32301b621',
            callbackURL: 'http://post.hunger-valley.com/auth/github/callback'
        },
        function(accessToken, refreshToken, profile, cb) {
            /* User.findOrCreate({ githubId: profile.id }, function(err, user) {
                return cb(err, user)
            }) */
        }
    )
)

router.get('/logout', function(req, res) {
    req.session.destroy()
    res.redirect('/')
})

router.get('/github', passport.authenticate('github'))

router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        req.session.user = {
            id: req.user.id,
            username: req.user.displayName || req.user.username,
            avatar: req.user._json.avatar_url,
            provider: req.user.provider
        }
        res.redirect('/')
    }
)

module.exports = router
