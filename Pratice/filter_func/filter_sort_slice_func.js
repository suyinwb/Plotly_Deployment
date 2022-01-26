//return only larger than 1

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);


//return older than 5
var familyAge = [2,3,39,37,9];

var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});

//var familyAge = [3,2,39,37,9];
//var sortedAge = familyAge.sort((anElement,anotherElement) => anElement - anotherElement);
//descending age

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});

console.log(olderThanFive);

//return species name starts with s; different methods to solve this

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var startwitS = words.filter((words) => words.startsWith("s"));
console.log(startwitS);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
startwitS = words.filter(words => /^s/.test(words));
console.log(startwitS);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
startwitS = words.filter(/./.test.bind(/^s/));
console.log(startwitS);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
startwitS = words.filter((words) => words[0]==='s');
console.log(startwitS);


//slice

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
