//type this in the terminal of the index.html
// python -m http.server
d3.json("samples.json").then(function(data){
    console.log(data);
});

//get only wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//sorted wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

//filter null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});


//forEach in the json file, get infor for the First person
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});

//Example: Object.entries
//researcher1 = {
//    name: 'Roza',
//    age: 34,
//    hobby: 'Hiking'
//};
//console.log(Object.entries(researcher1));

//Below first & second are arbitrary, could also use key value
//researcher1.forEach(([first, second]) => console.log(first + ": " + second));
