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

// exports.selectSpecificUser = async (req, res) => {
//     const { id } = req.params;
//     try{
//         const user = await pool.query("SELECT username FROM users WHERE id = $1", [id])

//         res.json(user.rows[0])
//     }catch(err){
//         console.error(err.message)
//         res.status(500).json("Server Error")
//     }
// }

exports.updateUser = async (req, res) => {
    try{
        const { id } = req.params;
        const { username } = req.body;
        const { email } = req.body;
        const { full_name } = req.body;
        const { description } = req.body;
        const { age } = req.body;

        const module = await pool.query("UPDATE users SET username = $1, email = $2, full_name = $3, description = $4, age= $5 WHERE id = $6",
        [username, email, full_name, description, age, id])

        res.json("User detail is updated!")
    }catch(err){
        res.json({ message: err })
    }
}