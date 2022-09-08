const carouselCatalogoItems = document.getElementById('carouselCatalogoItems');
const modalCatalogos = new bootstrap.Modal('#modalCatalogos', {})

const catalogos = {
    tarzan: {
        nome: "Tarzan o rei da floresta",
        dataLancamento: new Date(1995, 6, 27).toJSON(),
        img: "https://img.estadao.com.br/resources/jpg/8/2/1469126241128.jpg",
        descricao: "Um desajeitado selvagem salva uma linda exploradora de um leão enfurecido e se apaixona pela garota. Depois que o jovem tenta todas as formas de conquista selvagem, a exploradora acaba cedendo e o leva a São Francisco. Quando o desastrado selvagem chega à civilização, começa o caos e a comédia."
    },
    mulan: {
        nome: "Mulan o filme",
        dataLancamento: new Date(1990, 2, 10).toJSON(),
        img: "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/09/03/mulan-2postergoldpostercom20.jpg",
        descricao: "Para salvar seu pai doente de servir no Exército Imperial, uma jovem destemida se disfarça de homem para lutar contra os invasores do norte da China."
    },
    gijoe: {
        nome: "Batman",
        dataLancamento: new Date(2022, 4, 20).toJSON(),
        img: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/07/batman.jpg",
        descricao: "O Batman também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuçado da editora norte-americana DC"
    },

}