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
  this.time = _time;
}
 Ticket.prototype.cost = function() {
   if (!this.movie.firstRun){
     return 3;
   } else {
     if (!this.time) {
       if (this.age < 16 || this.age > 55) {
         return 7;
       } else {
         return 9;
       }
     } else {
       if (this.age < 16 || this.age > 55) {
         return 10;
       } else {
         return 12;
       }
     }
   }
 }

//<!-- Front End  -->
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

  });
});
