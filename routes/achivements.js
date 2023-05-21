const router = require("express").Router();
const AchivSchema = require("../schema/Achivemnts");


router.post("/adding",async (req,res)=>{
    const newAchi = new AchivSchema(req.body);
    try {
        const saveAchi = await newAchi.save();
        res.status(200).json(saveAchi);
        
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/getting",async (req,res)=>{
    const achive = await AchivSchema.find();
    res.status(200).send(achive);
    // console.log(achive);
})
module.exports=router;


