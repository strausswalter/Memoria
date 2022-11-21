const express = require('express');
const router = express.Router();
const User = require('../controllers/UserController');

const userCtrl = new User();

router.get("/", async (req, res) => {
    res.send(userCtrl.getUsers());
});

router.get("/:id", async (req, res) => {
    res.send(userCtrl.getUser(req.params.id));
})

module.exports = router;