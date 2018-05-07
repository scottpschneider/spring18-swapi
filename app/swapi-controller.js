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
      </div>`;
    });
    document.getElementById("sw-people").innerHTML = template;
  }

  function drawButtons(res) {
    var template = ''
    if(res.previous){
      template += `<button onclick="app.controllers.swapiController.getPeople('${res.previous}')">Previous</button>`
    }
    if(res.next){
      template += `<button onclick="app.controllers.swapiController.getPeople('${res.next}')">Next</button>`
    }
    document.getElementById('buttons').innerHTML = template
  }

  function handlePeopleResponse(res) {
    drawButtons(res);
    drawPeople(res.results);
  }

  //public
  this.getPeople = function(url) {
    swService.getPeople(url, handlePeopleResponse);
  };
}
console.log(4);
