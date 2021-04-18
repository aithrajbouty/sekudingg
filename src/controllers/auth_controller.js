// const { response } = require("express")
// const User = require("../models/Users_model")

// exports.renderUserPage = async (req, res) => {
//     try{
//         const users = await User.find()
//         res.json(users)
//     }catch(err){
//         res.json({message: err})
//     }
// }

// exports.submitUser = async (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password,
//         email: req.body.email,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         registration_date: req.body.registration_date,
//         last_login_date: req.body.last_login_date
//     })

//     try{
//         const savedUser = await user.save()
//         res.json(savedUser)
//     }catch(err){
//         res.json({message: err })
//     }
// }

// //specific user
// exports.specificUser = async (req, res) => {
//     try{
//         const user = await User.findById(req.params.userId)
//         res.json(user)
//     }catch(err){
//         res.json({message: err })
//     }
// }

// // delete specific user
// exports.deleteUser = async (req, res) => {
//     try{
//         const removedUser = await User.remove({_id: req.params.userId})
//         res.json(removedUser)
//     }catch(err){
//         res.json({message: err })
//     }
// }

// //update specific user
// exports.updateUser = async (req, res) => {
//     try{
//         const updatedUser = await User.updateOne(
//             { _id: req.params.userId },
//             { $set: { username: req.body.username } }
//         )
//         res.json(updatedUser)
//     }catch(err){
//         res.json({message: err })
//     }
// }







// const User = require("../models/Users_model")
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")

// exports.register = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10, function(err, hashedPass){
//         if(err){
//             res.json({ error: err })
//         }

//         let user = new User ({
//             username: req.body.username,
//             password: hashedPass,
//             email: req.body.email,
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             registration_date: req.body.registration_date,
//             last_login_date: req.body.last_login_date
//         })
//         user.save()
//         .then(user => {
//             res.json({ message: "User Added Successfully!" })
//         })
//         .catch(error =>{
//             res.json({ message: "An error occured!" })
//         })
//     })
// }

// exports.login = (req, res, next) => {
//     var user_name = req.body.username
//     var password = req.body.password

//     User.findOne({$or: [{username:user_name}, {email:user_name}]})
//     .then(user => {
//         if(user){
//             bcrypt.compare(password, user.password, function(err, result) {
//                 if(err){
//                     res.json({ error: err })
//                 }
//                 if(result){
//                     let token = jwt.sign({name: user.name}, "verySecretValue", {expiresIn: "1h"})
//                     res.json({ 
//                         message: "Login Successful!", 
//                         token 
//                     })
//                 }else{
//                     res.json({ message: "Password does not matched!" })
//                 }
//             })
//         }else{
//             res.json({ message: "No user found!" })
//         }
//     })
// }

// exports.selectAllUsers = async (req, res) => {
//     try{
//         const users = await User.find()
//         res.json(users)
//     }catch(err){
//         res.json({message: err})
//     }
// }




const User = require("../models/Users_model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = (req, res) => {
    let {username, email, password} = req.body;

    console.log({
        username,
        email,
        password
    })

    let errors = [];

    if (!username || !email || !password){
        errors.push({message: "Please enter all fields"})
    }

    if(password.length < 6){
        errors.push({message: "Password should be at least 6 characters"})
    }

    if(errors.length > 0){
        res.render("register", { errors })
    }
}