var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);


var doubled = numbers.map(function(integer) {
return integer * 2;
});

var doubled = numbers.map(function(carPrice) {
return carPrice * 2;
});


//add five to the original list numbers

var numbers = [0,2,4,6,8];

var addfive = numbers.map(function(num) {
return num + 5;
});
console.log(addfive);
