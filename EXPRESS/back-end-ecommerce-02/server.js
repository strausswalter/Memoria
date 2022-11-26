require('dotenv').config();

const express = require ('express');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

const cors = require("cors");

const app = express();  //Creates an Express application. instance of express named app, com os métodos do express disponiveis para uso. 
const PORT = process.env.PORT || 3001;  //process.env a global variable that is injected during runtime. It is a view of the state of the system environment variables. Usar em conjunto com o pacote dotEnv que carrega automaticamente as variáveis de ambiente de um arquivo .env no objeto process.env.



app.use(express.json()); //Aceita requests via JSON Object. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(cors());

//Basic routing:
app.get('/', (req, res)=>{  //app.METHOD(PATH, HANDLER)
    res.send('Ola mundo!!!!!!!!!!');
})

app.use('/user-api', userRoutes);
app.use('/product-api', productRoutes);


app.listen(PORT, function(){
    console.log('Aplicacao rodando!!!')
});
//Testar no terminal com: node index.js   ou   npm run watch. E ver resultados no software Post ou Insomnia.
