const { pool } = require("../dbConfig");

// exports.countUsers = async (req, res) => {
//     try{
//         const user = await AboutUs.count(req.params.userId)
//         res.json(user)
//     }catch(err){
//         res.json({message: err })
//     }
// }

exports.countUsers = async (req, res) => {
    try{
        const users = await pool.query("SELECT COUNT(id) FROM users")

        res.json(users.rows[0])
    }catch(err){
        res.json({ message: err })
    }
}

// export async function countUsers(){
//     const response = await fetch("/aboutUs/count")
//     return await response.json()
// }