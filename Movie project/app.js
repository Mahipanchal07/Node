const express = require("express")
const app =  express();
const db = require("./config/db");
const { router } = require("./routes/userRouter");
app.set("view engine","ejs")
app.use(express.urlencoded());
const path = require("path")
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

app.use("/",router)
app.listen("3333",()=>{
    console.log("server listening on localhost:3333");
})