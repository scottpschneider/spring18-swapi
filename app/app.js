console.log(5);
var app = {
  controllers: {
    swapiController: new SwapiController(),
    blarg: function() {
      console.log("ORDER IS FUN");
    }
  }
};
console.log("end");
