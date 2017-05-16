var FirstPike = {
  minimum: 23 ,
  maximum: 65,
  avgcookies: 6.3,
  cookieSales: [],

  randomNumGenerator: function() {
    return Math.floor(Math.random() * (this.maximum - this.minimum)) + this.minimum;
  },
  randomCookieSales: function() {
    for (var i = 0; i < 15; i++) {
      this.cookieSales.push(Math.floor(this.avgcookies * this.randomNumGenerator()));
    }
    console.log(this.cookieSales);
  }
};
FirstPike.randomNumGenerator();



// var SeaTacAirport = {
//   minimum: 3,
//   maximum: 24,
//   avgcookies: 1.2,
// };
// SeaTacAirport;
//
// var SeattleCenter = {
//   minimum: 11,
//   maximum: 38,
//   avgcookies: 3.7,
// };
// SeattleCenter;
//
// var CapitolHill = {
//   minimum: 20,
//   maximum: 38,
//   avgcookies: 2.3,
// };
// CapitolHill;
//
// var Alki = {
//   minimum: 2,
//   maximum: 16,
//   avgcookies: 4.6
// };
// Alki;
