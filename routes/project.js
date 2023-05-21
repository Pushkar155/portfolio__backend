const router = require("express").Router();
const ProjectSchema = require("../schema/Project");

////////////////////////////////////////////////
router.post("/adding",async (req,res)=>{
    const newProject = new ProjectSchema(req.body);
    try {
        const saveProject = await newProject.save();
        res.status(200).json(saveProject);
        
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/getting",async (req,res)=>{
    const project = await ProjectSchema.find();
    res.status(200).send(project);
    // console.log(achive);
})
module.exports=router;
