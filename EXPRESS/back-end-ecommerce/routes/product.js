const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

//Opção de importação no padrão de codificação funcional:
const { getProducts, getProduct } = require('../controllers/ProductController');

productCtrl = new ProductController();//Apagar caso use a opção de importação no padrão de codificação funcional

//	GET - Recupera dados do servidor
router.get("/", async (req, res) => {
    //Apagar "productCtrl." caso use a opção de importação no padrão de codificação funcional
    //req.query: passar parametros da busca GET (como page e limit)
    let result = productCtrl.getProducts(req.query);
    res.send(result);
});

router.get("/:id", async (req, res) => {
    let result = productCtrl.getProduct(req.params.id);//Apagar "productCtrl." caso use a opção de importação no padrão de codificação funcional
    res.send(result);
});


//Cria um produto:
router.post("/", async (req, res) => {
    res.send('Ola mundo product!!');
});

//Editar um produto:
//PUT - Atualizar, todos os campos, de um dado/registro, no servidor
router.put("/:id", async (req, res) => { 
    res.send('Ola mundo product!!');
});

//PATCH - Atualizar, informações parciais, de um dado no servidor
router.patch("/:id", async (req, res) => {
    res.send('Ola mundo product!!');
});

//Deleta um produto:
router.delete("/:id", async (req, res) => {
    res.send('Ola mundo product!!');
});






module.exports = router;