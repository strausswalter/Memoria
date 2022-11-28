const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

const categoryCtrl = new CategoryController();

//GET
router.get("/", async (req, res) => {
    const result = await categoryCtrl.getCategories();
    res.send(result);
})

router.get("/:id", async (req, res) => {
    const result = await categoryCtrl.getCategory(req.params.id);
    res.send(result);
})

//Cria um category:
router.post("/:id", async (req, res) => {
    res.send('Ola mundo category!!');
})

//Edita um category: PUT - Atualizar, todos os campos, de um dado/registro, no servidor
router.put("/:id", async (req, res) => {
    res.send('Ola mundo category!!');
})

//Edita um categoey - PATCH - Atualizar, informações parciais, de um dado no servidor

router.patch("/:id", async (req, res) => {
    res.send('Ola mundo category!!');
})

//Deleta um category:
router.delete("/:id", async (req, res) => {
    res.send('Ola mundo category!!');
})

module.exports = router;