var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//method to calculate data for constructor objects of our 5 stores
function Store(location, minimum, maximum, avgcookies) {
  this.location = location;
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
  for (var i = 0; i < storeHours.length; i++) {
    this.cookieSales.push(Math.floor(this.avgcookies * this.randomNumGenerator()));
  }
  console.log(this.cookieSales);
};

// displaying each array value of the cities in ul on to the browser
function listHrs(store) {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + store.location + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var list_arr = [];

  for (var i = 0; i < storeHours.length; i++) {
    list_arr.push('<li>' + storeHours[i]+ ': ' + store.cookieSales[i] + '</li>');

  }
  var full_list = list_arr.join('');
  list.innerHTML = full_list;
  document.body.appendChild(list);
}

//all the constructors for the stores and their data.
var FirstPike = new Store('FirstPike',23,65,6.3);
var SeaTacAirport = new Store('SeaTacAirport',3,24,1.2);
var SeattleCenter = new Store('SeattleCenter',11,38,3.7);
var CapitolHill = new Store('CapitolHill',20,38,2.3);
var Alki = new Store('Alki',2,16,4.6);

//storing results for each location of the amount of cookie sales
FirstPike.randomCookieSales();
SeaTacAirport.randomCookieSales();
SeattleCenter.randomCookieSales();
CapitolHill.randomCookieSales();
Alki.randomCookieSales();
listHrs(FirstPike);
listHrs(SeaTacAirport);
listHrs(SeattleCenter);
listHrs(CapitolHill);
listHrs(Alki);
