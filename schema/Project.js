const mongoose=require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
    ranking: {
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    },
    somedecs: {
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
module.exports = mongoose.model("Project",ProjectSchema);
