const Module = require("../models/Courses_model")

exports.addModule = (req, res, next) => {
    let module = new Module ({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        publish_date: req.body.publish_date,
        author: req.body.author,
        difficulty: req.body.difficulty,
        price: req.body.price,
        image: req.body.image
    })
    module.save()
    .then(module => {
        res.json({ message: "Module Added Successfully!" })
    })
    .catch(error =>{
        res.json({ message: "An error occured!" })
})
}

exports.selectAllModules = async (req, res) => {
    try{
        const modules = await Module.find()
        res.json(modules)
    }catch(err){
        res.json({message: err})
    }
}