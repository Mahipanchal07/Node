const userModel = require("../userModel/userModel")

const Ui = (req,res) =>{
    res.render('Sign-up');
}
const Home = (req,res) =>{
    res.render('home')
}   
const Signup = async(req,res) => {
  const data = await userModel.create(req.body)
  res.render('Login')
}
module.exports = {Signup,Ui,Home}