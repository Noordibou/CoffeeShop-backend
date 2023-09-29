const express = require('express')
const router = express.Router()
const CoffeeShop = require('../models/CoffeeShop')
const verifyToken = require('../verifyToken')


router.post('/create', verifyToken, (req, res) => {
    CoffeeShop.create(req.body)
    .then((createdShop) => {
        res.json(createdShop)
    })
});

router.put('/:id', verifyToken, (req, res) => {
    CoffeeShop.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedShop) => res.json(updatedShop))
});

router.delete('/:id', verifyToken, (req, res) => {
    CoffeeShop.findByIdAndDelete(req.params.id)
    .then((deletedShop) => res.json(deletedShop))
});

router.get('/:id', (req, res) => {
    CoffeeShop.findById(req.params.id)
    .then((foundShop) => res.json(foundShop))
});


//GET POSTS
router.get("/", async (req, res) => {
    const query = req.query

    try {
        const searchFilter = {
            title: { $regex: query.search, $options: "i" }
        }
        const posts = await CoffeeShop.find(query.search ? searchFilter : null)
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET USER POSTS
router.get("/user/:userId", async (req, res) => {
    try {
        const posts = await CoffeeShop.find({ userId: req.params.userId })
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router