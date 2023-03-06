const countryCodeInput = document.getElementById('countryCodeInput');
const searchButton = document.getElementById('searchButton');
const countryNameOutput = document.getElementById('countryNameOutput');
const flagOutput = document.getElementById('flagOutput');
const currencyOutput = document.getElementById('currencyOutput');
const capitalOutput = document.getElementById('capitalOutput');
const languagesOutput = document.getElementById('languagesOutput');
const timeZoneOutput = document.getElementById('timeZoneOutput');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const countryCode = countryCodeInput.value;
    fetch(`https://countrycode.dev/api/calls/phone/${countryCode}`)
        .then(response => response.json())
        .then(data => {
            data = data[0];
            const currency = data.currency;
            const capital = data.capital_city;
            const languages = data.languages;
            const timezone = data.time_zone;
            const isoCode = data.ISO2.toLowerCase();
            const countryName = data.country_name;
            countryNameOutput.innerText = countryName;
            flagOutput.src = `https://flagcdn.com/w20/${isoCode}.png`
            currencyOutput.innerText = currency;
            capitalOutput.innerText = capital;
            languagesOutput.innerText = languages;
            timeZoneOutput.innerText = timezone;
        })
        .catch(error => console.error(error));
});
