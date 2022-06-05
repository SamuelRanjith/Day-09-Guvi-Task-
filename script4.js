// Print the total population of countries using reduce function

var request= new XMLHttpRequest();

request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

request.send();

request.onload = function() {
    var data= JSON.parse(request.response)
    console.log(data)
    
  const totalPopulation = data
  .filter((country) => country.region === "Asia")
  .map((country) => country.population)
  .reduce((pop, country) => pop + country);
console.log(totalPopulation);
}