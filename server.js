const express= require("express");
const bodyParser= require("body-parser")
const cors= require("cors")
const dotenv=require("dotenv");
const mongoose= require("mongoose")
const nodemailer = require('nodemailer');
const authAchive=require("./routes/achivements");
const authProject=require("./routes/project");
const app=express();
dotenv.config();



////////// LOGICS /////////////////////
app.use(cors())
app.use(bodyParser.json());

app.use("/api/achive",authAchive);
app.use("/api/project",authProject);

app.get('/',(req,res)=>{
    res.send("hello from server")
})
/////// Connections ///////////////////
mongoose.connect(process.env.MONGO__DB)
           .then(()=>{app.listen(process.env.PORT,()=>{
                console.log(`Node API app is running on port ${process.env.PORT}`);
            }
        )
            console.log('connected to Mongodb');
            }).catch((error)=>{
            console.log(error)
})

