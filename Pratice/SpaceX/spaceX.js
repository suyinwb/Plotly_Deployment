const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//get the first element
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

//get full_name of first element
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//get latitude inside location dictionary
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));
