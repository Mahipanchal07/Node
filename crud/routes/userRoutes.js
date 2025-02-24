const express = require('express');
const { Signup, Ui, Home } = require('../controller/userController');
const passport = require('passport');
const router = express.Router();

router.get('/',Ui)
router.get('/home',Home)
router.post('/sign-up',Signup)
router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/',
}));
module.exports = {router}