// declared an array for store hours
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//method to calculate data for constructor objects of our 5 stores
function Store(location, minimum, maximum, avgcookies) {
  this.location = location;
  this.minimum = minimum;
  this.maximum = maximum;
  this.avgcookies = avgcookies;
  this.cookieSales = [];
  this.totalcookies = 0;
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

// for loop collects all the data from the total cookie calculator
Store.prototype.totalCookiesCalculator = function() {
  for (var j = 0; j < this.cookieSales.length; j++) {
    this.totalcookies += this.cookieSales[j];
  }
  return this.totalcookies;
};

// header function
var tHead = document.getElementById('hours-listed');
console.log('tHead', tHead);
//var hourRow = document.createElement('tr');
//tHead.appendChild(hourRow);

function renderHeader() {
  var hourRow = document.createElement('tr'); //creating table row element and assignming the value to var hourRow
  tHead.appendChild(hourRow); // hourRow is being appended into tHead as child element
  for (var i=0; i < storeHours.length; i++) { // looping through storeHours array in order to display hours in individual td element
    // console.log(storeHours);
    var hourCell = document.createElement('td');// creating individual td element and assigning value to var hourCell
    hourCell.innerHTML = storeHours[i]; // itterating through storeHours array and assigning specific index value to the innerHTML of previously created element hourCell
    hourRow.appendChild(hourCell); // attaching/appending var hourCell to var hourRow as a child element
    console.log('hourCell',hourCell);
  }
}
renderHeader(); // calling function to render header on to browser window


// displaying each array value of the cities in ul to the browser
// function listHrs(store) {
//   var container = document.createElement('div');
//   container.innerHTML = '<p>' + store.location + '</p>';
//   document.body.appendChild(container);
//
//
//   var list = document.createElement('ul');
//   var list_arr = [];
// looping through each storeHours array to display hours in browser
//   for (var i = 0; i < storeHours.length; i++) {
//     list_arr.push('<li>' + storeHours[i]+ ': ' + store.cookieSales[i] + '</li>');
//
//   }
//
//   list_arr.push('<li> Total: ' + store.totalCookiesCalculator() + '</li>');// adds total to the li
//   var full_list = list_arr.join('');
//   list.innerHTML = full_list;
//   document.body.appendChild(list);
// }

//all the constructors for the stores and their data.
var FirstPike = new Store('First Pike',23,65,6.3);
// var SeaTacAirport = new Store('Sea Tac Airport',3,24,1.2);
// var SeattleCenter = new Store('Seattle Center',11,38,3.7);
// var CapitolHill = new Store('Capitol Hill',20,38,2.3);
// var Alki = new Store('Alki',2,16,4.6);

//storing results for each location of the amount of cookie sales each hour
FirstPike.randomCookieSales();
// SeaTacAirport.randomCookieSales();
// SeattleCenter.randomCookieSales();
// CapitolHill.randomCookieSales();
// Alki.randomCookieSales();
// listHrs(FirstPike);
// listHrs(SeaTacAirport);
// listHrs(SeattleCenter);
// listHrs(CapitolHill);
// listHrs(Alki);
