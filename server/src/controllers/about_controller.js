const { response } = require("express")

exports.renderAboutPage = (req, res) => {
    res.render("about")
}