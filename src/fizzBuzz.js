var fizzBuzz = function() {};

fizzBuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

fizzBuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

fizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 === 0);
};