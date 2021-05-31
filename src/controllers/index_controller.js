// const { response } = require("express")
// const Word = require("../models/Word")

// exports.renderHomePage = (req, res) => {
//     res.render("module")
// }

// exports.getWord = (req, res) => {
//     const anything = req.body.anything
//     const word = new Word(req.body.anything)
//     word.validateUserInput()

//     if (word.errors.length) {
//         res.render("index", {
//             error: word.errors.toString()
//         })
//     } else{
//         res.render("index", {
//             word: `You typed ${req.body.anything}.`
//           })
//     }
// }

const { response } = require("express")

exports.renderHomePage = (req, res) => {
    res.render("module")
}