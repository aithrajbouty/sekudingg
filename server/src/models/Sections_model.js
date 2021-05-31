const mongoose = require("mongoose")


const SectionsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    material_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "materials"
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses"
    }]
})

module.exports = mongoose.model("section", SectionsSchema)