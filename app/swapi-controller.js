console.log(3);
function SwapiController() {
  console.log(6);
  var swService = new SwapiService();
  console.log(8);
  //private

  function drawPeople(people) {
    var template = "";
    people.forEach(person => {
      template += `<div>
        <h5>${person.name}</h5>
        <button onclick="app.controllers.swapiController.getPlanet('${person.homeworld}')">View Home World</button>
      </div>`;
    });
    document.getElementById("sw-people").innerHTML = template;
  }





  function drawButtons(res) {
    var template = ''
    if (res.previous) {
      template += `<button onclick="app.controllers.swapiController.getPeople('${res.previous}')">Previous</button>`
    }
    if (res.next) {
      template += `<button onclick="app.controllers.swapiController.getPeople('${res.next}')">Next</button>`
    }
    document.getElementById('buttons').innerHTML = template
  }

  function handlePeopleResponse(res) {
    drawButtons(res);
    drawPeople(res.results);
  }
  function drawPlanet(planet) {
    var template=``;
    template =`<h1>${planet.name}</h1>`
    // get an elem from the page
    // update template with planet info
    //then change innerHTML of the elem
    document.getElementById('planets').innerHTML = template
  }


  function handleWorldResponse(res) {
    //going to take in a response object
    drawPlanet(res)
  }

  //public
  this.getPeople = function (url) {
    swService.getPeople(url, handlePeopleResponse);
  };
  this.getPlanet = function GetWorld(url) {
    swService.getPlanet(url, handleWorldResponse);
  }
}
console.log(4);
