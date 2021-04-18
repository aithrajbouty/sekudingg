const { pool } = require("../dbConfig");

exports.addModule = async (req, res) => {
    try{
        const { name } = req.body;
        const { description } = req.body;
        const { category } = req.body;
        const { publish_date } = req.body;
        const { author } = req.body;
        const { difficulty } = req.body;
        const { price } = req.body;
        const { image } = req.body;
        const newModule = await pool.query(
            "INSERT INTO courses (name, description, category, publish_date, author, difficulty, price, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
        [name, description, category, publish_date, author, difficulty, price, image])

        res.json(newModule)
    }catch(err){
        console.error(err.message)
    }
}

exports.selectAllModules = async (req, res) => {
    try{
        const modules = await pool.query("SELECT * FROM courses")

        res.json(modules.rows)
    }catch(err){
        res.json({message: err})
    }
}

exports.selectSpecificModule = async (req, res) => {
    const { id } = req.params;
    try{
        const module = await pool.query("SELECT * FROM courses WHERE id = $1", [id])

        res.json(module.rows[0])
    }catch(err){
        res.json({ message: err })
    }
}

exports.updateModule = async (req, res) => {
    try{
        const { id } = req.params
        const { name } = req.body;
        const { description } = req.body;
        const { category } = req.body;
        const { publish_date } = req.body;
        const { author } = req.body;
        const { difficulty } = req.body;
        const { price } = req.body;
        const { image } = req.body;

        const module = await pool.query("UPDATE courses SET name = $1, description = $2, category = $3, author = $4, difficulty = $5, price = $6, image = $7 WHERE id = $8 RETURNING *",
        [name, description, category, author, difficulty, price, image, id])

        res.json("Module is updated!")
    }catch(err){
        res.json({ message: err })
    }
}

exports.deleteModule = async (req,res) => {
    try{
        const { id } = req.params
        const module = await pool.query("DELETE FROM courses WHERE id = $1", 
        [id])

        res.json("Module is successfully deleted!")
    }catch(err){
        res.json({ message: err })
    }
}