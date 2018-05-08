function PokeService() {
    var baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'

    this.getCollection = function getCollection(cb){
        $.get(baseUrl)
            .then(data =>{
              var res=data.results
              cb(res)
            })
      }

    this.getDetails = function getDetails(url, cb) {
        $.get(Url)
            .then(data => {
                cb(data)
            })
    }
}