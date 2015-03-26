// IIFE

(function() {

  angular
    .module('NinjasApp')
    .controller('NinjasController', NinjasController);

    function NinjasController() {

      var self = this;

      self.weapons = [
        {
          item: "Kama",
          price: 29.99,
          power: 9001
        },
        {
          item: "Ninja Stars",
          price: 15.99,
          power: 1000
        },
        {
          item: "Tonfa",
          price: 19.99,
          power: 500
        },
        {
          item: "Bare Freakn Hands",
          price: 0,
          power: 100
        },
        {
          item: "Sai",
          price: 49.99,
          power: 6000
        },
        {
          item: "Ninja Turtle",
          price: 1000.00,
          power: 1000001
        },
        {
          item: "Katana",
          price: 99.99,
          power: 4999
        },
        {
          item: "Baking Soda",
          price: 14.99,
          power: 2
        },
        {
          item: "Drinking Gourd",
          price: 199.99,
          power: 500
        },
        {
          item: "Duck",
          price: 1.99,
          power: 1
        },
        {
          item: "Nunchucks",
          price: 299.99,
          power: 50000
        }
      ];

    }



})();