function RacesController(){
  //private
  var dndService = new DndService()

  function drawRaces(arr) {
    var template = "<ul>";
    for (let i = 0; i < arr.length; i++) {
      const r = arr[i];
      template += `
        <li onclick="app.controllers.racesController.getDetails('${r.url}')">${r.name}</li>
      `;
    }
    template += "</ul>";
    document.getElementById("races-data").innerHTML = template;
  }

  function drawDetails(details){
    var template = `
      <h3>Age: ${details.age}</h3>
      <h3>Alignment: ${details.alignment}</h3>
      <h3>Size: ${details.size_description}</h3>
    `
    document.getElementById('active-data').innerHTML = template
  }

  this.getDetails = function getDetails(url){
    debugger
    dndService.getDetails(url, drawDetails)
  }

  dndService.getCollection("races", drawRaces);









}