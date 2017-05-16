//method to calculate data for constructor objects of our 5 stores
function Store(minimum, maximum, avgcookies) {
  this.minimum = minimum;
  this.maximum = maximum;
  this.avgcookies = avgcookies;
}
//all the constructors for the stores and their data.
var FirstPike = new Store(23,65,6.3);
var SeaTacAirport = new Store(3,24,1.2);
var SeattleCenter = new Store(11,38,3.7);
var CapitolHill = new Store(20,38,2.3);
var Alki = new Store(2,16,4.6);

cookieSales: [];

// this prototype generates the amount of random customers that come through the door
Store.prototype.randomNumGenerator = function() {
  return Math.floor(Math.random() * (this.maximum - this.minimum)) + this.minimum;
};
//for loop is counting through the amount of cookies sold per hour within 15 hours.
Store.prototype.randomCookieSales = function() {
  for (var i = 0; i < 15; i++) {
    this.cookieSales.push(Math.floor(this.avgcookies * this.randomNumGenerator()));
  }
  console.log(this.cookieSales);
};
Store.FirstPike.randomNumGenerator();
