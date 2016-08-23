//<!-- Back End -->
function Movie = (_name, _times, _1stRun) {
  this.movie = _name;
  this.times = _times;
  this.firstRun = _1stRun
}

var ghostbusters = new Movie ("Ghostbusters 2016", ["1:30", "7:00"], true);
var starWarsIV = new Movie("Star Wars: A New Hope", ["3:00", "8:00"], false);
var starTrekBeyond = new Movie("Star Trek Beyond", ["10:00", "9:00"], true);

function Ticket = (_name, _age, _movie, _time) {
  this.name = _name;
  this.age = _age;
  this.movie = _movie;
}

//<!-- Front End  -->
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

  });
});
