const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser((user,done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id,done) => {
    const user = await user.findById(id);
    done(null, user);
});

passport.use('local-signin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req,  email, password, done) => {

    User.findOne({email: email}).exec((err, user) => {
        if(!user){
            console.log('Usuario no existe');
            return done(null, false, {message: "The user not exist"});
        }
        if(!user.validatePassword(password)){
            console.log('Contraseña mala');
            return done(null, false, {message: "Password incorrect"});
        }
        console.log(user);
        return done(null, user);
    });
    
}));