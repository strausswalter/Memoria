const Product = require("../models/Product");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

class ProductController {
  async getProducts(params) {
    //Também pode usar desestruturação: getProducts({ page, limit })
    let result;
    const limit = parseInt(params.limit),
      page = parseInt(params.page) -1;

    const paramsLimit = {
      offset: page * limit,
      limit: parseInt(limit), //Para buscas com '?limit'. Exemplo: localhost:3001/product?limit=2?q=vesti
    };
    //TODO: Corrigir erro de send / request:  localhost:3001/product/
    if (params.q) {
      result = await Product.findAll({
        where: {
          name: {
            [Op.like]: `%${params.q}%`, //Para buscas com '?q'. Exemplo: localhost:3001/product?q=vEstido
            //Tiago Silva recomendou usar `%${params.q.toLowerCase()}%`,  mas não gostei do resultado na busca.
          },
        },
        ...paramsLimit,
      });
    } else {
      result = await Product.findAll(paramsLimit);
    }
    return result;
  }
  async getProduct(id) {
    const result = await Product.findByPk(id);
    return result;
  }

  //Buscar produto por id de lista json manual (sem banco de dados):
  // getProduct(id) {
  //   const result = PRODUCTS[id];
  //   if(result !== null && result !== undefined){
  //       return result;
  //   }
  //   return {
  //       msg: "Nenhum produto encontrado"
  //   }
  // }

  filterProductByName(name) {
    let arrayProducts = [];
    let keys = Object.keys(PRODUCTS);
    for (const productId of keys) {
    }
  }
}

module.exports = ProductController;
