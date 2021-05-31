const mongoose = require("mongoose")


const MaterialsSchema = mongoose.Schema({
    video_path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Date,
        required: true
    },
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "sections"
    }],
    progressions: [{
        materials_completed: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "progressions"
        }
    }]
})

module.exports = mongoose.model("material", MaterialsSchema)