const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')
const verifyToken = require('../util/token')

//CREATE
router.post("/create", verifyToken, async (req, res) => {
    Comment.create(req.body)
    .then((createdComment) => {
        res.json(createdComment)
    })
});

//UPDATE
router.put('/:id', verifyToken, (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedComment) => res.json(updatedComment))
});

router.delete('/:id', verifyToken, (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
    .then((deletedComment) => res.json(deletedComment))
});

//GET POST COMMENTS
router.get("/coffeeshop/:coffeeShopId", async (req, res) => {
    try {
        const comments = await Comment.find({ coffeeShopId: req.params.coffeeShopId })
        res.status(200).json(comments)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router