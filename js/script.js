fetch(`http://api.weatherapi.com/v1/current.json?key=b17f7e9253ad466998e153919250310&q=London&aqi=no
`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("Results").textContent = JSON.stringify(data, null, 1);
    })
    .catch(error => console.log(error))
