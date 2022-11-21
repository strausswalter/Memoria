Extensões para renderizar HTML via node.js:


Criar arquivo index.??? dentro da pasta views. 3 opções abaixo:


Pug:
npm install --save pug

Ejs:
npm install ejs

Hbs:
npm install hbs


Em server.js, usar código abaixo:
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


Em views\index.hbs:
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>{{name}}</h1>
        <p>{{subject}}</p>
    </body>
    </html>
