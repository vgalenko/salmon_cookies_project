//method to calculate data for constructor objects of our 5 stores
function Store(minimum, maximum, avgcookies) {
  this.minimum = minimum;
  this.maximum = maximum;
  this.avgcookies = avgcookies;
  this.cookieSales = [];
}

// this prototype function generates the amount of random customers that come through the door
Store.prototype.randomNumGenerator = function() {
  return Math.floor(Math.random() * (this.maximum - this.minimum)) + this.minimum;
};
//for loop is counting through amount of walk in customers and cookies sold per-hour in 15 hour day.
Store.prototype.randomCookieSales = function() {
  for (var i = 0; i < 14; i++) {
    this.cookieSales.push(Math.floor(this.avgcookies * this.randomNumGenerator()));
  }
  console.log(this.cookieSales);
};


//all the constructors for the stores and their data.
var FirstPike = new Store(23,65,6.3);
var SeaTacAirport = new Store(3,24,1.2);
var SeattleCenter = new Store(11,38,3.7);
var CapitolHill = new Store(20,38,2.3);
var Alki = new Store(2,16,4.6);

//storing results for each location of the amount of cookie sales
FirstPike.randomCookieSales();
SeaTacAirport.randomCookieSales();
SeattleCenter.randomCookieSales();
CapitolHill.randomCookieSales();
Alki.randomCookieSales();

// diplaying each array value of the cities in ul on to the browser
var hours = [this.cookieSales];

var  listOut = document.getElementById('ul');
var data = [];

for (var i = 0; i < hours.length; i++) {
  data.push('<li>' + listOut[i].cookieSales + '</li>');
}
