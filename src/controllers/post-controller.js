
const postService = require("../services/post-service.js")
exports.getPosts=(req,res)=>{
    postService
    .getPosts()
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
}
exports.getPost = (req, res) => {
    postService
    .getPost (req.params.id)
    .then (result => res.json (result))
    .catch (err => res.status (500).send (err.message));
    };
    

exports.insertPost=(req,res)=>{
    postService
    .insertPost(req.body, req.client)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
}

exports.updatePost=(req,res)=>{
    postService
    .updatePost(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
}

exports.insertComment=(req,res)=>{
    postService
    .insertComment(req.params.id, req.body, req.client)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
}

exports.removeComment=(req,res)=>{
    postService
    .removeComment(req.params.id, req.body, req.client)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
}



exports.removePost=(req,res)=>{
    postService
    .removePost(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
}