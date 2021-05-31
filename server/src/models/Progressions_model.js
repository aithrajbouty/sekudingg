const mongoose = require("mongoose")


const ProgressionsSchema = mongoose.Schema({
    last_accessed_date: {
        type: Date,
        required: true
    },
    duration: {
        type: Date,
        required: true
    },
    enrollments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enrollments"
    }],
    materials_completed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "materials"
    }
    // materials_uncompleted: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "materials"
    // }
})

module.exports = mongoose.model("progression", ProgressionsSchema)