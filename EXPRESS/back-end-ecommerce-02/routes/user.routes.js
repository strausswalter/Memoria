const { Router } = require('express');
const router = Router();
const { listUsers, listUserbyId, createUser, deleteUser, editUser } = require('../controller/users');


router.get('/user', listUsers);
router.get('/user/:id', listUserbyId);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', editUser); //EndPoint para a função editUser, que está em /controller/users.


module.exports = router;
