class Buscas{

    buscaUsuario(){
        return fetch("./usuario.json")
    }
    buscaFollows(){
        return fetch("./follow.json")
    }
    buscaTweets(){
        return fetch("./tweets.json")
    }
}