const express = require('express');
const { ui, AddMovie, DeleteMovie, EditMovie, UpdateMovie } = require('../controller/useController');
const multer  = require('multer')
const router = express.Router();
const path = require('path')
path.join(__dirname,'../Uploads')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
const upload = multer({ storage: storage })


router.get("/",ui)
router.post("/AddNewMovie",upload.single("MovieImage"),AddMovie)
router.get("/DeleteMovie/:id",DeleteMovie)
router.get("/EditMovie/:id",EditMovie)
router.post("/UpdateMovie/:id",UpdateMovie)

module.exports = {router}