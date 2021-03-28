const { response } = require("express")
const User = require("../models/Users_model")

exports.renderUserPage = async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.json({message: err})
    }
}

exports.submitUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        registration_date: req.body.registration_date,
        last_login_date: req.body.last_login_date
    })

    try{
        const savedUser = await user.save()
        res.json(savedUser)
    }catch(err){
        res.json({message: err })
    }
}

//specific user
exports.specificUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        res.json(user)
    }catch(err){
        res.json({message: err })
    }
}

// delete specific user
exports.deleteUser = async (req, res) => {
    try{
        const removedUser = await User.remove({_id: req.params.userId})
        res.json(removedUser)
    }catch(err){
        res.json({message: err })
    }
}

//update specific user
exports.updateUser = async (req, res) => {
    try{
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            { $set: { username: req.body.username } }
        )
        res.json(updatedUser)
    }catch(err){
        res.json({message: err })
    }
}