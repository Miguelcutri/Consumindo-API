const objetoUsuario = new Buscas()
const objetoCard = new Card()

objetoUsuario.buscaUsuario()
    .then(function(resp){
        resp.json()
        .then(function(dados){
            objetoCard.mostraInfo(dados)
            objetoCard.mostraStatus(dados)
        })
    })

    objetoUsuario.buscaFollows()
    .then(function(resp){
        resp.json()
        .then(function(dados){

            objetoCard.mostraFollows(dados)
        })
    })

    objetoUsuario.buscaTweets()
    .then(function(resp){
        resp.json()
        .then(function(dados){

            objetoCard.mostraTweets(dados)
        })
    })


