const mongoose = require("mongoose")


const EnrollmentsSchema = mongoose.Schema({
    enroll_date: {
        type: Date,
        required: true
    },
    complete_date: {
        type: Date,
        required: true
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses"
    },
    progression_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "progressions"
    }
})

module.exports = mongoose.model("enrollment", EnrollmentsSchema)