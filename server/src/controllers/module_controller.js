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
        const { id } = req.params;
        const { name } = req.body;
        const { description } = req.body;
        const { category } = req.body;
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

exports.selectMaterialsByCourse = async (req, res) => {
    const { id } = req.params;
    try{
        const material = await pool.query(
            "SELECT materials.*, courses.name AS \"Module\" FROM materials JOIN courses ON materials.courses_id = courses.id WHERE courses.id = $1", 
            [id])

        res.json(material.rows)
    }catch(err){
        res.json({ message: err })
    }
}

exports.getProgression = async (req, res) => {
    try {
        const { user_id } = req.params
        const { module_id } = req.params
        const enrollment = await pool.query(
            "SELECT enrollments.id AS id FROM enrollments JOIN users ON users.id = enrollments.student_id JOIN courses ON courses.id = enrollments.course_id WHERE users.id = $1 AND courses.id = $2",
            [user_id, module_id]
        )
        
        const progression = await pool.query("SELECT * FROM progressions WHERE enrollment_id = $1", [enrollment.rows[0].id])

        res.json(progression.rows)
    } catch(err){
        res.json({ message: err })
    }
}

exports.updateProgression = async (req, res) => {
    try{
        const { user_id } = req.body
        const { module_id } = req.body
        const { material_id } = req.body
        const enrollment = await pool.query(
            "SELECT enrollments.id AS id FROM enrollments JOIN users ON users.id = enrollments.student_id JOIN courses ON courses.id = enrollments.course_id WHERE users.id = $1 AND courses.id = $2",
            [user_id, module_id]
        )

        const enrollment_id = enrollment.rows[0].id
        const progression = await pool.query(
            "INSERT INTO progressions (enrollment_id, material_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM progressions WHERE enrollment_id=$1 AND material_id=$2)",
            [enrollment_id, material_id]
        )

        res.json("Successfully added progression!")
    }catch(err){
        res.json({ message: err })
    }
}