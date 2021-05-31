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
    materials: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "materials"
    }
})

module.exports = mongoose.model("course", CoursesSchema)