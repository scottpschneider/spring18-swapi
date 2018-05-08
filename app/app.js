console.log(5);
var app = {
  controllers: {
    swapiController: new SwapiController(),
    blarg: function() {
      console.log("ORDER IS FUN");
    },
    classesController: new ClassesController(),
    racesController: new RacesController()
  }
};
console.log("end");
