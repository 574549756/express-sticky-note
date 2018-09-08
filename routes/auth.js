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
router.get('/github', function(req, res, next) {
    console.log(req.query)
    res.render('index', { title: '我的note' })
})

module.exports = router
