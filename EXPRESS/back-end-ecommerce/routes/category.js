const express = require('express');
const router = express.Router();

//GET
router.get("/", async (req, res) => {
    res.send('Ola mundo category!!');
})

router.get("/:id", async (req, res) => {
    res.send('Ola mundo category!!');
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