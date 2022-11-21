class UserController{
    getUser(id){
        return{
            id: 1,
            name: "Fulano de Tal",
        };
    }

    getUsers(){
        return [
            {
                id: 1,
                name: "Fulano de Tal",
            },
            {
                id: 2,
                name: "Michael Jackson",
            },
        ];
    }
}

module.exports = UserController;