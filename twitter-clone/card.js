class Card {
    constructor() {
        this.profileHeader = document.querySelector(".profileHeader")
        this.status = document.querySelector(".profile-edit")
        this.follows = document.querySelector("#follows")
        this.tweets = document.querySelector(".tweet-card")
    }


    mostraInfo(dados) {
        let card = ''

        card = `

            <h3 class="profile-fullname"><a>${dados[0].nome}<a></h3>
            <h2 class="profile-element"><a>${dados[0].usuario}</a></h2>

            <a class="profile-element profile-website" hrerf=""><i
                class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
            <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${dados[0].cadastro}</h2>

      `

        this.profileHeader.innerHTML = card
    }
    mostraStatus(dados) {
        let card = ''

        card = `
            <ul>
            <li class="profile-stats-item-active">
            <a>
            <span class="profile-stats-item profile-stats-item-label">Tweets</span>
            <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
          </a>
        </li>
        <li>
          <a>
            <span class="profile-stats-item profile-stats-item-label">Following</span>
            <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
          </a>
        </li>
        <li>
          <a>
            <span class="profile-stats-item profile-stats-item-label">Followers</span>
            <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
          </a>
        </li>
        <li>
          <a>
            <span class="profile-stats-item profile-stats-item-label">Likes</span>
            <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
          </a>

      `
        this.status.innerHTML = card
    }


    mostraFollows(dados) {
        let card = ''

        dados.followers.map(function (elemento) {
          console.log("elemento", elemento)

          card += `
          <li class="tweet-card">
          <div class="tweet-content">
            <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
            <div class="tweet-header">
              <span class="fullname">
                <strong>${elemento.nome}</strong>
              </span>
              <span class="username">${elemento.usuario}</span>
            </div>

            <button class="btn btn-follow">Follow</button>
          </div>
        </li>
              
          `
        });
    
        this.follows.innerHTML = card
      }
      mostraTweets(dados) {
        let card = ''

        dados.tweets.map(function (elemento) {


          card += `
          <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${elemento.nome}</strong>
                  </span>
                  <span class="username">${elemento.usuario}</span>
                  <span class="tweet-time">- ${elemento.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0">${elemento.mensagem} <a href="https://t.co/dqg5hVQXA0"
                      class="twitter-timeline-link" target="_blank"><span
                        class="">https://www.mozilla-hispano.org/</span></a> <a href=""
                      class="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href=""
                      class="twitter-hashtag"><s>#</s><b>comunidad</b></a>
                    <a href="" class="twitter-hashtag" dir="ltr"></a>
                  </p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span>${elemento.comentarios} </span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span>${elemento.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span>${elemento.likes}</span>
                  </a>
                </div>
              </div>
          `
        });
    
        this.tweets.innerHTML = card
      }
      
}