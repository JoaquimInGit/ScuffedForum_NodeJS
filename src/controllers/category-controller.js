const catService = require("../services/category-service.js");

exports.getCategory = (req, res) => {
    catService
        .getCategory()
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.insertCategory = (req, res) => {
    catService
        .insertCategory(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.removeCategory = (req, res) => {
    catService
        .removeCategory(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};