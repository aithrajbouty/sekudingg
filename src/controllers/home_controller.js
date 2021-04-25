const { pool } = require("../dbConfig")

exports.home = async (req, res) => {
    try {
        // res.json(req.user)

        const user = await pool.query("SELECT username, email, full_name FROM users WHERE id = $1", [
            req.user
        ])
        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error")
    }
}