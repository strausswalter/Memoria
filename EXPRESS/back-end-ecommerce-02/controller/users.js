const database = require("../database/models");

//Listar usuarios
const listUsers = async (req, res) => { //Toda consulta a banco é asyncrona no JavaScript (na grande maioria dos casos).
  const allUsers = await database.Clients.findAll();
  
  if(allUsers){
    return res.send(allUsers);
  };
  return res.send("Não existem usuarios cadastrados.");
};

//Listar usuario por id:
const listUserbyId = async (req, res) => {
  const { id } = req.params;
  const consultId = await database.Clients.findOne({
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
const createUser = async (req, res) => {
  await database.Clients.create(req.body); //"Clients" é o nome da classe criada no banco (em models\clients.js)
  return res.send("Usuário criado com sucesso");
};


//Deletar usuario:
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const consultId = await database.Clients.findOne({
  where: {
    id: Number(id),
  },
});

  if(consultId){
    await database.Clients.destroy({
      where: {
        id: Number(id),
      },
    });
    return res.send("Usuário deletado com sucesso");
  }
  return res.send("Usuário não existe");
};

//Editar usuario
const editUser = async (req, res) => {
  const { id } = req.params;
  const consultId = await database.Clients.findOne({
    where: {
      id: Number(id),
    },
  });
  if (consultId){
    await database.Clients.update(req.body, {
      where:{
        id: Number(id),
      },
    });
    return res.send("Usuário editado com sucesso");
  }
  return res.send("Usuário não editado");
};

module.exports = { listUsers, listUserbyId, createUser, deleteUser, editUser };
