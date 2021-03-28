const mongoose = require("mongoose")


const UsersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    registration_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    last_login_date: {
        type: Date,
        required: true
    },
    enrollments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enrollments"
    }],
    preference_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "preferences"
    }
})

module.exports = mongoose.model("user", UsersSchema)

//kalo ada masalah nama collectionnya hapus "s" nya aja