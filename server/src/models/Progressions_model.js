const mongoose = require("mongoose")


const ProgressionsSchema = mongoose.Schema({
    enrollment_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enrollments"
    }],
    material_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "materials"
    },
    last_accessed_date: {
        type: Date,
        required: true
    },
    duration: {
        type: Date,
        required: true
    }
    // materials_uncompleted: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "materials"
    // }
})

module.exports = mongoose.model("progression", ProgressionsSchema)