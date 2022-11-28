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

//Cadastrar novo usuário:
const createUser = async (req, res) => {
  try {
    await database.Clients.create(req.body);
    // console.log(req.body)
    return res.send("Usuário criado com sucesso");
  } catch (error) {
    return res.send(error.message);
  }
}

//Adicionar usuario (sem try/catch):
// const createUser = async (req, res) => {
  // await database.Clients.create(req.body); 
  //"Clients" é o nome da classe criada no banco (em models\clients.js)
  // return res.send("Usuário criado com sucesso");
// };


//Deletar usuario:
//TODO: Tirar dúvida: como fazer o request para deletar? Passar qual propriedade? nome, id?...
//TODO: Tirar dúvida: como evitar duplicidade de informações, como nomes iguais?
//TODO: Rever código delete, incluindo try/catch
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

//Editar usuario:
const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {nome, sobrenome, email, senha, promocao} = req.body; //Permitir editar alguns campos ou todos.
    const consultId = await database.Clients.findOne({ where:{id} })
    console.log(consultId);
    if(consultId){
      const clientUpdate = {
        // ...consultId.dataValues,
      nome: nome || consultId.dataValues.nome,
      sobrenome: sobrenome || consultId.dataValues.sobrenome,
      email: email || consultId.dataValues.email,
      senha: senha || consultId.dataValues.senha,
      promocao: promocao || consultId.dataValues.promocao,
    };
    await database.Clients.update(clientUpdate, { where:{id} });
  }else{
      return res.status(404).send("Cliente não encontrado");
    }
    return res.send("Edição realizada com sucesso!");
  } catch (error) {
    return res.send(error.message);
  }
}







//Editar usuario
// const editUser = async (req, res) => {
//   const { id } = req.params;
//   const consultId = await database.Clients.findOne({
//     where: {
//       id: Number(id),
      //TODO: Tirar dúvida: porque ele transforma em numero??
//     },
//   });
//   if (consultId){
//     await database.Clients.update(req.body, { //a função update recebe 2 parametros: 1: dados que serão editados, e 2: critério de qual linha irá editar.  
//       where:{id: Number(id),},
//     });
//     return res.send("Usuário editado com sucesso");
//   }
//   return res.send("Usuário não editado");
// };

module.exports = { listUsers, listUserbyId, createUser, deleteUser, editUser };