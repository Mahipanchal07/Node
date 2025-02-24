const userModel = require("../model/userModel")



const AddMovie = async (req,res) =>{
    let data = await userModel.create(req.body);
   let img =  await userModel.findByIdAndUpdate(data._id,{MovieImage:req.file.filename})
    console.log(req.file);
    res.redirect('/')
}

const DeleteMovie = async (req,res) =>{
 let deleletedMovie = await userModel.findByIdAndDelete(req.params.id)
 res.redirect("/")
}

const EditMovie = async (req,res) =>{
  let Movie = await userModel.findById(req.params.id)
  res.render('EditMovie',{Movie})
}

const UpdateMovie = async (req,res) => {
    let UpdatedMovie = await userModel.findByIdAndUpdate(req.params.id,req.body);
    res.redirect('/')
}

const ui = async (req,res) => {
   const Movies = await userModel.find();
   res.render('Movie',{Movies})
} 



module.exports = {ui,AddMovie,DeleteMovie,EditMovie,UpdateMovie}