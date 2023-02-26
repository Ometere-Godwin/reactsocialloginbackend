const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')

const GOOGLE_CLIENT_ID = "698948772165-8d9oj90brlrotpgjmn5rekna4qkpu1j3.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
})