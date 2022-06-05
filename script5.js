// Print the country which uses US Dollars as currency.

var request= new XMLHttpRequest();

request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

request.send();

request.onload = function() {
    var data= JSON.parse(request.response)
    console.log(data)

    const countryUsingDollar = data
    .filter((country) => country.currencies[0].code === "USD")
    .map((country) => country.name);
  console.log(countryUsingDollar);
    }