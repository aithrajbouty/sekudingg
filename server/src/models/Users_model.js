// const mongoose = require("mongoose")

const { Sequelize } = require("sequelize/types");


// const UsersSchema = mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, "Please include your name"]
//     },
//     password: {
//         type: String,
//         required: [true, "Please include your password"]
//     },
//     email: {
//         type: String,
//         required: [true, "Please include your email"]
//     },
//     first_name: {
//         type: String,
//         required: [true, "Please include your first name"]
//     },
//     last_name: String,
//     registration_date: {
//         type: Date,
//         default: Date.now,
//         required: true
//     },
//     last_login_date: {
//         type: Date
//     },
//     enrollments: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "enrollments"
//     }],
//     preference_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "preferences"
//     }
// }, {timestamps: true})

// module.exports = mongoose.model("user", UsersSchema)




module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    })
    return User
}