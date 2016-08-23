//<!-- Back End -->
function Movie(_name, _times, _1stRun) {
  this.movie = _name;
  this.times = _times;
  this.firstRun = _1stRun
}

var ghostbusters = new Movie ("Ghostbusters 2016", ["1:30", "7:00"], true);
var starWarsIV = new Movie("Star Wars: A New Hope", ["3:00", "8:00"], false);
var starTrekBeyond = new Movie("Star Trek Beyond", ["10:00", "9:00"], true);

var movies = [ghostbusters, starWarsIV, starTrekBeyond];

function Ticket(_name, _age, _movie, _time) {
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
var tickets = [];
//<!-- Front End  -->
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    var userName = $("#name-input").val();
    var userAge = parseInt($("#age-input").val());
    var movieSelect = parseInt($("#movie-select").val());
    var timeSelect = parseInt($("#time-select").val());
    //var userMovie;
    // if (ghostbusters.movie === movieSelect) {
    //   userMovie = ghostbusters;
    // } else if (starWarsIV.movie === movieSelect) {
    //   userMovie = starWarsIV;
    // } else {
    //   userMovie = starTrekBeyond;
    // }
    var newTicket = new Ticket (userName, userAge, movies[movieSelect], timeSelect);
    tickets.push(newTicket);
    // $("#result p").text(newTicket.name+ ", you are going to see "+ newTicket.movie.movie+" at "+newTicket.movie.times[timeSelect]+". This is going to cost you $"+newTicket.cost()+".");
    $("#result").append("<h2>" + newTicket.name + ", here are your tickets:</h2><ul></ul>");
    var totalCost = 0;
    var counter = 0;
    tickets.forEach(function(ticket){
      $("#result ul").append("<li><input type='checkbox' value='" + counter + "'> " + ticket.movie.movie+" at "+ticket.movie.times[timeSelect]+". This is going to cost you $"+ticket.cost() + "</li>");
      totalCost += ticket.cost();
      counter++;
    });
    $("#result").append("<h2>Total Cost = "+totalCost+"</h2>");
    $("#delete").show();

  });
  $("#delete").click(function(){
    //debugger;
    var checked = $("#result input:checked").parent();
    console.log(checked);
    checked.remove();
  });

});
