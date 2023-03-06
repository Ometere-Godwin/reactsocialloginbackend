const express = require('express');
const app = express();
const passport = require('passport');
const cookieSession = require ('cookie-session');
const cors = require('cors');
const passportSetup =  require('./passport');
const authRoute = require('./routes/auth');
const session = require('express-session');

app.use(passport.initialize());
// app.use(passport.session());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
  }));

app.use(cors ({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
}));

app.use('/auth', authRoute);

// app.use(cookieSession
//     (
//        {
//         name: 'session',
//         keys: ['ometere'],
//         maxAge: 24*60*60*100,
//        } 
// ));
app.get("/", (req, res) => { 
    res.send({
      Status: "Running",
      Message: "Hello from social Media Login",
    });
  })
const PORT = process.env.PORT|| 5000;

app.listen(PORT, () => {
    console.log(`Server Running on: http://localhost:${PORT}`)
   
  });