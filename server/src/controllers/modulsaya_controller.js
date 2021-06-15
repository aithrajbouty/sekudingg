const { pool } = require("../dbConfig");

exports.enrollStudent = async (req, res) => {
    try{
        const { student_id } = req.body;
        const { course_id } = req.body;
        const enroll = await pool.query(
            "INSERT INTO enrollments (student_id, course_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM enrollments WHERE student_id=$1 AND course_id=$2)",
            [student_id, course_id]
        )

        res.json(enroll)
    }catch(err){
        console.error(err.message)
    }
}

exports.selectAllEnrollments = async (req, res) => {
    try{
        const enrollment = await pool.query("SELECT * FROM enrollments")

        res.json(enrollment.rows)
    }catch(err){
        res.json({ message: err })
    }
}

exports.deleteEnrollment = async (req,res) => {
    try{
        const { id } = req.params
        const enrollment = await pool.query("DELETE FROM enrollments WHERE id = $1", 
        [id])

        res.json("Enrollment is successfully deleted!")
    }catch(err){
        res.json({ message: err })
    }
}

exports.selectSpecificEnrollment = async (req, res) => {
    try{
        const { id } = req.params
        const enrollment = await pool.query(
            "SELECT * FROM enrollments JOIN users ON users.id = enrollments.student_id JOIN courses ON courses.id = enrollments.course_id WHERE users.id = $1",
            [id]
        )

        res.json(enrollment.rows)
    }catch(err){
        res.json({ message: err })
    }
}