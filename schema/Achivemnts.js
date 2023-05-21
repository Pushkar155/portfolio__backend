const mongoose=require("mongoose");

const AchivSchema = new mongoose.Schema(
    {
    name: {
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    },
    techused: {
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Achive",AchivSchema);
