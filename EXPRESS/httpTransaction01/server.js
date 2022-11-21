const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//Rotas:
const user = require('./routes/user');
const auth = require('./routes/auth');

app.use('/user', user);
app.use('/auth', auth);

//Extensões para renderizar HTML direto pelo node.js (hbs, ejs ou pub):
app.set('view engine', 'hbs');//Trocar hbs por ejs, ou pug caso queira usar outra forma de renderizar HTML
app.set('views', path.join(__dirname, 'views'));

app.get("/", async (req, res) => {
    res.render('index', {
        subject: "Assunto da pagina",
        name: "Nome de alguém"
    });
})
// ----------- fim hbs -----------------


app.listen(port, function(){
    console.log("Aplicativo Rodando!!");
});

//Testar no terminal com: node index.js