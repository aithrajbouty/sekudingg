const { pool } = require("../dbConfig");

exports.addMaterial = async (req, res) => {
    try{
        const { video_path } = req.body;
        const { name } = req.body;
        const { description } = req.body;
        const { duration_time } = req.body;
        const { courses_id } = req.body;
        const newMaterial = await pool.query(
            "INSERT INTO materials (video_path, name, description, duration_time, courses_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [video_path, name, description, duration_time, courses_id])

        res.json(newMaterial)
    }catch(err){
        console.error(err.message)
    }
}

exports.selectAllMaterials = async (req, res) => {
    try{
        const materials = await pool.query("SELECT materials.*, courses.name AS \"Module\" FROM materials JOIN courses ON materials.courses_id = courses.id")

        res.json(materials.rows)
    }catch(err){
        res.json({message: err})
    }
}

exports.selectSpecificMaterial = async (req, res) => {
    const { id } = req.params;
    try{
        const material = await pool.query(
            "SELECT materials.*, courses.name AS \"Module\" FROM materials JOIN courses ON materials.courses_id = courses.id WHERE materials.id = $1", 
            [id])

        res.json(material.rows[0])
    }catch(err){
        res.json({ message: err })
    }
}

exports.updateMaterial = async (req, res) => {
    try{
        const { id } = req.params;
        const { video_path } = req.body;
        const { name } = req.body;
        const { description } = req.body;
        const { duration_time } = req.body;

        const material = await pool.query("UPDATE materials SET video_path = $1, name = $2, description = $3, duration_time = $4 WHERE id = $5 RETURNING *",
        [video_path, name, description, duration_time, id])

        res.json("Material is updated!")
    }catch(err){
        res.json({ message: err })
    }
}

exports.deleteMaterial = async (req,res) => {
    try{
        const { id } = req.params
        const material = await pool.query("DELETE FROM materials WHERE id = $1", 
        [id])

        res.json("Material is successfully deleted!")
    }catch(err){
        res.json({ message: err })
    }
}