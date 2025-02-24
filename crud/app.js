const express = require('express');
const app = express();
const db = require('./config/db');
const { router } = require('./router/userRouter');
const passport = require('passport')
const session = require('express-session');
const { localAuth } = require('./Middleware/localAuth');

app.set('view engine', 'ejs');
app.use(express.json())
app.use(session({ secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());
localAuth(passport)
app.use(express.urlencoded());
app.use("/",router)

app.listen('4000',()=>{
    console.log('server listening');
})