const database = require("../database/models");

//Listar produtos
const listProducts = async (req, res) => { //Toda consulta a banco é asyncrona no JavaScript (na grande maioria dos casos).
  const allProducts = await database.Products.findAll();
  
  if(allProducts){
    return res.send(allProducts);
  };
  return res.send("Não existem usuarios cadastrados.");
};

//Listar usuario por id:
const listProductbyId = async (req, res) => {
  const { id } = req.params;
  const consultId = await database.Products.findOne({
    where: {
      id: Number(id),
    },
  });
  if (consultId){
    return res.send(consultId);
  }
  return res.send("Usuario não existe");
};

//Adicionar usuario:
const createProduct = async (req, res) => {
  await database.Products.create(req.body); 
  return res.send("Usuário criado com sucesso");
};


//Deletar usuario:
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const consultId = await database.Products.findOne({
  where: {
    id: Number(id),
  },
});

  if(consultId){
    await database.Products.destroy({
      where: {
        id: Number(id),
      },
    });
    return res.send("Usuário deletado com sucesso");
  }
  return res.send("Usuário não existe");
};

//Editar usuario
const editProduct = async (req, res) => {
  const { id } = req.params;
  const consultId = await database.Products.findOne({
    where: {
      id: Number(id),
    },
  });
  if (consultId){
    await database.Products.update(req.body, {
      where:{
        id: Number(id),
      },
    });
    return res.send("Usuário editado com sucesso");
  }
  return res.send("Usuário não editado");
};

module.exports = { listProducts };
