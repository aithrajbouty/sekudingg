const mongoose = require("mongoose")


const PreferencesSchema = mongoose.Schema({
    config_file: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
})

module.exports = mongoose.model("preference", PreferencesSchema)