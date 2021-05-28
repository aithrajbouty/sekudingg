const { pool } = require("../dbConfig")

exports.home = async (req, res) => {
    try {
        // res.json(req.user)

        const user = await pool.query("SELECT * FROM users WHERE id = $1", [
            req.user
        ])
        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error")
    }
}

exports.selectSpecificUser = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await pool.query("SELECT username FROM users WHERE id = $1", [id])

        res.json(user.rows[0])
    }catch(err){
        console.error(err.message)
        res.status(500).json("Server Error")
    }
}