function PokeController() {
    var pokeService = new PokeService();

    function drawPokemon(arr) {
        console.log(arr)
        var template = "<ul>";
        for (var i = 0; i < arr.length; i++) {
            var pokemon = arr[i];
            template += `<p>${pokemon.name}</p>
            //<li onclick="app.controllers.pokeController.getName('${pokemon.name}')">${pokemon.name}</li>`;
        }
        template += "</ul>";
        document.getElementById("name-data").innerHTML = template;
    }
    function drawDetails(details) {
        var template = `
              <h3>Name: ${results.name}</h3>
              <h3>Weight</h3>
              <h3>Height</h3>
              <ul>
            `
        for (let i = 0; i < details.saving_throws.length; i++) {
            const st = details.saving_throws[i];
            template += `<li>${st.name}</li>`
        }
        template += '</ul>'
        document.getElementById('active-data').innerHTML = template
    }


var test = pokeService.getCollection(drawPokemon)

function handleUserResponse(res) {
    drawPokemon(res)
}
//Pubilc

this.getName = function (url) {
    pokeService.getName(url, handleUserResponse)

    pokeService.getCollection("pokemon", drawPokemon);
}












}



