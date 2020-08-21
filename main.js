// fetch('https://coronavirus-19-api.herokuapp.com/countries?fbclid=IwAR2LmU933k87aOZWk0Wsqs29aSOvD8xC4p6vV-P8ZAX9HVXEDhXnnGyDo1g')

fetch('https://coronavirus-19-api.herokuapp.com/countries')
.then(response => response.json())
.then(element => {
    document.getElementById('countryName').innerHTML = element[0].country;
    document.getElementById('total-case').innerHTML = element[0].cases;
    document.getElementById('total-recover').innerHTML = element[0].recovered;
    document.getElementById('total-death').innerHTML = element[0].deaths;
    // document.getElementById('total-test').innerHTML = element[0].totalTests;
    document.getElementById('todayCase').innerHTML = element[0].todayCases;
    document.getElementById('todayDeath').innerHTML = element[0].todayDeaths;
})

document.getElementById('submitCountry').addEventListener('click', function(){

    let countryName = document.getElementById('searchCountry').value;
    // console.log(countryName);

    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(response => response.json())
    .then(data => displaySearchCountry(data))

    function displaySearchCountry(data)
    {
        // console.log(data[0]);

        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            // console.log(element.country);

            const elementCountryName = element.country;

            // console.log(elementCountryName);

            if(countryName == elementCountryName || countryName == elementCountryName.toLowerCase()){

                console.log(element);
                document.getElementById('countryName').innerHTML = element.country;
                document.getElementById('total-case').innerHTML = element.cases;
                document.getElementById('total-recover').innerHTML = element.recovered;
                document.getElementById('total-death').innerHTML = element.deaths;
                // document.getElementById('total-test').innerHTML = element.totalTests;
                document.getElementById('todayCase').innerHTML = element.todayCases;
                document.getElementById('todayDeath').innerHTML = element.todayDeaths;

                document.getElementById('searchCountry').value = '';
            }
        }
    }
})