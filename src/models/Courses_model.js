const mongoose = require("mongoose")


const CoursesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    publish_date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        data: Buffer
    },
    enrollments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enrollments"
    }],
    sections_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sections"
    }
})

module.exports = mongoose.model("course", CoursesSchema)